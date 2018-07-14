import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { LoginResponse } from '../../Models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginResp: Array<LoginResponse>=[];
  public username: string;
  public password: string;
  constructor(private loginService: LoginService) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {}

  onSignInButton() {
    
    this.loginService
      .makeLoginServiceCall(this.username, this.password)
      .subscribe(res => {
        console.log(res.json());
        this.loginResp.push(res.json())
      });
  }
}



