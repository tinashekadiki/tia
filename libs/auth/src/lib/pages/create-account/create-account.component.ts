import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MatDialog} from "@angular/material/dialog";
import {OtpComponent} from "../../components/otp/otp.component";
import {Countries, countries} from '../../models/country-data-store';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { API } from '@front-application/core';

@Component({
  selector: 'front-application-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass']
})
export class CreateAccountComponent implements OnInit {
  public countries: Array<Countries> = countries;

  createAccountForm: FormGroup = this.formBuilder.group({
    "addressLine1": ['', [Validators.required]],
    "addressLine2": [''],
    "addressLine3": [''],
    "channel": ['web'],
    "city": ['', [Validators.required]],
    "country": ['', [Validators.required]],
    "dateOfBirth": ['', [Validators.required]],
    "email": ['', [Validators.required]],
    "firstName": ['', [Validators.required]],
    "identificationType": ['', [Validators.required]],
    "identificationValue": ['', [Validators.required]],
    "lastName": ['', [Validators.required]],
    "middleNames": [''],
    "phoneNumber": ['', [Validators.required]],
    "username": ['', [Validators.required]],
  });
  public identificationTypes: any[];

  constructor(
    private formBuilder: FormBuilder,
    private uiLoader: NgxUiLoaderService,
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.setCountries();
  }

  public signUp(): any {
    const headers= new HttpHeaders().append('Authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXV0aC1zZXJ2ZXIiXSwidXNlcl9uYW1lIjoiYWRtaW4iLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwidXNlckFjY291bnRJZCI6MSwidGVuYW50SWQiOiJTQSIsImV4cCI6Mzc5NTUyODA1NCwiYXV0aG9yaXRpZXMiOlsiVVBEQVRFX1RFTkFOVF9UWVBFIiwiREVMRVRFX1BBU1NXT1JEX1BPTElDWSIsIlZJRVdfVVNFUl9SRUdJU1RSQVRJT04iLCJVUERBVEVfUk9MRSIsIkRFTEVURV9QRVJNSVNTSU9OIiwiUkVHSVNURVJfVVNFUiIsIkRFTEVURV9VU0VSX1JFR0lTVFJBVElPTiIsIlZJRVdfUEFTU1dPUkRfUE9MSUNZIiwiVVBEQVRFX0dST1VQIiwiQ1JFQVRFX0dST1VQIiwiVVBEQVRFX0FDQ09VTlRfT1dORVIiLCJVUERBVEVfVVNFUl9SRUdJU1RSQVRJT04iLCJDUkVBVEVfUEVSTUlTU0lPTiIsIlVQREFURV9URU5BTlRfTElDRU5DRSIsIkNSRUFURV9JTlNVUkVSIiwiVVBEQVRFX1BBU1NXT1JEX1BPTElDWSIsIlZJRVdfVVNFUl9BQ0NPVU5UIiwiREVMRVRFX0dST1VQIiwiVVBEQVRFX1BFUk1JU1NJT04iLCJVUERBVEVfVEVOQU5UIiwiVVBEQVRFX0tZQ19SRUNPUkQiLCJST0xFX1NVUEVSX0FETUlOIiwiQ1JFQVRFX1VTRVJfQUNDT1VOVCIsIkJMT0NLX1VTRVJfQUNDT1VOVCIsIkNSRUFURV9URU5BTlRfVFlQRSIsIkRFQUNUSVZBVEVfVVNFUl9BQ0NPVU5UIiwiUk9MRV9BRE1JTiIsIkNSRUFURV9QQVNTV09SRF9QT0xJQ1kiXSwianRpIjoiZDBjZTEwZTItYjA1Ni00ODIzLWE2MWMtZDhkMzg5ODE0Y2ZiIiwiZW1haWwiOiJ0YWRhaXJ3YW1AYWZyb3NvZnQuY28uenciLCJjbGllbnRfaWQiOiJhdXRoLXNlcnZlciJ9.MU3Av5pDEX1QnU1kByVrR85eddB3e-FiBwxnO3P1L6dOopz-kVmfWcrYxrXUUR2Y9PlLpD-lqAjFiF7FIvM3i7SNhIKrTzOg5aBNRfNrWxiOH61bQn-8Pn7QjBqogpwCUVarLHbDwh1fk6MNAqhMua8S-zjd0fcM5dpbJMbcI5uHe5RXl_NvYuEp2voykTO4cXn964D2cU5UoP6IwVlgJThRLlNK9quNrJeE8SQ6dUfid5adsDFGdP6pLZ7dTD8gw-22QsLoyGPx8hszdQmGyzz8TzqLloy-zPpPUP-9m3-de6WHAwUeMnXghNMrWGBhYE0OIAMyo4AyDm2YyT4SQQ')
    this.http.post(`${API.KYC}api/v1/customer`,this.createAccountForm.value, {headers}).subscribe({

      next: (res: any) => {
        this.otp();
      },
      error: (err) => {
        this.identificationTypes = [
          {value: 'National ID'},
          {value: 'Passport'}
        ]
      }
    });
  }

