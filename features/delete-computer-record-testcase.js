import 'testcafe';
import herokuPageObject, {elements} from '../pageObject/heroku-app-pageObject';
import {assertValues} from '../util/constants';
import testGlobals from '../util/globalVariables';

/** Test Suite */
fixture("Play Sample Application Computer Database - CRUD#Delete Operation")
    
    /** Test case for retreiving through random choice */
    test('Test case to delete an existing computer record', async t =>{
        await herokuPageObject.goToHomePage(t);
        await herokuPageObject.chooseRandomEntry(t);
        await herokuPageObject.findComputerForRetrievalByIndex(t,testGlobals.getResultIndex());
        await herokuPageObject.deleteComputer(t);
        const updateDeleteText = await elements.updateText.textContent;
        console.log(updateDeleteText.trim());
        await t.expect(updateDeleteText.trim()).contains(assertValues.deleteMessage);
    });
