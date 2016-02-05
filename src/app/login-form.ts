import {Component, Output, EventEmitter} from 'angular2/core';
import {User} from 'app/user';

@Component({
    selector: 'login-form',
    templateUrl: 'templates/login-form.html'
})

export class LoginForm {
    username: string = '';
    password: string = '';

    login(): void {
        console.log(this.username + ' ' + this.password);
    }
}