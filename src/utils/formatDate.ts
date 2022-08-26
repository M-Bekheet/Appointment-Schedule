//format date from day-month-year to year-month-day as Date in js is using the second format
const formatDate = (date: string) => date.split('-').reverse().join('-');

export default formatDate;
