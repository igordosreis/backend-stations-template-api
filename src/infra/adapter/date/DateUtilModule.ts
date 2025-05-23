import { Module } from '@nestjs/common';
import DateUtil from './DateUtil';

@Module({
  providers: [DateUtil],
  exports: [DateUtil],
})
class DateUtilModule {}

export default DateUtilModule;