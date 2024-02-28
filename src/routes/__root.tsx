import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
	component: () => (
		<>
			<div style={{display: 'flex', gap: '8px'}}>
				<Link to='/'>Home</Link> <Link to='/login'>Login</Link>
				<Link to='/signup'>Sign Up</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
})
