import React from 'react'
import { Route } from '../../routes/editTest.$testId'
import { FormCreator } from '../FormPage/FormCreator/FormCreator'

export const EditTestPage = () => {
    const { testId } = Route.useParams()
    return (
        <FormCreator formId={testId} />
    )
}
