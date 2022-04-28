import {Component, Inject, OnInit} from '@angular/core';
import {FileUploadService} from "../../services/upload.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {CustomerService} from "../../services/customer.service";
import {Validators} from "@angular/forms";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {InsurerService} from "@front-application/insurer";

@Component({
  selector: 'front-application-upload-logo',
  templateUrl: './upload-logo.component.html',
  styleUrls: ['./upload-logo.component.scss']
})
export class UploadLogoComponent {
  public imgSrc: string;
  public imgData: any;
  public secondaryColor: string;
  public primaryColor: string;
  public profile: any;

  constructor(private nzNotifications: NzNotificationService,
              private insurerService: InsurerService,
              private dialog: MatDialog,
              private uploadService: FileUploadService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              ) {
    this.profile = this.data.profile;
    this.primaryColor = this.profile.primaryColor;
    this.secondaryColor = this.profile.secondaryColor;
  }

  updatePhoto(event: Event): void {
    this.imgData = event;
  }

  pickImage(){
    console.log('pickImage');
    const imgEl = document.getElementById('filePicker');
    imgEl?.focus();
  }

  updateImage(): void {
    console.log('updateImage')
    if (this.imgData != null) {
      this.uploadService.uploadLogo(this.imgData.target.files[0]).subscribe({
        next: (res: any) => {
          console.log(res.body.fileDownloadUri);
          this.insurerService.updateToUrl(`/insurers/${this.profile.id}`, {
            id: this.profile.id,
            addressLine1: this.profile.companyProfile.addressLine1,
            addressLine2: this.profile.companyProfile.addressLine2,
            addressLine3: this.profile.companyProfile.addressLine3,
            adminEmail: this.profile.admin.email,
            adminPhoneNumber: this.profile.companyProfile.phoneNumber,
            adminUsername: this.profile.admin.username,
            channel: 'web',
            companyEmail: this.profile.companyProfile.email,
            companyName: this.profile.companyProfile.name,
            companyPhoneNumber: this.profile.companyProfile.phoneNumber,
            contactPersonFirstName: this.profile.companyProfile.contactPerson.firstName,
            contactPersonLastName: this.profile.companyProfile.contactPerson.lastName,
            contactPersonEmail: this.profile.companyProfile.contactPerson.email,
            contactPersonPhoneNumber: this.profile.companyProfile.contactPerson.phoneNumber,
            registrationNumber: this.profile.registrationNumber,
            primaryColor: this.primaryColor,
            secondaryColor: this.secondaryColor,
            companyLogoUrl: res.body.fileDownloadUri
          }).subscribe({
            next: (res) => {
              console.log(res)
              this.dialog.closeAll();
              this.nzNotifications.success('Updated', 'Updated successfully');
            }
          })
        }
      })
    }
    else {
      this.insurerService.updateToUrl(`/insurers/${this.profile.id}`, {
        id: this.profile.id,
        addressLine1: this.profile.companyProfile.addressLine1,
        addressLine2: this.profile.companyProfile.addressLine2,
        addressLine3: this.profile.companyProfile.addressLine3,
        adminEmail: this.profile.admin.email,
        adminPhoneNumber: this.profile.companyProfile.phoneNumber,
        adminUsername: this.profile.admin.username,
        channel: 'web',
        companyEmail: this.profile.companyProfile.email,
        companyLogoUrl: this.profile.companyProfile.logoUrl,
        companyName: this.profile.companyProfile.name,
        companyPhoneNumber: this.profile.companyProfile.phoneNumber,
        contactPersonFirstName: this.profile.companyProfile.contactPerson.firstName,
        contactPersonLastName: this.profile.companyProfile.contactPerson.lastName,
        contactPersonEmail: this.profile.companyProfile.contactPerson.email,
        contactPersonPhoneNumber: this.profile.companyProfile.contactPerson.phoneNumber,
        registrationNumber: this.profile.registrationNumber,
        primaryColor: this.primaryColor,
        secondaryColor: this.secondaryColor,
      }).subscribe({
        next: (res) => {
          this.nzNotifications.success('Updated', 'Updated successfully')
          this.dialog.closeAll();
        }
      })
    }
  }
}
