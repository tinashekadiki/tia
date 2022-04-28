export interface CustomerAsset {
    phoneNumber: number;
    customerId: number;
    id: number;
    property: Property;
    vehicle: Vehicle;
}

export interface Property{
        location: string;
        value: number;
}

export interface Vehicle {
    model: string;
    regNumber: number;
    value: number;
    vehicleMake: VehicleMake;
    vehicleType: VehicleType;
    weight: number;

}

export enum VehicleMake {
    NISSAN ='NISSAN', 
    TOYOTA = 'TOYOTA', 
    MAZDA = 'MAZDA', 
    FORD = 'FORD', 
    MERCEDES_BENZ = 'MERCEDES_BENZ', 
    ISUZU = 'ISUZU',
    LAND_ROVER = 'LAND_ROVER', 
    MITSUBISHI = 'MITSUBISHI',
    LEXUS = 'LEXUS',
    JAGUAR = 'JAGUAR',
}

export enum VehicleType {
    MOTOR_CYCLE = 'MOTOR_CYCLE', 
    LIGHT_MOTOR_VEHICLES = 'LIGHT_MOTOR_VEHICLES', 
    MINIBUSES = 'MINIBUSES',
    BUSES = 'BUSES',
    HEAVY_VEHICLES = 'HEAVY_VEHICLES',
    HAULAGE_TRUCKS = 'HAULAGE_TRUCKS'
}
