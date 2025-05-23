import { Module } from '@nestjs/common';
import Prisma from './prisma/Prisma';
import TemplateRepository from './template/TemplateRepository';

@Module({
  providers: [
    Prisma,
    TemplateRepository,
  ],
  exports: [
    TemplateRepository,
  ],
})
class RespositoryModule {}

export default RespositoryModule;
