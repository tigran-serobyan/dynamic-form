import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import { validate } from './valitation/validators';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input('formInputs') formInputs: ArrayType;

  @Output() formDataChange = new EventEmitter<any>();
  @Output() formDataValidate = new EventEmitter<any>();

  formData = {};
  errorData = {};

  ngOnInit() {
    this.createDisabledInputsArray();
  }

  getFormFieldChangeHandler(event, fieldConfig) {
    const rouls = fieldConfig.rouls;
    const fieldName = fieldConfig.field;
    const fieldValue = event.target.value;
    this.formData[fieldName] = fieldValue;
    for (const i in rouls) {
      if (rouls[i].validator == 'confirm') {
        rouls[i].value = this.formData[rouls[i].field];
      }
    }
    const validationResult = validate(fieldValue, rouls);
    this.errorData[fieldName] = validationResult;
    for (const i in this.formInputs) {
      const rouls = this.formInputs[i].rouls;
      const confirmFieldName = this.formInputs[i].field;
      for (const j in rouls) {
        if (rouls[j].validator == 'confirm') {
          if (rouls[j].field == fieldName) {
            rouls[j].value = this.formData[rouls[j].field];
            const fieldValue = this.formData[confirmFieldName];
            const validationResult = validate(fieldValue, rouls);
            this.errorData[confirmFieldName] = validationResult;
          }
        }
      }
    }

    let isValidForm = true;
    for (const i in this.errorData) {
      isValidForm = isValidForm && this.errorData[i].isValid;
    }

    this.formDataChange.emit(this.formData);
    this.formDataValidate.emit({
      errorData: this.errorData,
      isValidForm
    });
  }

  FormFieldChangeHandler(event){
    this.getFormFieldChangeHandler(event[0],event[1])
  }

  createDisabledInputsArray() {
    for (const i in this.formInputs) {
      this.getFormFieldChangeHandler({target: {value: ''}}, this.formInputs[i]);
      this.errorData[this.formInputs[i].field].errorMessage = '';
    }
  }
}
