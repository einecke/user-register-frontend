import { NgModule } from '@angular/core';

import { UserCadComponent } from './user-cad.component';

import { UserCadRoutingModule } from './user-cad-routing.module';

import { SharedModule } from '../../shared/shared.module';

import { UserListService } from '../../shared/user-list/user-list.service';
import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [UserCadRoutingModule, SharedModule, MaterialModule.forRoot()],
  declarations: [UserCadComponent],
  exports: [UserCadComponent],
  providers: [UserListService]
})
export class UserCadModule { }
