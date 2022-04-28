import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../models";

@Component({
    selector: 'front-application-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent implements OnInit {
    public backgroundColor = 'blue';

    ngOnInit(): void {
      this.backgroundColor = sessionStorage.getItem('secondaryColor') ?? 'blue';
    }

}
