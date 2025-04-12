import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(
    private service: LoginService
    )
    {

  }
  ngOnInit(): void {

  }

  logar(){
    this.service.doLogin()
  }

  deslogar(){
    this.service.doLogout()
  }

}
