import { LoginInput } from '@/app/domain/validation/loginSchema';
import { RegisterInput } from '@/app/domain/validation/registerSchema';
import { User } from '../../store/api/auth/types';
import { BaseApiService } from './baseApiService';
import { API_ENDPOINTS } from './endPoints';

export class AuthApiService extends BaseApiService {
  login(data: LoginInput) {
    return this.post<LoginInput, User>(API_ENDPOINTS.LOGIN, data);
  }

  register(data: RegisterInput) {
    return this.post<RegisterInput, User>(API_ENDPOINTS.REGISTER, data);
  }
}

export const authApiService = new AuthApiService();
