import { createFileRoute } from '@tanstack/react-router'
import { EditTestPage } from '../pages/EditTestPage/EditTestPage'

export const Route = createFileRoute('/editTest/$testId')({
    component: EditTestPage
})
