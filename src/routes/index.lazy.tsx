import { createLazyFileRoute } from '@tanstack/react-router'

const IndexPage: React.FC = () => {
	return <h1>INDEX PAGE</h1>
}

export const Route = createLazyFileRoute('/')({
	component: IndexPage,
})
