import {By, element} from 'protractor';

export class ComposeWindow {

    static get to() {
        return element(By.name('to'));
    }

     static get subject() {
        return element(By.name('subjectbox'));
    }

    static get body() {
        return element(By.xpath("//div[@role='textbox' and @aria-multiline='true']"));
    }

    static get send() {
        return element(By.xpath("//*[@class='T-I J-J5-Ji aoO T-I-atl L3']"));
    }

    static get moreOptions() {
        return element(By.xpath("//*[@class='J-JN-M-I J-J5-Ji Xv L3 T-I-ax7 T-I']"));
    }

    static get labelOption() {
        return element(By.xpath("//*[@class='J-N-Jz' and ./span[@class='J-Ph-hFsbo']]"));
    }

    static get searchCategory() {
        return element(By.className("bqf"));
    }
   
    static get checkCategory() {
        return element(By.xpath("//*[@class='J-LC-Jz']/span/*[contains(text(),'Social')]"));
    }


}
