export interface Camera {
  id: string;
  name: string;
  location: string;
  url: string;
  thumbnail: string;
  lat: number;
  lng: number;
  type: 'youtube' | 'mjpeg';
}