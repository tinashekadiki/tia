export interface AddOn {
    insurerId: any;
    currencyCode: string;
    id: number;
    name: string;
    description: string;
    value: Value
}

export interface Value {
    currencyCode: string;
    value: number;
}