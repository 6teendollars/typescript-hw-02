/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;
type dnableOrDesable = "enable" | "disable";

let literal: dnableOrDesable;
// literal = enable
literal = "enable"
literal = "disable"