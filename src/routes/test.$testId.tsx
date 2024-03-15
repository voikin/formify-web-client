import { createFileRoute } from '@tanstack/react-router'
import { TestPage } from '../pages/TestPage/TestPage'

export const Route = createFileRoute('/test/$testId')({
    component: () => <TestPage />
})
