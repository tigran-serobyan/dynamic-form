import { Component, Output, EventEmitter } from '@angular/core';

import { LoginForm } from "./login-form/login-form.component";
import { RegisterForm } from "./register-form/register-form.component";

// import { UserService } from '../login-form.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class User {
  @Output() login = new EventEmitter<any>();
  // users = [
  //   {
  //     username: "a",
  //     password: "a"
  //   }
  // ];

  // constructor(private userService: UserService ) {}
  onLogin(user) {
    console.log(user)
  //   var username = false;
  //   for (var i in this.users) {
  //     if (this.users[i].username == user.username) {
  //       if (this.users[i].password == user.password) {
  //         this.userService.login("logedIn");
  //         username = true;
  //       }
  //       else {
  //         this.userService.login("wrongPassword");
  //         username = true;
  //       }
  //     }
  //   }
  //   if (!username) {
  //     this.userService.login("wrongUsername");
  //   }
  }
}