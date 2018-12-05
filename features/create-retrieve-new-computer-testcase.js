import 'testcafe';
import herokuPageObject, {elements} from '../pageObject/heroku-app-pageObject';
import {assertValues} from '../util/constants';
import testGlobals from '../util/globalVariables';

/** Test Suite */
fixture("Play Sample Application Computer Database - CRUD#Create-Retrieve Operation")

    /** Test case for creating a computer record */
    test('Test case to add a new computer record', async t => { 
        await herokuPageObject.goToHomePage(t);
        await herokuPageObject.addNewComputer(t);
        await herokuPageObject.typeComputerName(t);
        /** added optional fields' data */
        await herokuPageObject.introducedDate(t);
        await herokuPageObject.discontinuedDate(t);
        await herokuPageObject.selectCompany(t);
        await herokuPageObject.createThisComputer(t);
        /** Assertion if new computer has been created or not */
        const createMessageTextExists = await elements.createComputerSuccessMessage.exists;
        if(createMessageTextExists){
            const createMessageTxtCnt = await elements.createComputerSuccessMessage.textContent;
            await t.expect(createMessageTxtCnt.trim()).contains(testGlobals.getComputerName(),assertValues.computerNotFound);
            /** As an extra check, retrieving the newly created computer record */
            await herokuPageObject.filterByName(t);
            /** Test case for retreiving through search */
            await herokuPageObject.findComputerForRetrieval(t,testGlobals.getComputerName());
        }else{
            t.expect(createMessageTextExists).notOk(assertValues.computerNotCreated);
        }  
    });