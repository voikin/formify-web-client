import { createLazyFileRoute } from '@tanstack/react-router'

const LoginPage = () => {
	return <h1>LOGIN PAGE</h1>
}

export const Route = createLazyFileRoute('/login')({
	component: LoginPage,
})
