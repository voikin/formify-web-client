import { createLazyFileRoute } from '@tanstack/react-router'
import { FormPage } from '../pages/FormPage/FormPage'

export const Route = createLazyFileRoute('/form')({
	component: FormPage,
})
