import { Webcam } from '../types';

// Using YouTube Embed IDs for reliable demo streams
export const webcams: Webcam[] = [
  {
    id: '1',
    title: 'Venice Beach Boardwalk',
    location: 'Venice, Los Angeles',
    lat: 33.9850,
    lng: -118.4695,
    thumbnail: 'https://img.youtube.com/vi/yxN_mWZqgY4/maxresdefault.jpg',
    type: 'youtube',
    sourceUrl: 'yxN_mWZqgY4',
    description: 'Live view of the famous Venice Beach Boardwalk and Ocean Front Walk.'
  },
  {
    id: '2',
    title: 'Santa Monica Pier',
    location: 'Santa Monica',
    lat: 34.0092,
    lng: -118.4976,
    thumbnail: 'https://img.youtube.com/vi/W4XkP5b_0_g/maxresdefault.jpg',
    type: 'youtube',
    sourceUrl: 'W4XkP5b_0_g',
    description: 'Beautiful view of the Pacific Park Ferris wheel and the pier.'
  },
  {
    id: '3',
    title: 'Hollywood Blvd',
    location: 'Hollywood',
    lat: 34.1016,
    lng: -118.3337,
    thumbnail: 'https://img.youtube.com/vi/-q70X2C4_8w/maxresdefault.jpg',
    type: 'youtube',
    sourceUrl: '-q70X2C4_8w',
    description: 'The heart of Hollywood, watching tourists and traffic.'
  },
  {
    id: '4',
    title: 'LAX Airport',
    location: 'Los Angeles International Airport',
    lat: 33.9416,
    lng: -118.4085,
    thumbnail: 'https://img.youtube.com/vi/L6K2M192VvY/maxresdefault.jpg',
    type: 'youtube',
    sourceUrl: 'L6K2M192VvY',
    description: 'Plane spotting at one of the busiest airports in the world.'
  },
  {
    id: '5',
    title: 'Downtown LA Skyline',
    location: 'Downtown LA',
    lat: 34.0522,
    lng: -118.2437,
    thumbnail: 'https://img.youtube.com/vi/nL2v8z1Q8jU/maxresdefault.jpg',
    type: 'youtube',
    sourceUrl: 'nL2v8z1Q8jU',
    description: 'Panoramic view of the DTLA skyline and freeways.'
  },
  {
    id: '6',
    title: 'Beverly Hills',
    location: 'Beverly Hills',
    lat: 34.0736,
    lng: -118.4004,
    thumbnail: 'https://img.youtube.com/vi/7j5p3r2t5k0/maxresdefault.jpg',
    type: 'youtube',
    sourceUrl: '7j5p3r2t5k0',
    description: 'Rodeo Drive and the luxury of Beverly Hills.'
  }
];