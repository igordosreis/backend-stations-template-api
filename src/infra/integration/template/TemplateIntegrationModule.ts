import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import TemplateIntegration from './TemplateIntegration';

@Module({
  imports: [HttpModule],
  providers: [TemplateIntegration],
  exports: [TemplateIntegration],
})

export default class TemplateIntegrationModule {}