import { CorsOptions } from 'cors';

const VITE_API_URL = process.env.VITE_API_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;

export const corsConfig: CorsOptions = {
  origin: [FRONTEND_URL, VITE_API_URL], // frontend y postman
  credentials: true
};
