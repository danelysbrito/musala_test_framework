
import { Selector } from "testcafe";

class MusalaFacebookPage {
    constructor(){
        this.profilePicture = Selector("div").withAttribute("aria-label","Foto del perfil de la página")
    }
}
export default new MusalaFacebookPage();
