import { CorsOptions } from 'cors';

export const corsConfig: CorsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:4000'], // frontend y postman
  credentials: true
};
