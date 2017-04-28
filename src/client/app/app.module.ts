import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import {UserModule} from './user/user.module';
import {UserCadModule} from './user/user-cad/user-cad.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, HomeModule, UserModule, UserCadModule, ReactiveFormsModule, FormsModule, SharedModule.forRoot(), MaterialModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
