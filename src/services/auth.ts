import { client } from './axios';

const login = (body: LoginBody): Promise<LoginResponse> => client.post(`/api/auth/login`, body);
const register = (body: RegisterBody): Promise<RegisterResponse> => client.post(`/api/auth/regitster`, body);

const authService = {
  login,
  register,
};
export default authService;
