import {LoginPage} from '../page-objects/pages/login/login.po';
import {LoginPageHelper} from '../page-objects/pages/login/login-page.helper';
import {InboxPage} from '../page-objects/pages/inbox/inbox.po';
import {MailBox} from '../page-objects/pages/inbox/mailbox.po';
import {ComposeWindow} from '../page-objects/pages/compose/compose.po';
//import {browser, By, element, ExpectedConditions} from 'protractor';
import {browser, By, element, ExpectedConditions, Key} from 'protractor';
import {Guid} from '../tools/tools.js';

describe('G mail suite', () => {
    let loginPageHelper: LoginPageHelper;

    beforeEach(() => {
        loginPageHelper = new LoginPageHelper();
    });

    it('Send email', async () => {
        var xPath;
        var subject, body;
        //log in: username
        await loginPageHelper.goToPage();
        await LoginPage.username.sendKeys(browser.params.username);
        await LoginPage.identifierNextButton.click();
        //log in: password
        await browser.wait(ExpectedConditions.visibilityOf(LoginPage.password));
        await LoginPage.password.sendKeys(browser.params.password);
        await browser.wait(ExpectedConditions.visibilityOf(LoginPage.passwordNextButton));
        await browser.wait(ExpectedConditions.elementToBeClickable(LoginPage.passwordNextButton));
        await LoginPage.passwordNextButton.click();
        
        //Inbox Page
        await browser.wait(ExpectedConditions.visibilityOf(InboxPage.compose));

        //Open Compose Dialog
        await InboxPage.compose.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(ComposeWindow.to));

        //Compose Dialog
        subject = Guid(16);
        body = Guid(16);

        await ComposeWindow.to.sendKeys(browser.params.username + '@gmail.com');
        await ComposeWindow.subject.sendKeys(subject);
        await ComposeWindow.body.sendKeys(body);
        
        //Label email as Social
        await ComposeWindow.moreOptions.click();
        await ComposeWindow.labelOption.click();
        await browser.wait(ExpectedConditions.visibilityOf(ComposeWindow.searchCategory));
        await ComposeWindow.searchCategory.sendKeys("social");
        await browser.wait(ExpectedConditions.visibilityOf(ComposeWindow.checkCategory));
        await ComposeWindow.checkCategory.click();

        //Send Email
        await ComposeWindow.send.click();
        //Filter emails by Subject
        await browser.wait(ExpectedConditions.elementToBeClickable(InboxPage.search));
        await InboxPage.search.click();
        await InboxPage.search.sendKeys("subject:"+subject);
        await InboxPage.search.sendKeys(Key.ENTER);
        
        //wait for the email to arrive
        xPath = "//tr[@class='zA zE btb']//span[@class='bog']/span[contains(.,'"+subject.substring(0, 8)+"')]";
        var row;
        row = await element(By.xpath(xPath));
        await browser.wait(ExpectedConditions.visibilityOf(row));

        //open email
        row = await element(By.xpath(xPath));
        await browser.wait(ExpectedConditions.elementToBeClickable(row));
        await row.click();

        //verify Social label           
        await browser.wait(ExpectedConditions.visibilityOf(MailBox.social));
        expect(MailBox.social.isDisplayed()).toBeTruthy();
        //Subject
        expect(MailBox.subject.getText()).toBe(subject);
        //Body
        expect(MailBox.body.getText()).toBe(body);
    
    });
});
