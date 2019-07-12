
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

export class LoginData {
  userName: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
data: LoginData;

  constructor(private router: Router) {
  this.data = new LoginData();
   }

  login(): void {
    // console.log(userName + password);
    console.log(this.data);
    if ( this.data.userName === 'bobek') {
      this.router.navigateByUrl('/books');
    }
  }

  ngOnInit() {
  }

}
