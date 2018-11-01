import {By, element} from 'protractor';

export class MailBox {

    static get social() {
        return element(By.xpath("//div[@class='hN' and @name='^smartlabel_social']"));
    }

    static get subject() {
        return element(By.xpath("//h2[@class='hP']"));
    }

    static get body() {
        return element(By.xpath("//div[@class='a3s aXjCH ']"));
    }
    
}
