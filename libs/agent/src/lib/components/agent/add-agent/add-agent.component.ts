import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AgentService} from "../../../services/agent.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {CollectionPointService} from "../../../services/collection-point.service";

import {InsurerService} from "@front-application/insurer";

@Component({
  selector: 'front-application-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss']
})
export class AddAgentComponent implements OnInit {
  public agentForm!: FormGroup;
  @Output() formValue = new EventEmitter();
  countries: any;
  cities: any;
   insurers: any;

  constructor(private frmb: FormBuilder,
              private agentService:AgentService,
              private insurerService: InsurerService,
              private collectionService: CollectionPointService,
              private nzNotificatons: NzNotificationService) { }
  private createForm() {
    this.agentForm = this.frmb.group({
      serviceAgentName: ['', Validators.required],
      channel: 'Web',
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      cityId: ['', Validators.required],
      insurerId:[''],
      collectionPointName: ['', Validators.required],
      countryId: ['', Validators.required],
      redirectUri:"http://192.168.10.39:8090/auth/login",
      username: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.getCountries();
    this.getCities();
    this.getInsurers()
  }

  save() {
    const dataTosend = this.agentForm.value;
    dataTosend.location = {
      latitude: 0,
      longitude: 0
    }
    this.agentService.postToUrl('/service-agent',dataTosend)
      .subscribe(() => {
        this.nzNotificatons.success('Saved','Created Successfully')
      }, (error) => {
        // this.nzNotificatons.error('Insurer Could not be added', error.error.message);
      })

  }
  getCountries(){

    this.collectionService.getFromUrl('/collection-point/countries').subscribe({
      next:(res)=>{
        this.countries = res
      }
    })

  }
  getCities(){
    this.collectionService.getFromUrl('/collection-point/all-cities').subscribe({
      next:(res)=>{
        this.cities= res.content
      }
    })
  }
  getInsurers() {
    this.insurerService.getFromUrl('/insurers').subscribe(
      {
        next:(res)=>{
          this.insurers= res
        }
      }
    )
  }

}
