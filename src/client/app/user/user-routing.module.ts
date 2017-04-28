import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import {UserCadComponent} from './user-cad/user-cad.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'user', component: UserComponent },
      { path: 'cad/:id', component: UserCadComponent}

    ])
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
