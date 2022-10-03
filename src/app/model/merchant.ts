import {AppUser} from "./app-user";

export interface Merchant {
  id: number;
  name: string;
  phoneNumber: string;
  avatar: string;
  imageBanner: string;
  address: string;
  isAccept: boolean;
  isActive: boolean;
  appUser: AppUser;
}
