/**
 * Interface for the 'VehicleDataAccess' data
 */
export interface VehicleDataAccessEntity {
  customerId: string | number; // Primary ID
  model: string;
  regNumber: string;
  value: string;
  vehicleMake: string;
  vehicleType: string;
  weight: string;
}
