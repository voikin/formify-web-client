import { createLazyFileRoute } from '@tanstack/react-router'

const SignupPage = () => {
	return <h1>SIGNUP PAGE</h1>
}

export const Route = createLazyFileRoute('/signup')({
	component: SignupPage,
})
