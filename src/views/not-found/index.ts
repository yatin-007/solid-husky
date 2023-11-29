import { MainLayout } from '../../layouts';
import NotFound from './NotFound';

export const NotFoundRoutes = {
  path: '*',
  component: NotFound,
  layout: MainLayout,
};
