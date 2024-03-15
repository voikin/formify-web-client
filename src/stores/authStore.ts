import { create } from 'zustand'
import { User } from '../models/User'
import AuthService from '../services/AuthService'
import { AuthResponse } from '../models/response/AuthResponse'
import { API_URL } from '../api'
import axios from 'axios'

interface AuthState {
	user: User | null
	isAuth: boolean
	login: (email: string, password: string) => Promise<void>
	register: (email: string, username: string, password: string) => Promise<void>
	logout: () => Promise<void>
	checkAuth: () => Promise<void>
}

const useAuthStore = create<AuthState>((set) => ({
	user: null,
	isAuth: false,
	login: async (email: string, password: string) => {
		const response = await AuthService.login(email, password)
		localStorage.setItem('access_token', response.data.access_token)
		const { user } = response.data
		set({ user, isAuth: true })
	},
	register: async (email: string, username: string, password: string) => {
		const response = await AuthService.registration(email, username, password)
		localStorage.setItem('access_token', response.data.access_token)
		const { user } = response.data
		set({ user, isAuth: true })
	},
	logout: async () => {
		await AuthService.logout()
		localStorage.removeItem('access_token')
		set({ user: null, isAuth: false })
	},
	checkAuth: async () => {
		const response = await axios.get<AuthResponse>(`${API_URL}auth/refresh`, {
			withCredentials: true,
		})
		localStorage.setItem('access_token', response.data.access_token)
		set({ isAuth: true })
		set({ user: response.data.user })
	},
}))

export default useAuthStore
