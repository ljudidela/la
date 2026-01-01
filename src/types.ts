export interface Webcam {
  id: string;
  title: string;
  location: string;
  lat: number;
  lng: number;
  thumbnail: string;
  type: 'youtube' | 'image';
  sourceUrl: string;
  description: string;
}