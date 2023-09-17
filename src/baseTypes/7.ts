/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek{
  Mon,
  Tue,
  Wen,
  Thu,
  Fri,
  Sat,
  Sun

}

function isWeekend(day: DayOfWeek): boolean{
  return day === DayOfWeek.Sat || day === DayOfWeek.Sun;

}

console.log(isWeekend(DayOfWeek.Sat))//true
console.log(isWeekend(DayOfWeek.Mon))//False
