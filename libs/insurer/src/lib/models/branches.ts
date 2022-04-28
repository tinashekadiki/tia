export interface Addres {
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  country: string;
}

export interface Branch {
  address: Addres;
  id: number;
  name: string;
  phoneNumber: string;
}
