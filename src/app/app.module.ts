import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ApplyComponent } from './apply/apply.component';
import { FileUploadModule } from "ng2-file-upload";



const routes: Routes = [
  {
    path:'',
    component: UserComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'apply',
    component: ApplyComponent
  }


]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    ApplyComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FileUploadModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
