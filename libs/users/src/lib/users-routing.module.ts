import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ViewProfileComponent } from './components/user-profile/view-profile/view-profile.component';
import { UsersComponent } from './pages/users/users.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UsersComponent,

  },
  {
    path: 'user-account/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'my-profile',
    component: ViewProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { 

}
