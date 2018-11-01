import {CommonPageHelper} from '../common/common-page.helper';

export class LoginPageHelper extends CommonPageHelper {
   public async goToPage() {
        return super.goTo('/mail');
    }
}
