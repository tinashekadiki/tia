export interface Zinara {
  value: number;
  currencyCode: string;
}

export interface Zbc {
  value: number;
  currencyCode: string;
}

export interface Insurance {
  value: number;
  currencyCode: string;
}

export interface Total {
  value: number;
  currencyCode: string;
}

export interface CalculationResponse {
  zinara: Zinara;
  zbc: Zbc;
  insurance: Insurance;
  total: Total;
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

export interface Quotation {
  quotationId: number;
  vehicleRegistration: string;
  insurerId: number;
  insurer: string;
  calculationResponse: CalculationResponse;
  addOns: AddOn[];
}
