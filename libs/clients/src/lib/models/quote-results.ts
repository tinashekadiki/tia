export interface Zinara {
    value: number;
    currencyCode: string;
}

export interface Zbc {
    value: number;
    currencyCode: string;
}

export interface Insuranc {
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
    insurance: Insuranc;
    total: Total;
    zbcPriceCurrencyCode: string;
    zbcPriceAmount: number;
}

export interface Value {
    value: number;
    currencyCode: string;
}

export interface AddOn {
    name: string;
    value: Value;
    description: string;
    insurerId: number;
}

export class Quotes {
  fileName ='nhasi';
    insurer: string;
    insurerId: number;
    quotationId: number;
    vehicleRegistration: string;
    calculationResponse: CalculationResponse;
    insurance: Insuranc;
    addOns: AddOn[];
}
