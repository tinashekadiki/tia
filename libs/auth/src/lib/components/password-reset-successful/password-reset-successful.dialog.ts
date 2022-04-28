import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'front-application-password-reset-successful',
  templateUrl: './password-reset-successful.dialog.html',
  styleUrls: ['./password-reset-successful.dialog.sass']
})
export class PasswordResetSuccessfulDialog implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {


  }

  closeDialog(){
      this.dialog.closeAll();
  }

}
