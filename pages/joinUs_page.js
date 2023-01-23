
import { Selector,t } from "testcafe";

class JoinUsPage {
    constructor(){
        this.getLocationSelect = Selector("select#get_location")
        this.generalDescription = Selector("h2").withText("General description")
        this.requirements = Selector("h2").withText("Requirements")
        this.responsibilities = Selector("h2").withText("Responsibilities")
        this.whatWeOffer = Selector("h2").withText("What we offer")
        this.applyButton = Selector("input").withAttribute("value", "Apply")
    }

    async selectLocation(location){
        await t.click(this.getLocationSelect)
        const locationOption = this.getLocationSelect.find("option")
        await t.click(locationOption.withText(location));
    }

    async selectPositionByName(position){
        await t.click(Selector("img").withAttribute("alt", position))
    }

    async printPositionsByCity(city){
        console.log(city)
        await this.selectLocation(city)
        let positionList = Selector("article.card-jobsHot").find("h2")
        let moreInfoList = Selector("article.card-jobsHot").find("a")
        var count = await positionList.count
        for(var i=0; i<= count-1; i++){
            var printText = await positionList.nth(i).innerText;
            var moreInfo = await moreInfoList.nth(i).getAttribute('href')
            console.log("Position: " + printText)
            console.log("More info: " + moreInfo)
        }
    }

}
export default new JoinUsPage();
