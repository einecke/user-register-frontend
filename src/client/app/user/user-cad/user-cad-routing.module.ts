import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserCadComponent } from './user-cad.component'
import { UserComponent } from '../user.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'new', component: UserCadComponent},
      { path: 'user', component: UserComponent}
    ])
  ],
  exports: [RouterModule]
})
export class UserCadRoutingModule { }
