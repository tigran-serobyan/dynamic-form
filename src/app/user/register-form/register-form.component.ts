import { Component, EventEmitter, Output } from '@angular/core';
import { format } from 'url';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { isNumber } from 'util';

interface IUserFormData {
  name?: string,
  surname?: string,
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterForm {
  @Output() register = new EventEmitter<any>();
  formData: IUserFormData = {};
  
  onRegister() {
    this.register.emit(this.formData);
  }
  
  logo = "";
  changeFormData(event, filledName) {
    this.formData[filledName] = event.target.value;
  }

  //   if (event.target.value.length >= 2) {
  //     event.target.setAttribute("class", "half right");
  //   }
  //   else {
  //     event.target.setAttribute("class", "half wrong");
  //   }
  //   if (filledName == "email") {
  //     event.target.setAttribute("class", "all wrong");
  //     if (event.target.value.split("@")[1]) {
  //       if (((event.target.value.split("@")[1]).split("."))[0].length > 0 && ((event.target.value.split("@")[1]).split("."))[1]) {
  //         event.target.setAttribute("class", "all right");
  //       }
  //     }
  //   }
  //   if (filledName == "password") {
  //     if (event.target.value) {
  //       if (event.target.value != event.target.value.toLowerCase()) {
  //         document.getElementById("password-must-uppercase").setAttribute("class", "password-is");
  //       }
  //       else {
  //         document.getElementById("password-must-uppercase").setAttribute("class", "password-not");
  //       }
  //       if (event.target.value != event.target.value.toUpperCase()) {
  //         document.getElementById("password-must-lowercase").setAttribute("class", "password-is");
  //       }
  //       else {
  //         document.getElementById("password-must-lowercase").setAttribute("class", "password-not");
  //       }
  //       if (event.target.value.length >= 8) {
  //         document.getElementById("password-must-length").setAttribute("class", "password-is");
  //       }
  //       else {
  //         document.getElementById("password-must-length").setAttribute("class", "password-not");
  //       }
  //       document.getElementById("password-must-number").setAttribute("class", "password-not");
  //       for (var i = 0; i < event.target.value.length; i++) {
  //         if (+event.target.value[i] >= 0) {
  //           document.getElementById("password-must-number").setAttribute("class", "password-is");
  //         }
  //       }
  //       if (document.getElementsByClassName("password-not").length > 0) {
  //         document.getElementById("password-must").style.display = "block";
  //         event.target.setAttribute("class", "half wrong");
  //       }
  //       else {
  //         document.getElementById("password-must").style.display = "none";
  //         event.target.setAttribute("class", "half right");
  //       }
  //     }
  //     else {
  //       document.getElementById("password-must").style.display = "none";
  //     }
  //   }
  //   if (filledName == "password-repeat") {
  //     if (event.target.value == document.getElementById("password").value) {
  //       event.target.setAttribute("class", "half right");
  //     }
  //     else {
  //       event.target.setAttribute("class", "half wrong");
  //     }
  //   }
  // }
}