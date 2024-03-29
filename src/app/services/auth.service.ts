import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {


  constructor(private http: Http) { }

  handleError(e) {
    console.log(e);
     return Observable.throw(e.json().message);
  }

  checkemail(user) {
    return this.http.post(`http://localhost:3000/api/checkemail`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  signup(user) {
    console.log('hey: ', user)
    return this.http.post(`http://localhost:3000/api/user/${user._id}/finish-signup`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  // apply(user){

  // }

  login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/logout`, {}, {withCredentials: true} )
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`, {withCredentials: true})
      .map((res) => {
        return JSON.parse(res._body)
      })
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }




}