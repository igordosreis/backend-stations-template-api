import ITemplate from '@domain/entity/template/ITemplate';

export default class TemplateDBO implements ITemplate {
  id: string;

  constructor(data: ITemplate) {
    Object.assign(this, data);
  }
}