const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export class BaseApiService {
  constructor(private token?: string) {}

  private getHeaders(isFormData: boolean = false): HeadersInit {
    const headers: HeadersInit = isFormData ? {} : { 'Content-Type': 'application/json' };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  protected async get<TResult>(url: string): Promise<TResult> {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: this.getHeaders(),
      credentials: 'include',
    });

    return this.handleResponse<TResult>(res);
  }

  protected async post<TData, TResult>(
    url: string,
    data: TData,
    isFormData: boolean = false,
  ): Promise<TResult> {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: this.getHeaders(isFormData),
      body: isFormData ? (data as unknown as FormData) : JSON.stringify(data),
      credentials: 'include',
    });

    return this.handleResponse<TResult>(res);
  }

  protected async put<TData, TResult>(
    url: string,
    data: TData,
    isFormData: boolean = false,
  ): Promise<TResult> {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: this.getHeaders(isFormData),
      body: isFormData ? (data as unknown as FormData) : JSON.stringify(data),
      credentials: 'include',
    });

    return this.handleResponse<TResult>(res);
  }

  protected async delete<TResult>(url: string): Promise<TResult> {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
      credentials: 'include',
    });

    return this.handleResponse<TResult>(res);
  }

  private async handleResponse<TResult>(res: Response): Promise<TResult> {
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Something went wrong');
    }

    return res.json();
  }
}
