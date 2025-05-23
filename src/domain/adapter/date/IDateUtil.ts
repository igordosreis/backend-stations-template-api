export default interface IDateUtil {
  formatDateToISO(date: Date): string
  getFirstDayOfMonth(date: Date): Date
  getLastDayOfMonth(date: Date): Date
}