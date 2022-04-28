export interface Insurance {
  id: number;
  name: string;
  description: string;
}

export interface InsuranceType {
  data?: Array<Insurance>
  isLoading?: boolean;
  error?: any;
  total?: number;
  selectedInsuranceTypeId?: string | number | null;
}
