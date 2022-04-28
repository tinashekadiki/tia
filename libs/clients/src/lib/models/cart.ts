// export interface ZwlPrice {
//   value: number;
//   currencyCode: string;
// }

// export interface ZarPrice {
//   value: number;
//   currencyCode: string;
// }

// export interface UsdPrice {
//   value: number;
//   currencyCode: string;
// }



// export interface Value {
//   value: number;
//   currencyCode: string;
// }

// export interface AddOn {
//   name: string;
//   value: Value;
//   description: string;
//   insurerId: number;
// }

// export interface ZwlPrice {
//   value: number;
//   currencyCode: string;
// }

// export interface MotorVehicleQuotation {
//   id: number;
//   motorInsurancePackages: string;
//   productId: number;
//   isRenewal: boolean;
//   zwlPrice: ZwlPrice;
//   zarPrice?: ZarPrice;
//   usdPrice?: UsdPrice;
//   insurerId: number;
//   insurerName: string;
//   motorVehicleTypeId: number;
// }

// export interface MotorVehicleLineItem {
//   id: number;
//   motorVehicleQuotation: MotorVehicleQuotation;
//   addOns: AddOn[];
// }

// export interface TotalPrice {
//   value?: any;
//   currencyCode?: any;
// }

// export interface Cart {
//   id: number;
//   customerId: number;
//   phoneNumber?: any;
//   motorVehicleLineItems: MotorVehicleLineItem[];
//   totalPrice: TotalPrice;
// }

export interface ZwlPrice {
  value: number;
  currencyCode: string;
}

export interface ZarPrice {
  value: number;
  currencyCode: string;
}

export interface UsdPrice {
  value: number;
  currencyCode: string;
}

export interface MotorVehicleQuotation {
  id: number;
  motorInsurancePackages: string;
  productId: number;
  isRenewal: boolean;
  zwlPrice: ZwlPrice;
  zarPrice: ZarPrice;
  usdPrice: UsdPrice;
  insurerId: number;
  insurerName: string;
  motorVehicleTypeId: number;
}

export interface Value {
  value: number;
  currencyCode: string;
}

export interface AddOn {
  id: number;
  name: string;
  value: Value;
  description: string;
  insurerId: number;
}

export interface LineItemTotal {
  value: number;
  currencyCode: string;
}

export interface Insurer {
  id: number;
  name: string;
  registrationNumber: string;
  email: string;
}

export interface MotorVehicleLineItem {
  id: number;
  motorVehicleQuotation: MotorVehicleQuotation;
  addOns: AddOn;
  lineItemTotal: LineItemTotal;
  insurer: Insurer;
  vehicleRegistration: string;
}

export interface TotalPrice {
  value: number;
  currencyCode: string;
}

export interface GrandTotalPrice {
  value: number;
  currencyCode: string;
}

export interface Cart {
  id: number;
  count: number;
  customerId: number;
  phoneNumber: string;
  motorVehicleLineItems: MotorVehicleLineItem[];
  totalPrice: TotalPrice;
  grandTotalPrice: GrandTotalPrice;
}



