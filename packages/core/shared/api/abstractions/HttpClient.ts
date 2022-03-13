export interface HttpResponse<T> {
	data: T
	status: number
	statusText: string
	headers: any
	config: any
}

export abstract class HttpClient {
	abstract get<T>(url: string): Promise<HttpResponse<T>>
	abstract post<T>(url: string, data: any): Promise<HttpResponse<T>>
	abstract put<T>(url: string, data: any): Promise<HttpResponse<T>>
	abstract delete(url: string): void
}
