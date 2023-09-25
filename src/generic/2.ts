/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T extends AllType>(top: Pick<T, keyof AllType>, bottom: Pick<T, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
const topObject = {
  name: "Aleks",
  color: "blue",
  position: 2,
  weight: 13,
}

const bottomObject = {
  name: "Tom",
  color: "grean",
  position: 3,
  weight: 12,
}

const result = compare(topObject, bottomObject) 
console.log(result);

export {};