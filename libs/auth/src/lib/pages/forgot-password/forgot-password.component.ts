import { Component, OnInit } from '@angular/core';
import { PasswordResetSuccessfulDialog } from '../../components/password-reset-successful/password-reset-successful.dialog';
import { MatDialog } from '@angular/material/dialog';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API} from "@front-application/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OtpComponent} from "../../components/otp/otp.component";

@Component({
  selector: 'front-application-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private http: HttpClient,) { }

  ngOnInit(): void {

  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  createAccountForm: FormGroup = this.formBuilder.group({
    "username": ['', [Validators.required]],
  })

  public openPasswordResetSuccessfulDialog() {

    this.dialog.open(PasswordResetSuccessfulDialog,{disableClose: true,
      width: '50%'

    });

  }

  resetPassword() {
    const headers= new HttpHeaders().append('Authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXV0aC1zZXJ2ZXIiXSwidXNlcl9uYW1lIjoiYWRtaW4iLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwidXNlckFjY291bnRJZCI6MSwidGVuYW50SWQiOiJTQSIsImV4cCI6Mzc5NTUyODA1NCwiYXV0aG9yaXRpZXMiOlsiVVBEQVRFX1RFTkFOVF9UWVBFIiwiREVMRVRFX1BBU1NXT1JEX1BPTElDWSIsIlZJRVdfVVNFUl9SRUdJU1RSQVRJT04iLCJVUERBVEVfUk9MRSIsIkRFTEVURV9QRVJNSVNTSU9OIiwiUkVHSVNURVJfVVNFUiIsIkRFTEVURV9VU0VSX1JFR0lTVFJBVElPTiIsIlZJRVdfUEFTU1dPUkRfUE9MSUNZIiwiVVBEQVRFX0dST1VQIiwiQ1JFQVRFX0dST1VQIiwiVVBEQVRFX0FDQ09VTlRfT1dORVIiLCJVUERBVEVfVVNFUl9SRUdJU1RSQVRJT04iLCJDUkVBVEVfUEVSTUlTU0lPTiIsIlVQREFURV9URU5BTlRfTElDRU5DRSIsIkNSRUFURV9JTlNVUkVSIiwiVVBEQVRFX1BBU1NXT1JEX1BPTElDWSIsIlZJRVdfVVNFUl9BQ0NPVU5UIiwiREVMRVRFX0dST1VQIiwiVVBEQVRFX1BFUk1JU1NJT04iLCJVUERBVEVfVEVOQU5UIiwiVVBEQVRFX0tZQ19SRUNPUkQiLCJST0xFX1NVUEVSX0FETUlOIiwiQ1JFQVRFX1VTRVJfQUNDT1VOVCIsIkJMT0NLX1VTRVJfQUNDT1VOVCIsIkNSRUFURV9URU5BTlRfVFlQRSIsIkRFQUNUSVZBVEVfVVNFUl9BQ0NPVU5UIiwiUk9MRV9BRE1JTiIsIkNSRUFURV9QQVNTV09SRF9QT0xJQ1kiXSwianRpIjoiZDBjZTEwZTItYjA1Ni00ODIzLWE2MWMtZDhkMzg5ODE0Y2ZiIiwiZW1haWwiOiJ0YWRhaXJ3YW1AYWZyb3NvZnQuY28uenciLCJjbGllbnRfaWQiOiJhdXRoLXNlcnZlciJ9.MU3Av5pDEX1QnU1kByVrR85eddB3e-FiBwxnO3P1L6dOopz-kVmfWcrYxrXUUR2Y9PlLpD-lqAjFiF7FIvM3i7SNhIKrTzOg5aBNRfNrWxiOH61bQn-8Pn7QjBqogpwCUVarLHbDwh1fk6MNAqhMua8S-zjd0fcM5dpbJMbcI5uHe5RXl_NvYuEp2voykTO4cXn964D2cU5UoP6IwVlgJThRLlNK9quNrJeE8SQ6dUfid5adsDFGdP6pLZ7dTD8gw-22QsLoyGPx8hszdQmGyzz8TzqLloy-zPpPUP-9m3-de6WHAwUeMnXghNMrWGBhYE0OIAMyo4AyDm2YyT4SQQ')

    this.http.put(`${API.USERACCOUNTS}v2/user-accounts/password?redirectUri=http://192.168.10.39:8091/auth/login&username=${this.createAccountForm.value.username}` ,this.createAccountForm.value,{headers}).subscribe({
      next:(res)=>{
        this.otp()
        // this.dialog.open(PasswordResetSuccessfulDialog,{disableClose: true,
        //   width: '50%'
        //
        // });
      }
    })
  }

  otp() {
    this.dialog.open(OtpComponent, {
      disableClose: true, data: {
        username: this.createAccountForm.value.username
      }
    });
  }

}

