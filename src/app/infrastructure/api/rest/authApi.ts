import { LoginInput } from '@/app/domain/validation/loginSchema';
import { RegisterInput } from '@/app/domain/validation/registerSchema';
import { RegisterResponse, User } from '../../store/auth/types';
import { BaseApiService } from './baseApiService';
import { API_ENDPOINTS } from './endPoints';

export class AuthApiService extends BaseApiService {
  login(data: LoginInput) {
    return this.post<LoginInput, User>(API_ENDPOINTS.LOGIN, data);
  }

  register(data: RegisterInput) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { repassword, ...submitData } = data;
    return this.post<Omit<RegisterInput, 'repassword'>, RegisterResponse>(
      API_ENDPOINTS.REGISTER,
      submitData,
    );
  }
}

export const authApiService = new AuthApiService();
