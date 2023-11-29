import { MainLayout } from '../../layouts';
import UserList from './UserList';

export const UsersRoute = {
  path: '/users',
  component: UserList,
  layout: MainLayout,
};
