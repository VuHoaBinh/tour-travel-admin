import { LoginScreen, RegisterScreen } from 'views/Auth';

const authRoute = {
  login: {
    path: '/login',
    url: '/auth/login',
    component: LoginScreen,
  },
  register: {
    path: '/register',
    url: '/auth/register',
    component: RegisterScreen,
  },
};

export default authRoute;
