export interface Province {
  id: number;
  name: string;
}

export interface Content {
  id: number;
  name: string;
  code?: any;
  province: Province;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort2 {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Collection {
  content: Content[];
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  sort: Sort2;
  number: number;
  numberOfElements: number;
  first: boolean;
  size: number;
  empty: boolean;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface CollectionCity {
  addressLine1: string;
  addressLine2: string;
  cityName: string;
  countryName: string;
  location: Location;
  name: string;
}