  otp() {
    this.dialog.open(OtpComponent, {
      disableClose: true, data: {
        username: this.createAccountForm.value.username
      }
    });
  }

  private setCountries(): void {
    const headers= new HttpHeaders().append('Authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXV0aC1zZXJ2ZXIiXSwidXNlcl9uYW1lIjoiYWRtaW4iLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwidXNlckFjY291bnRJZCI6MSwidGVuYW50SWQiOiJTQSIsImV4cCI6Mzc5NTUyODA1NCwiYXV0aG9yaXRpZXMiOlsiVVBEQVRFX1RFTkFOVF9UWVBFIiwiREVMRVRFX1BBU1NXT1JEX1BPTElDWSIsIlZJRVdfVVNFUl9SRUdJU1RSQVRJT04iLCJVUERBVEVfUk9MRSIsIkRFTEVURV9QRVJNSVNTSU9OIiwiUkVHSVNURVJfVVNFUiIsIkRFTEVURV9VU0VSX1JFR0lTVFJBVElPTiIsIlZJRVdfUEFTU1dPUkRfUE9MSUNZIiwiVVBEQVRFX0dST1VQIiwiQ1JFQVRFX0dST1VQIiwiVVBEQVRFX0FDQ09VTlRfT1dORVIiLCJVUERBVEVfVVNFUl9SRUdJU1RSQVRJT04iLCJDUkVBVEVfUEVSTUlTU0lPTiIsIlVQREFURV9URU5BTlRfTElDRU5DRSIsIkNSRUFURV9JTlNVUkVSIiwiVVBEQVRFX1BBU1NXT1JEX1BPTElDWSIsIlZJRVdfVVNFUl9BQ0NPVU5UIiwiREVMRVRFX0dST1VQIiwiVVBEQVRFX1BFUk1JU1NJT04iLCJVUERBVEVfVEVOQU5UIiwiVVBEQVRFX0tZQ19SRUNPUkQiLCJST0xFX1NVUEVSX0FETUlOIiwiQ1JFQVRFX1VTRVJfQUNDT1VOVCIsIkJMT0NLX1VTRVJfQUNDT1VOVCIsIkNSRUFURV9URU5BTlRfVFlQRSIsIkRFQUNUSVZBVEVfVVNFUl9BQ0NPVU5UIiwiUk9MRV9BRE1JTiIsIkNSRUFURV9QQVNTV09SRF9QT0xJQ1kiXSwianRpIjoiZDBjZTEwZTItYjA1Ni00ODIzLWE2MWMtZDhkMzg5ODE0Y2ZiIiwiZW1haWwiOiJ0YWRhaXJ3YW1AYWZyb3NvZnQuY28uenciLCJjbGllbnRfaWQiOiJhdXRoLXNlcnZlciJ9.MU3Av5pDEX1QnU1kByVrR85eddB3e-FiBwxnO3P1L6dOopz-kVmfWcrYxrXUUR2Y9PlLpD-lqAjFiF7FIvM3i7SNhIKrTzOg5aBNRfNrWxiOH61bQn-8Pn7QjBqogpwCUVarLHbDwh1fk6MNAqhMua8S-zjd0fcM5dpbJMbcI5uHe5RXl_NvYuEp2voykTO4cXn964D2cU5UoP6IwVlgJThRLlNK9quNrJeE8SQ6dUfid5adsDFGdP6pLZ7dTD8gw-22QsLoyGPx8hszdQmGyzz8TzqLloy-zPpPUP-9m3-de6WHAwUeMnXghNMrWGBhYE0OIAMyo4AyDm2YyT4SQQ')
    this.http.get(`${API.KYC}api/v1/customer/identificationTypes`,{headers}).subscribe({
      next: (res: any) => {
        this.identificationTypes = res;
      },
      error: (err) => {
        this.identificationTypes = [
          {value: 'National ID'},
          {value: 'Passport'}
        ]
      }
    });
  }
}
