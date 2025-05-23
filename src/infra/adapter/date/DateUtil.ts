import IDateUtil from '@domain/adapter/date/IDateUtil';
import { Injectable } from '@nestjs/common';
import { endOfMonth, formatISO, startOfMonth } from 'date-fns';

@Injectable()
export default class DateUtil implements IDateUtil {
  public formatDateToISO(date: Date): string {
    return formatISO(date);
  }

  public getFirstDayOfMonth(date: Date): Date {
    return (startOfMonth(date));
  }

  public getLastDayOfMonth(date: Date): Date {
    return (endOfMonth(date));
  }
}