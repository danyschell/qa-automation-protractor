import {By, element} from 'protractor';

export class LoginPage {

    static get username() {
        return element(By.id('identifierId'));
    }

     static get identifierNextButton() {
        return element(By.id('identifierNext'));
    }

    static get password() {
        return element(By.name('password'));
    }

    static get passwordNextButton() {
        return element(By.id('passwordNext'));
    }

}
