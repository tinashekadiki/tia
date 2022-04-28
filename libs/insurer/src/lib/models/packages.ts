export interface Package {

   motorVehicleTypeId: number;
   motorInsurancePackages: string;
    motorInsurancePackage: string;
    productId: number;
    isRenewal: boolean;
    zwlPrice: ZwlPrice;
    zarPrice: ZarPrice;
    usdPrice: UsdPrice;
    insurerId: number;
    numberOfTerms: number;
    id: number;
}

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


