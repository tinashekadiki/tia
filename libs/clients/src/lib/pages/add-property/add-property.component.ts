import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'front-application-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.sass']
})
export class AddPropertyComponent implements OnInit {


  addPropertyForm: FormGroup = this.formBuilder.group({
    location: ['', Validators.required],
    value: ['', Validators.required],
  });



  constructor(private formBuilder: FormBuilder,
    private uiLoader: NgxUiLoaderService,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    console.log("add property");

  }

  public async AddProperty(): Promise<void> {
    try {
      this.uiLoader.start();
      const url = 'http://192.168.10.91:8090/api/v1/customer-asset/create-property';
      const requestBody = {
        customerId: "7",
        value: this.addPropertyForm.value.value,
        location: this.addPropertyForm.value.location,



      };
      const result = await this.http.post<any>(url, requestBody).toPromise();
      alert(result.message)
      this.router.navigate(['/client/diary']);
    } catch (e: any) {
      alert("There was an error");
    } finally {
      this.uiLoader.stop();
    }

  }

}
