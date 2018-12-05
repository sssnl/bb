import {Selector} from 'testcafe';
import {ClientFunction} from 'testcafe';
import testGlobals from './../util/globalVariables';
import Randoms from './../util/randoms';
import { assertValues } from '../util/constants';
import moment from 'moment';

export const homePage = {
  homePageUrl: 'http://computer-database.herokuapp.com/computers',
  invalidHomePageUrl: 'http://computer-database.herokuapp.com/computersssssssssssssssss'
};

//Handling web page elements in jquery
export const elements = {
  headerText : Selector('header[class="topbar"]'),
  clickAddNewButton: Selector('a[id="add"]'),
  computerName: Selector('div input[id="name"]'),
  clickCreateThisComputer: Selector('form div.actions input.btn.primary[type="submit"]'),
  clickIntroducedDate: Selector('fieldset div.clearfix div.input input#introduced'),
  clickDiscontinuedDate: Selector('fieldset div.clearfix div.input input#discontinued'),
  clickCompanyDropDown: Selector('fieldset div.clearfix div.input select#company'),
  clickDeleteThisComputer: Selector('form.topRight input.btn.danger[type="submit"]'),
  clickSearchBox: Selector('form input#searchbox'),
  filterByName: Selector('form input#searchsubmit.btn.primary'),
  createComputerSuccessMessage: Selector('div.alert-message.warning'),
  checkResultsTable: Selector('table.computers.zebra-striped'),
  resultsTableRows: Selector('table.computers.zebra-striped tbody tr'),
  resultsTableTbody: Selector('table.computers.zebra-striped tbody'),
  actionNotFound: Selector('body h1'),
  updateText: Selector('div[class="alert-message warning"]'),
  clickSaveComputer: Selector('div.actions input.btn.primary[type=submit]')
};

export default  {
  async goToHomePage(t) {
    await t.navigateTo(homePage.homePageUrl);
  },
  async goTOInvalidHomePage(t) {
    await t.navigateTo(homePage.invalidHomePageUrl);
  },
  async addNewComputer(t) {
    await t.hover(elements.clickAddNewButton).click(elements.clickAddNewButton);
  },
  async typeComputerName(t) {
    //await t.typeText(elements.computerName,"111ssss");
    const r = new Randoms();
    var computerName = r.getComputerName();
    console.log("random generated computer name:"+computerName);
    await t.typeText(elements.computerName,computerName);
  },
  async introducedDate(t) {
    await t.click(elements.clickIntroducedDate);
    const r = new Randoms();
    var introducedDate = r.getIntroducedDate();
    testGlobals.setIntroducedDate(introducedDate);
    await t.typeText(elements.clickIntroducedDate, introducedDate);
  },
  async discontinuedDate(t) {
    await t.click(elements.clickDiscontinuedDate);
    const r = new Randoms();
    var discontinuedDate = r.getDisContinuedDate();
    await t.typeText(elements.clickDiscontinuedDate, discontinuedDate);
  },
  async createThisComputer(t) {
    await t.click(elements.clickCreateThisComputer)
  },
  async selectCompany(t) {
    const select = elements.clickCompanyDropDown;
    const options = select.find('option').filter(opt => opt.value !== '-- Choose a company --');
    const optionLength = await options.count;
    const index = Math.floor(Math.random() * optionLength + 1);
    await t.click(select).click(options.nth(index));
  },
  async deleteComputer(t) {
    await t.hover(elements.clickDeleteThisComputer).click(elements.clickDeleteThisComputer);
  },
  async filterByName(t) {
    await t.click(elements.clickSearchBox);
    await t.typeText(elements.clickSearchBox,testGlobals.getComputerName());
    await t.click(elements.filterByName);
  },
  async clickResult(t, element){
    await t.hover(Selector(element));
    await t.click(Selector(element));
  },
  async clickSave(t){
    await t.hover(elements.clickSaveComputer);
    await t.click(elements.clickSaveComputer);
  },
  async findComputerForRetrieval(t, computerName){
    const computerListExists = await elements.checkResultsTable.exists;
        if(computerListExists){
            const tableRows = await elements.resultsTableRows;
            var countResults = await tableRows.count;
            for (let ind = 1; ind <= countResults; ind++) {
              const elem = "tr:nth-child("+ind+") td:nth-child(1) a";
              const elemText = await Selector(elem).textContent; 
              console.log(elemText);
              if(elemText == computerName || elemText.startsWith(computerName)){
                await this.clickResult(t, elem);
                //await this.clickSave(t);
                break;
              }
            }
        }     
  },
  async chooseRandomEntry(t) {
    const r = new Randoms();
    var resultEntry = r.getRandomIndex();
    console.log("Record selected#:"+resultEntry);
  },
  async findComputerForRetrievalByIndex(t, resultIndex){
    const computerListExists = await elements.checkResultsTable.exists;
        if(computerListExists){
            const tableRows = await elements.resultsTableRows;
            var countResults = await tableRows.count;
            const elem = "tr:nth-child("+resultIndex+") td:nth-child(1) a";
            const elemText = await Selector(elem).textContent;
            await this.clickResult(t, elem);
            console.log(elemText);
        }else{
          await t.expect(computerListExists).notOk(assertValues.retrievalFailed);
        }     
  } 
}