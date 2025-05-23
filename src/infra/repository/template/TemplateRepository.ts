import { Injectable } from '@nestjs/common';
import ITemplateRepository from '@domain/repository/template/ITemplateRepository';
import Prisma from '../prisma/Prisma';

@Injectable()
export default class TemplateRepository implements ITemplateRepository {
  constructor(
    private readonly _prisma: Prisma,
  ) {}
}