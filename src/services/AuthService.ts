import $api from '../api'
import { AxiosResponse } from 'axios'
import { AuthResponse } from '../models/response/AuthResponse'

export default class AuthService {
	static async login(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('auth/login', { email, password })
	}

	static async registration(
		email: string,
		name: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('auth/signup', { email, name, password })
	}

	static async logout(): Promise<void> {
		return $api.get('auth/logout')
	}
}
