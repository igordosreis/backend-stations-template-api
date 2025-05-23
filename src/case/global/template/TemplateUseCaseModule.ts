import RespositoryModule from '@infra/repository/RepositoryModule';
import { Module } from '@nestjs/common';
import TemplateUseCase from './TemplateUseCase';

@Module({
  imports: [
    RespositoryModule,
  ],
  providers: [TemplateUseCase],
  exports: [TemplateUseCase],
})

export default class TemplateUseCaseModule {}