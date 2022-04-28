
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '.';

const routes = [
  {
    path: '', component: ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiLayoutRoutingModule { }
