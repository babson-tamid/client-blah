import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: any = {};

  theActualUser:any = {
    email:'',
    password: '',
    name:'',
    gradDate:'',
    phoneNum:''

  }

  constructor(private authService: AuthService) { }

  tryToLogIn(){
    console.log(this.loginUser);
    this.authService.login(this.loginUser)
    .subscribe(res=>{this, this.theActualUser = res});
  }


  ngOnInit() {
  }

}
