import $api from '../api'
import { AxiosResponse } from 'axios'
import { Answer, Form } from '../models/Form'
import { CreateFormResponse, FormsResponse, GetFormResponse, ResultsResponse } from '../models/response/FormResponse'

export default class FormService {
    static async create(form: Form): Promise<AxiosResponse<CreateFormResponse>> {
        return $api.post('api/form/create', { form })
    }

    static async get(testId: string): Promise<AxiosResponse<GetFormResponse>> {
        return $api.get(`api/form/${testId}`)
    }

    static async submit(testId: string, answers: Answer[]): Promise<AxiosResponse<ResultsResponse>> {
        return $api.post(`api/form/${testId}`, answers)
    }

    static async getTests(): Promise<AxiosResponse<FormsResponse>> {
        return $api.get('api/tests')
    }

    static async deleteTest(testId: string) {
        return $api.delete(`api/form/${testId}`)
    }
}