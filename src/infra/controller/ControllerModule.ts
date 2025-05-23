import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import ZodPipeLine from '@infra/middleware/global/zod/ZodPipeLine';
import AppControllerModule, { appRoutes } from './app/AppControllerModule';
import DashboardControllerModule, { dashboardRoutes } from './dashboard/DashboardControllerModule';

const routes: Routes = [
  {
    path: 'app',
    module: AppControllerModule,
    children: appRoutes,
  },
  {
    path: 'dashboard',
    module: DashboardControllerModule,
    children: dashboardRoutes,
  },
];

@Module({
  imports: [
    AppControllerModule,
    DashboardControllerModule,
    RouterModule.register(routes),
  ],
  providers: [ZodPipeLine],
})
class ControllerModule {}

export default ControllerModule;