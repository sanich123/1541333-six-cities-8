import { Review } from '../types/types';
import fakerStatic from 'faker/locale/en_GB';
// eslint-disable-next-line no-console
console.log(fakerStatic);

export const mockReviews: Review[] = [
  {
    comment: fakerStatic.lorem.sentences(),
    date: '2019-07-08T14:13:56.569Z',
    id: 1,
    rating: fakerStatic.datatype.number(),
    user: {
      avatarUrl: fakerStatic.image.avatar(),
      id: 1,
      isPro: fakerStatic.datatype.boolean(),
      name: fakerStatic.name.findName(),
    },
  }, {
    comment: fakerStatic.lorem.sentences(),
    date: '2019-07-08T14:13:56.569Z',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: fakerStatic.image.avatar(),
      id: 2,
      isPro: true,
      name: fakerStatic.name.findName(),
    },
  },
];
