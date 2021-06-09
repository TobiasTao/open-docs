import { Route } from '@angular/router';
import { LayoutComponent } from '@open-docs/web/shell/ui/layout';

export const webShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('@open-docs/web/home/feature')).WebHomeModule,
      },
    ],
  },
];
