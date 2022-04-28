import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Branch, Insurer} from "../../../models";
import {InsurerService} from "@front-application/insurer";
import { getInsurerEntities } from 'libs/clients/src/lib/+state/insurer/insurer.selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'front-application-insurer-details',
  templateUrl: './insurer-details.component.html',
  styleUrls: ['./insurer-details.component.scss']
})
export class InsurerDetailsComponent implements OnInit {
  insurerDetails: Insurer;
  id: string | null;
  public profile: any;


  constructor(
    private route: ActivatedRoute,
    private insurerService: InsurerService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Insurer
  ) {
    console.log(data);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.insurerService.getFromUrl(`/insurers/${this.id}`).subscribe({
      next:(res)=>{
        this.insurerDetails =res;
        console.log(this.insurerDetails.logoUrl)
      }
    })
  }

}
