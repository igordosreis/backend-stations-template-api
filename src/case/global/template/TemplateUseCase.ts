import ITemplateUseCase from '@domain/case/global/giftCard/ITemplateUseCase';
import TemplateRepository from '@infra/repository/template/TemplateRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class TemplateUseCase implements ITemplateUseCase {
  constructor(
    private readonly _templateRepository: TemplateRepository,
  ) {}
}