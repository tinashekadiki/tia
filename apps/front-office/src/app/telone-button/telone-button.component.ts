import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'front-application-telone-button',
  templateUrl: './telone-button.component.html',
  styleUrls: ['./telone-button.component.sass'],
})
export class TeloneButtonComponent implements OnInit {
  @Input() showAddBranchDialog: () => void;
  theme = '';

  ngOnInit(): void {
    this.theme = localStorage.getItem('primaryColor') ?? '';
  }
}
