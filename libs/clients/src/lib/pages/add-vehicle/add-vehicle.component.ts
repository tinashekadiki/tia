import { HttpClient } from '@angular/common/http';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { API } from '@front-application/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { VehicleDataAccessEntity } from '@front-application/clients';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import { getAllVehicleDataAccess } from '../../+state/vehicle-data-access/vehicle-data-access.selectors';
import { CustomerService } from '../../clients-services/customer.service';

interface vehicleType {
  value: string;
  viewValue: string;
}

interface vehicleMake {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'front-application-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.sass'],
})
export class AddVehicleComponent implements OnInit {
  @Output() formValue = new EventEmitter();
  customerId: string;
  vehicleList$: Observable<VehicleDataAccessEntity[]>;

  addVehicleForm: FormGroup = this.formBuilder.group({
    regNumber: ['', Validators.required],
    vehicleMake: ['', Validators.required],
    model: ['', Validators.required],
    vehicleType: ['', Validators.required],
    value: ['', Validators.required],
    weight: ['', Validators.required],
  });

  vehicleTypes: vehicleType[] = [
    { value: 'BUSES', viewValue: 'Buses' },
    { value: 'HAULAGE_TRUCKS', viewValue: 'Haulage Trucks' },
    { value: 'HEAVY_VEHICLES', viewValue: 'Heavy Vehicles' },
    { value: 'LIGHT_MOTOR_VEHICLES', viewValue: 'Light Motor Vehicle' },
    { value: 'MINIBUSES', viewValue: 'Mini Buses' },
    { value: 'MOTOR_CYCLE', viewValue: 'Motor Cycle' },
  ];

  vehicleMakes: vehicleMake[] = [
    { value: 'FORD', viewValue: 'Ford' },
    { value: 'ISUZU', viewValue: 'Isuzu' },
    { value: 'JAGUAR', viewValue: 'Jaguar' },
    { value: 'LAND_ROVER', viewValue: 'Land Rover' },
    { value: 'LEXUS', viewValue: 'Lexus' },
    { value: 'MAZDA', viewValue: 'Mazda' },
    { value: 'MERCEDES_BENZ', viewValue: 'Mercedes Benz' },
    { value: 'MITSUBISH', viewValue: 'Mitsubishi' },
    { value: 'NISSAN', viewValue: 'Nissan' },
    { value: 'TOYOTA', viewValue: 'Toyota' },
  ];
  cars: VehicleDataAccessEntity[];

  constructor(
    private formBuilder: FormBuilder,
    private uiLoader: NgxUiLoaderService,
    private http: HttpClient,
    private customerService: CustomerService,
    private store: Store<VehicleDataAccessEntity[]>
  ) {
    this.vehicleList$ = this.store.pipe(select(getAllVehicleDataAccess));
  }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe({
      next: (data) => {
        this.customerId = data.username;
        this.getVehicles(data.username);
      },
    });
  }

  async getVehicles(customerId: any) {
    this.http
      .get<VehicleDataAccessEntity[]>(
        `${API.QUOTE_AND_BUY}api/v1/customer-asset/get-vehicle-asset/username/${customerId}`
      )
      .subscribe((data) => {
        this.cars = data;
      });
    return this.cars;
  }

  public async addVehicle(): Promise<void> {
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const customerUsername = user.username

    const requestBody = {
      ...this.addVehicleForm.value,
      customerId:57
    };
    requestBody.customerUsername = customerUsername

    this.http
      .post(
        `${API.QUOTE_AND_BUY}api/v1/customer-asset/create-vehicle`,
        requestBody
      )
      .subscribe({
        next: () => {
          this.ngOnInit();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
