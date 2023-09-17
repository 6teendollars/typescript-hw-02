/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
type Deatils = {
   createAt: Date;
    updateAt: Date;
}

type PageType = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details: Deatils;
}

type CombinedPageType = PageType |
{
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
}
  
const page1:CombinedPageType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: CombinedPageType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {};