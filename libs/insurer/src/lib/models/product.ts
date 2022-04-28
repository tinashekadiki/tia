
export interface Product {
    id: number;
    name: string;
    code: string;
    description: string;
    productType: ProductType;
}
export interface ProductType {
    id: number;
    name: string;
    description: string;
}

