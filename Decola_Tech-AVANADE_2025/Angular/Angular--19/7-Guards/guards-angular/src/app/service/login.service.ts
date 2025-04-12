import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(){
    localStorage.setItem('token', 'ds878açlkko0')
  }

  doLogout(){
    localStorage.clear()
  }
}
