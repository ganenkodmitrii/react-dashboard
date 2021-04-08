import { LoginPage } from 'features/auth';
import { DashboardPage } from 'features/dashboard';
import { FormPage } from './features/home';
import { RouteProps } from 'types/common';
export const routes: RouteProps[] = [
  {
    path: '/',
    text: 'login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/dashboard',
    text: 'advance',
    exact: true,
    component: DashboardPage,
  },
  {
    path: '/form',
    text: 'form',
    exact: true,
    component: FormPage,
  },
];
