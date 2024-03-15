import React from "react";
import { Route } from "../../routes/test.$testId";
import { useQuery } from "react-query";
import FormService from "../../services/FormService";
import { Center, Spinner, useToast } from "@chakra-ui/react";
import { TestTaker } from "./TestTaker/TestTaker";
import { useNavigate } from "@tanstack/react-router";

export const TestPage: React.FC = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const { testId } = Route.useParams()
    const { data, isLoading } = useQuery(testId, () => FormService.get(testId), {
        select: (data) => data.data,
    })

    if (isLoading) {
        return (
            <Center width='100%' height='100vh'>
                <Spinner size='xl' />
            </Center>
        )
    }

    if (!data) {
        toast({
            title: 'Ошибка',
            description: 'Не получилось открыть тест',
            status: 'error',
            isClosable: true,
            duration: 2000
        })
        navigate({ to: '/' })
        return
    }

    return <TestTaker form={data} />
}