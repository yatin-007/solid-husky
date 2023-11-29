import { RouteDefinition, useRoutes } from '@solidjs/router';

import {
  BlogsRoute,
  UsersRoute,
  DashboardRoute,
  NotFoundRoutes,
  SignInRoutes,
} from './views';
import { createRoutes } from './common/utils/routeUtils';

export const RouteWrapper = () => {
  const loggedIn = false;

  const PublicRoutes = [NotFoundRoutes, SignInRoutes];
  const ProtectedRoutes = [DashboardRoute, BlogsRoute, UsersRoute];

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!loggedIn) {
    const appRoutes: RouteDefinition[] = createRoutes({ PublicRoutes });
    return useRoutes(appRoutes);
  }

  const appRoutes = createRoutes({
    PublicRoutes,
    ProtectedRoutes,
  });

  return useRoutes(appRoutes);
};
