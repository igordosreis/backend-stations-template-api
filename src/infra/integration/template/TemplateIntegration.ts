import { Injectable } from '@nestjs/common';
import { ITemplateIntegration } from '@domain/integration/template/ITemplateIntegration';
import { HttpService } from '@nestjs/axios';

@Injectable()
export default class TemplateIntegration implements ITemplateIntegration {
  constructor(private readonly _httpService: HttpService) {}
}