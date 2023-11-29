import { IRoute } from '../../common/Types';
import { MainLayout } from '../../layouts';
import Dashboard from './Dashboard';

export const DashboardRoute: IRoute = {
  path: '/dashboard',
  component: Dashboard,
  layout: MainLayout,
};
