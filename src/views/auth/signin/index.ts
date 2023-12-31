import { IRoute } from '../../../common/Types';
import { AuthLayout } from '../../../layouts';
import SignIn from './SignIn';

export const SignInRoutes: IRoute = {
  path: '/sign-in',
  component: SignIn,
  layout: AuthLayout,
};
