import { CorsOptions } from 'cors';

const FRONTEND_URL = process.env.FRONTEND_URL;

export const corsConfig: CorsOptions = {
  //origin: [FRONTEND_URL, VITE_API_URL], // frontend y postman
  origin: FRONTEND_URL,
  credentials: true
};
