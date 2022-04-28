import { Insurer } from "./insurer";
import { Total } from "./quotation";

export interface Order{
  vehicleRegistration:string;
  name: string;
  insurerId:number;
  productId: number;
  insuranceTypeId:number;
  numberOfTerms:number;
  motorInsurancePackage:string;
  phoneNumber: number;
}

export interface CartOrder {
  orderNumber: string;
  phoneNumber: string;
  insurer: Insurer;
  vehicleRegistration: string;
  totalPrice: Total;
  status: string;
}
