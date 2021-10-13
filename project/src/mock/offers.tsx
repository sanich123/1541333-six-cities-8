import { Offers } from '../types/types';
// import { nanoid } from '@reduxjs/toolkit';

export const mockOffers: Offers = [
  {
    bedrooms: 3,
    city: {
      name: 'Amsterdam',
      // location: {
      //   latitude: 52.370916,
      //   longitude: 4.895168,
      //   zoom: 10,
      // },
    },
    description: 'Beautiful &amp; luxurious apartment at great location',
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Baby seat'],
    host: {
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isPremium: false,
    isFavorite: true,
    // location: {
    //   latitude: 52.358987234,
    //   longitude: 4.679870987,
    //   zoom: 8,
    // },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 125,
    rating: 2,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
  {
    bedrooms: 5,
    city: {
      name: 'Cologne',
      // location: {
      //   latitude: 52.370916,
      //   longitude: 4.895168,
      //   zoom: 10,
      // },
    },
    description: 'Очень красивое описание',
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Dishwasher'],
    host: {
      isPro: false,
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      name: 'Снежана',
    },
    id: 2,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isPremium: true,
    isFavorite: false,
    // location: {
    //   latitude: 52.358987234,
    //   longitude: 4.679870987,
    //   zoom: 8,
    // },
    maxAdults: 7,
    previewImage: 'img/apartment-02.jpg',
    price: 125,
    rating: 5,
    title: 'Очень классная комнатенка в Бирюлево',
    type: 'Private room',
  },
  {
    bedrooms: 2,
    city: {
      name: 'Brussels',
      // location: {
      //   latitude: 52.370916,
      //   longitude: 4.895168,
      //   zoom: 10,
      // },
    },
    description: 'Еще более красивое описание',
    goods: ['Wi-Fi', 'Kitchen', 'Fridge', 'Washing machine', 'Dishwasher'],
    host: {
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg',
      id: 3,
      name: 'Ольга',
    },
    id: 3,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isPremium: false,
    isFavorite: true,
    // location: {
    //   latitude: 52.358987234,
    //   longitude: 4.679870987,
    //   zoom: 8,
    // },
    maxAdults: 2,
    previewImage: 'img/room.jpg',
    price: 190,
    rating: 3,
    title: 'Очень классная комнатенка в Солнцево',
    type: 'Apartment',
  },
  {
    bedrooms: 9,
    city: {
      name: 'Amsterdam',
      // location: {
      //   latitude: 52.370916,
      //   longitude: 4.895168,
      //   zoom: 10,
      // },
    },
    description: 'В несколько раз более красивое описание',
    goods: ['Wi-Fi', 'Kitchen', 'Fridge', 'Washing machine', 'Dishwasher'],
    host: {
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      name: 'Василий',
    },
    id: 4,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
    isPremium: true,
    isFavorite: true,
    // location: {
    //   latitude: 52.358987234,
    //   longitude: 4.679870987,
    //   zoom: 8,
    // },
    maxAdults: 5,
    previewImage: 'img/apartment-03.jpg',
    price: 78,
    rating: 4,
    title: 'Очень классная комнатенка в Внуково',
    type: 'Private room',
  }];

