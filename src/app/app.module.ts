import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Calculator } from './calculator/calculator.component';
import { User } from './user/user.component';
import { LoginForm } from './user/login-form/login-form.component';
import { RegisterForm } from './user/register-form/register-form.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [
    AppComponent,
    Calculator,
    User,
    LoginForm,
    RegisterForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
