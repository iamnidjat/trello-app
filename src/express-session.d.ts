import 'express-session';
import { User } from './entities/user';

declare module 'express-session' {
  interface SessionData {
    user: {
      id: number;
      username: string;
      email: string;
    },
    access_token: string,
  }
}
