import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {DynamicFormComponent} from './dynamic-form.component';
import {DynamicInputComponent} from './form-field-generator/field-generator.component';
@NgModule({
    declarations: [
        DynamicFormComponent,
        DynamicInputComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        DynamicFormComponent,
        DynamicInputComponent
    ]
})
export class DynamicFormModule{

}
