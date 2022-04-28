import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'front-application-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    "method not used"
  }

  signin(): void {
    this.router.navigate(['/payment']);
  }

}
