import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { HttpClient, HttpResponse } from "../abstractions/HttpClient"

export class AxiosHttpClient extends HttpClient {
	private baseUrl: string
	private axiosInstance: AxiosInstance

	constructor(baseUrl: string) {
		super()
		this.baseUrl = baseUrl
		this.axiosInstance = axios.create({
			baseURL: this.baseUrl,
			headers: {
				"Content-Type": "application/json",
			},
		})
	}

	get<T>(url: string): Promise<HttpResponse<T>> {
		return new Promise<HttpResponse<T>>((resolve, reject) => {
			const options: AxiosRequestConfig = {
				headers: {},
			}

			this.api()
				.get(url, options)
				.then((response: any) => {
					resolve({ ...response, data: response.data as T })
				})
				.catch((response: any) => {
					reject(response)
				})
		})
	}

	post<T>(url: string, data: any): Promise<HttpResponse<T>> {
		return new Promise<HttpResponse<T>>((resolve, reject) => {
			const options: AxiosRequestConfig = {
				headers: {},
			}

			this.api()
				.post(url, data, options)
				.then((response: any) => {
					resolve({ ...response, data: response.data as T })
				})
				.catch((response: any) => {
					reject(response)
				})
		})
	}

	put<T>(url: string, data: any): Promise<HttpResponse<T>> {
		return new Promise<HttpResponse<T>>((resolve, reject) => {
			const options: AxiosRequestConfig = {
				headers: {},
			}

			this.api()
				.put(url, data, options)
				.then((response: any) => {
					resolve({ ...response, data: response.data as T })
				})
				.catch((response: any) => {
					reject(response)
				})
		})
	}

	delete(url: string): void {
		const options: AxiosRequestConfig = {
			headers: {},
		}

		this.axiosInstance.delete(url, options)
	}

	private api() {
		return this.axiosInstance
	}
}
