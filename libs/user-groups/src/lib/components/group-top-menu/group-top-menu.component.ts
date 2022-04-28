import {Component, Input, OnInit} from '@angular/core';
import {CreateGroupsComponent} from "../create-groups/create-groups.component";

@Component({
    selector: 'front-application-group-top-menu',
    templateUrl: './group-top-menu.component.html',
    styleUrls: ['./group-top-menu.component.sass']
})
export class GroupTopMenuComponent implements OnInit {
  public backgroundColor = '';

  ngOnInit(): void {
    this.backgroundColor = sessionStorage.getItem('secondaryColor') ?? '';
  }
}
