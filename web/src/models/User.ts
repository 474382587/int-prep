import { baseUrl } from './../constant';
import { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing, Callback } from './Eventing';
import { Model } from './Model';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(`${baseUrl}/users`)
    )
  }
}
