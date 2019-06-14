import { Injectable } from '@angular/core';

import { LoginForm } from './user/login-form/login-form.component';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    logedIn = false;
    wrongUsername = false;
    wrongPassword = false;
    login(a: string) {
        this.logedIn = false;
        this.wrongUsername = false;
        this.wrongPassword = false;
        this[a] = true;
    }
}