import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import RouteAuthentication from './RouteAuthentication';

@Module({
  imports: [HttpModule],
  providers: [RouteAuthentication],
  exports: [RouteAuthentication],
})
class RouteAuthenticationModule {}

export default RouteAuthenticationModule;