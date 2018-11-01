import {By, element} from 'protractor';

export class InboxPage {

    static get compose() {
        return element(By.className('T-I J-J5-Ji T-I-KE L3'));
    }

     static get search() {
        return element(By.name("q"));
    }

}
