import { Offer } from '../types/types';
import fakerStatic from 'faker/locale/en_GB';

export const mockOffers: Offer[] = [
  {
    bedrooms: fakerStatic.datatype.number(16),
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12,
      },
      name: 'Amsterdam',
    },
    description: fakerStatic.lorem.sentences(),
    goods: [fakerStatic.datatype.string(7), fakerStatic.datatype.string(7), fakerStatic.datatype.string(7), fakerStatic.datatype.string(7), fakerStatic.datatype.string(7)],
    host: {
      isPro: fakerStatic.datatype.boolean(),
      avatarUrl: fakerStatic.image.avatar(),
      id: 1,
      name: fakerStatic.name.findName(),
    },
    id: 1,
    images: [fakerStatic.image.city(), fakerStatic.image.abstract(), fakerStatic.image.business(), fakerStatic.image.animals(), fakerStatic.image.food() ],
    isPremium: fakerStatic.datatype.boolean(),
    location: {
      latitude: 52.4009553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    isFavorite: fakerStatic.datatype.boolean(),
    maxAdults: fakerStatic.datatype.number(10),
    previewImage: fakerStatic.image.image(),
    price: 56,
    rating: fakerStatic.datatype.number(5),
    title: fakerStatic.lorem.sentence(),
    type: fakerStatic.datatype.string(7),
  },
  {
    bedrooms: fakerStatic.datatype.number(10),
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: fakerStatic.lorem.sentences(),
    goods: [fakerStatic.datatype.string(7), fakerStatic.datatype.string(7), fakerStatic.datatype.string(7), fakerStatic.datatype.string(7), fakerStatic.datatype.string(7)],
    host: {
      isPro: fakerStatic.datatype.boolean(),
      avatarUrl: fakerStatic.image.avatar(),
      id: 2,
      name: fakerStatic.name.findName(),
    },
    id: 2,
    images: [fakerStatic.image.city(), fakerStatic.image.abstract(), fakerStatic.image.business(), fakerStatic.image.animals(), fakerStatic.image.food()],
    isPremium: fakerStatic.datatype.boolean(),
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    isFavorite: fakerStatic.datatype.boolean(),
    maxAdults: fakerStatic.datatype.number(5),
    previewImage: fakerStatic.image.image(),
    price: 123,
    rating: fakerStatic.datatype.number(5),
    title: fakerStatic.lorem.sentence(),
    type: fakerStatic.datatype.string(),
  },
  {
    bedrooms: fakerStatic.datatype.number(10),
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: fakerStatic.lorem.sentences(),
    goods: [fakerStatic.datatype.string(7), fakerStatic.datatype.string(7), fakerStatic.datatype.string(7), fakerStatic.datatype.string(7), fakerStatic.datatype.string(7)],
    host: {
      isPro: fakerStatic.datatype.boolean(),
      avatarUrl: fakerStatic.image.avatar(),
      id: 3,
      name: fakerStatic.name.findName(),
    },
    id: 3,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/studio-01.jpg'],
    isPremium: fakerStatic.datatype.boolean(),
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10,
    },
    isFavorite: fakerStatic.datatype.boolean(),
    maxAdults: fakerStatic.datatype.number(10),
    previewImage: fakerStatic.image.image(),
    price: 189,
    rating: fakerStatic.datatype.number(5),
    title: fakerStatic.lorem.sentence(),
    type: 'Apartment',
  },
  {
    bedrooms: fakerStatic.datatype.number(10),
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: fakerStatic.lorem.sentences(),
    goods: [fakerStatic.datatype.string(7), fakerStatic.datatype.string(7), fakerStatic.datatype.string(7), fakerStatic.datatype.string(7), fakerStatic.datatype.string(7)],
    host: {
      isPro: fakerStatic.datatype.boolean(),
      avatarUrl: fakerStatic.image.avatar(),
      id: 4,
      name: fakerStatic.name.findName(),
    },
    id: 4,
    images: [fakerStatic.image.city(), fakerStatic.image.abstract(), fakerStatic.image.business(), fakerStatic.image.animals(), fakerStatic.image.food()],
    isPremium: fakerStatic.datatype.boolean(),
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
    isFavorite: fakerStatic.datatype.boolean(),
    maxAdults: fakerStatic.datatype.number(10),
    previewImage: fakerStatic.image.image(),
    price: 97,
    rating: fakerStatic.datatype.number(5),
    title: fakerStatic.lorem.sentence(),
    type: fakerStatic.datatype.string(15),
  }];

