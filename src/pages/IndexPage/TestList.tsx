import React, { useState } from 'react'
import { Form } from '../../models/Form'
import { HStack, VStack, Text, Button, Tooltip, CloseButton, useToast } from '@chakra-ui/react'
import { ArrowRightIcon, CloseIcon, CopyIcon, EditIcon } from '@chakra-ui/icons'
import { copyFormAdress } from '../../utils'
import { useNavigate } from '@tanstack/react-router'
import { useMutation } from 'react-query'
import FormService from '../../services/FormService'

type TestListProps = {
    tests: Form[],
    invalidateTests: () => void
}

const TestList: React.FC<TestListProps> = ({ tests, invalidateTests }) => {
    const navigate = useNavigate()
    const toast = useToast();
    const [deletedTest, setDeletedTest] = useState<string | null>(null)

    const deleteTestMutation = useMutation(({ testId }: { testId: string }) => {
        return FormService.deleteTest(testId)
    }, {
        onSuccess: () => {
            invalidateTests()
            toast({
                title: `Тест успешно удален`,
                status: 'success',
                isClosable: true,
                duration: 1000
            })
            setDeletedTest(null)
        },
        onError: () => {
            toast({
                title: 'Ошибка',
                description: 'Не получилось удалить форму',
                status: 'error',
                isClosable: true,
            })
            setDeletedTest(null)
        }
    })

    const deleteTest = (testId: string) => {
        setDeletedTest(testId)
        deleteTestMutation.mutate({ testId })
    }

    console.log(tests);
    

    return (
        <VStack width='100%'>
            {tests.map(test => (
                <HStack width='100%' justify={'space-between'} shadow='md' p={8} borderRadius='lg'>
                    <VStack justify='flex-start' align='flex-start'>
                        <Text>
                            Название: {test.title}
                        </Text>
                        <Text>
                            Количество вопросов: {test.questions.length}
                        </Text>
                    </VStack>
                    <HStack>
                        <Tooltip label='Редактировать тест'>
                            <Button onClick={() => navigate({ to: `/editTest/$testId`, params: { testId: test.id || '' } })}>
                                <EditIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip label='Скопировать ссылку'>
                            <Button onClick={() => copyFormAdress(test.id || '')} >
                                <CopyIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip label='Пройти тест'>
                            <Button onClick={() => navigate({ to: '/test/$testId', params: { testId: test.id || '' } })}>
                                <ArrowRightIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip label='Удалить тест'>
                            <Button colorScheme='red' isLoading={deletedTest == test.id} onClick={() => deleteTest(test.id || '')}>
                                <CloseIcon />
                            </Button>
                        </Tooltip>
                    </HStack>
                </HStack>
            ))
            }
        </VStack >
    )
}

export default TestList