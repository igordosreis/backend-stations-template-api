import { Module } from '@nestjs/common';
import { Routes } from '@nestjs/core';
import TemplateDashboardControllerModule from './template/TemplateDashboardControllerModule';

const dashboardRoutes: Routes = [
  {
    path: 'template',
    module: TemplateDashboardControllerModule,
  },
];

@Module({
  imports: [
    TemplateDashboardControllerModule,
  ],
})
class DashboardControllerModule {}

export { dashboardRoutes };
export default DashboardControllerModule;