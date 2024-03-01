import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useEffect } from 'react'
import { Spinner, Center, Flex, Text, Button } from '@chakra-ui/react'
import useAuthStore from '../stores/authStore'
import { useQuery } from 'react-query'
import { EmailIcon } from '@chakra-ui/icons'

const RootPage: React.FC = () => {
	const { isAuth, checkAuth, user, logout } = useAuthStore((state) => state)
	const checkAuthQuery = useQuery('check_auth', checkAuth, {
		enabled: false,
	})

	useEffect(() => {
		if (localStorage.getItem('access_token')) {
			checkAuthQuery.refetch()
		}
	}, [])

	if (checkAuthQuery.isLoading) {
		return (
			<Center width='100vw' height='100vh'>
				<Spinner size='xl' />
			</Center>
		)
	}

	return (
		<>
			<Flex py={4} px={16} gap={8} alignItems='center'>
				<Link to='/'>
					<Button size='sm'>Домашняя страница</Button>
				</Link>
				{!isAuth && (
					<Link to='/login'>
						<Button size='sm' colorScheme='teal'>
							Войти в аккаунт
						</Button>
					</Link>
				)}
				{!isAuth && (
					<Link to='/signup'>
						<Button size='sm' colorScheme='teal'>
							Регистрация
						</Button>
					</Link>
				)}
				{isAuth && (
					<Button size='sm' gap={2}>
						<EmailIcon />
						<Text>{user?.email}</Text>
					</Button>
				)}
				{isAuth && (
					<Button size='sm' onClick={() => logout()} colorScheme='teal'>
						Выйти
					</Button>
				)}
			</Flex>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	)
}

export const Route = createRootRoute({
	component: RootPage,
})
