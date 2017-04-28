import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserListService } from '../shared/user-list/user-list.service';
import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [CommonModule, UserRoutingModule, MaterialModule.forRoot()],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [UserListService]
})
export class UserModule { }
