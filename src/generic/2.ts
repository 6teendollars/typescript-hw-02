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

function compare<T extends AllType>(top: Pick<T, 'name'| 'color'>, bottom: Pick<T, 'position' | 'weight'>): AllType {
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
}

const bottomObject = {
  position: 3,
  weight: 12,
}

const result = compare(topObject, bottomObject) 
console.log(result);

export {};