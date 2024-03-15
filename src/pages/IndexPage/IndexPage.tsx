import { Button, HStack } from "@chakra-ui/react"
import useAuthStore from "../../stores/authStore"
import { useNavigate } from "@tanstack/react-router"
import { useQuery } from "react-query"
import FormService from "../../services/FormService"
import TestList from "./TestList"

export const IndexPage = () => {
    const navigate = useNavigate()
    const { isAuth } = useAuthStore((state) => state)
    const testsQuery = useQuery('tests', FormService.getTests, {
        select: data => data.data
    })

    if (!isAuth) {
        return (
            <HStack justify='center' py='32px'>
                <Button onClick={() => navigate({ to: '/login' })}>Войти</Button>
                <Button onClick={() => navigate({ to: '/signup' })}>Регистрация</Button>
            </HStack>
        )
    }

    return <TestList tests={testsQuery.data || []} invalidateTests={testsQuery.refetch} />
}