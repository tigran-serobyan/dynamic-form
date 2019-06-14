import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { format } from 'url';
import { ArrayType } from '@angular/compiler';
import { validate } from './valitation/validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginForm implements OnInit {
  @Output() login = new EventEmitter<any>();
  formData = {};
  errorData = {};
  // @Input('size') size: {
  //   width?: number,
  //   height?: number
  // };
  @Input('title') title: string;
  @Input('logo') logo: string;
  @Input('formInputs') formInputs: ArrayType;
  @Input('button') button: string;
  @Input('links') links: ArrayType;
  buttonDisabled = true;
  inputsDisabled = [];

  ngOnInit() {
    this.createDisabledInputsArray();
  }

  onformDataChange(event) {
    console.log(event)
  }

  onformDataValidate(event) {
    console.log(event);
    this.buttonDisabled = !event.isValidForm;
  }

  onLogin() {
    this.login.emit(this.formData);
  }



  // checkInput(rouls: any, value: any) {
  //   var roul;
  //   var disabled = false;
  //   for (var i in rouls) {
  //     roul = rouls[i];
  //     if (roul.validator == "minLength") {
  //       if (value.length < roul.value) {
  //         disabled = disabled || true;
  //       }
  //       else {
  //         disabled = disabled || false;
  //       }
  //     }
  //     ifx (roul.validator == "maxLength") {
  //       if (value.length > roul.value) {
  //         disabled = disabled || true;
  //       }
  //       else {
  //         disabled = disabled || false;
  //       }
  //     }
  //   }
  //   return disabled;
  // }


  getFormFieldChangeHandler(event, fieldConfig) {
    var rouls = fieldConfig.rouls;
    const fieldName = fieldConfig.field;

    // return (event) => {
    const fieldValue = event.target.value;
    this.formData[fieldName] = fieldValue;
    for (var i in rouls) {
      if (rouls[i].validator == "confirm") {
        rouls[i].value = this.formData[rouls[i].field];
      }
    }
    const validationResult = validate(fieldValue, rouls);
    this.errorData[fieldName] = validationResult;
    for (let i in this.formInputs) {
      var rouls = this.formInputs[i].rouls;
      const fieldName = this.formInputs[i].field;
      for (var j in rouls) {
        if (rouls[j].validator == "confirm") {
          rouls[j].value = this.formData[rouls[j].field];
          const fieldValue = this.formData[fieldName];
          const validationResult = validate(fieldValue, rouls);
          this.errorData[fieldName] = validationResult;
        }
      }
    }

    // this.inputsDisabled[fieldName + "Disabled"] = validationResult.isValid;
    this.buttonDisabled = false;
    for (var i in this.errorData) {
      this.buttonDisabled = this.buttonDisabled || !this.errorData[i].isValid;
    }
    // }
  }

  // changeFormData(event, fieldName, rouls) {
  //   const validationResult = validate( event.target.value, rouls);
  //   this.inputsDisabled[fieldName + "Disabled"] = validationResult.isValid; //this.checkInput(rouls, event.target.value);
  //   this.buttonDisabled = false;
  //   for (var i in this.inputsDisabled) {
  //     this.buttonDisabled = this.buttonDisabled || this.inputsDisabled[i];
  //   }
  //   this.formData[fieldName] = event.target.value;
  // }

  createDisabledInputsArray() {
    for (var i in this.formInputs) {
      this.getFormFieldChangeHandler({ target: { value: '' } }, this.formInputs[i]);
    }
  }
}