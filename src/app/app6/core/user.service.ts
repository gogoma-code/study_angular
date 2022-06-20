import { CoreModule } from './core.module';

import { User } from '../user';

export class UserService {
  getUser(): User {
    return { id: 1, name: 'Lee', admin: true };
  }
}
