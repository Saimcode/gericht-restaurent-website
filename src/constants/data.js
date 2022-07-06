import images from './images';

const food = [
  {
    title: 'Burger Meal',
    price: '$56',
    tags: 'AU | Meal',
  },
  {
    title: '3x Pizza Deal',
    price: '$59',
    tags: 'AU | Deal',
  },
  {
    title: 'Kebab Meal',
    price: '$44',
    tags: 'FR | Deal',
  },
  {
    title: 'Shawarma',
    price: '$31',
    tags: 'CA | Meal',
  },
  {
    title: 'Donner Roll',
    price: '$26',
    tags: 'IE | Meal',
  },
];

const drinks = [
  {
    title: 'Coca Cola',
    price: '$20',
    tags: 'Free with a meal | Soda | 30 ml',
  },
  {
    title: "Pepsi",
    price: '$16',
    tags: 'Free with a meal | Soda | 30 ml',
  },
  {
    title: 'Water',
    price: '$10',
    tags: 'Free with a meal | 30 ml',
  },
  {
    title: 'Water',
    price: '$31',
    tags: 'Free with a meal | 30 ml',
  },
  {
    title: 'Rio',
    price: '$26',
    tags: 'Free with a meal | Soda | 30 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Fully Hygenic',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { food, drinks, awards };
