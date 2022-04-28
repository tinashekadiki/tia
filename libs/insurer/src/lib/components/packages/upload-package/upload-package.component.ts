import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PackageService } from '../../../services';
import { FileUploadService } from '../../../services/upload.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'front-application-upload-package',
  templateUrl: './upload-package.component.html',
  styleUrls: ['./upload-package.component.scss']
})
export class UploadPackageComponent implements OnInit {
  currentFile?: File;
  progress = 0;
  message = '';

  fileName = 'Select File';
  fileInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService,  private nzNotificatons: NzNotificationService,) { }

  ngOnInit(): void {
   //l
  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }

  upload(): void {
    this.progress = 0;
    this.message = "";

    if (this.currentFile) {
      this.uploadService.upload(this.currentFile).subscribe({
        next:(event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.nzNotificatons.success('Uploaded', 'Uploaded Successfully')
          }
        },
        error:(err: any) => {
          console.log(err);
          this.progress = 0;

          if (err.error && err.error.message) {
            this.nzNotificatons.error('Failed', ' Failed to Upload Try Again')
          } else {
            this.message = 'Could not upload the file!';
          }

          this.currentFile = undefined;
        }});
    }

  }
}
function next(next: any, arg1: (event: any) => void, arg2: (err: any) => void) {
  throw new Error('Function not implemented.');
}

