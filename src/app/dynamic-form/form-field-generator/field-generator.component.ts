import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { format } from 'url';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './field-generator.component.html',
  styleUrls: ['./field-generator.component.css']
})
export class DynamicInputComponent{
  @Input() inputInfo;

  @Output() FormFieldChangeHandler = new EventEmitter<any>();

  onInputChange(event, inputInfo){
    this.FormFieldChangeHandler.emit([event, inputInfo]);
  }
}