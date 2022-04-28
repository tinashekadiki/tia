import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [

  {

    path: '',
    component: WelcomeComponent,
    children: [

      {path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: '**', redirectTo: 'welcome' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class WelcomePagesRoutingModule {

}
