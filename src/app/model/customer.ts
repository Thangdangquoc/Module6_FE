import {AppUser} from "./app-user";

export interface Customer {
  id?: number;
  name: string;
  phoneNumber: string;
  avatar?: string;
  address?: string;
  appUser?: AppUser;
  isAccept: boolean;
  isActive: boolean;

}
