import 'testcafe';
import herokuPageObject, {elements} from '../pageObject/heroku-app-pageObject';
import {assertValues} from '../util/constants';
import testGlobals from '../util/globalVariables';

/** Test Suite */
fixture("Play Sample Application Computer Database - CRUD#Update Operation")

    /** Test case for updating an existing computer record */
    test('To update an existing computer', async t =>{
        await herokuPageObject.goToHomePage(t);
        await testGlobals.setComputerName("Think");
        await herokuPageObject.filterByName(t);
        await herokuPageObject.findComputerForRetrieval(t,testGlobals.getComputerName());
        await t.selectText(elements.clickIntroducedDate).pressKey('delete');
        await herokuPageObject.selectCompany(t);
        await herokuPageObject.clickSave(t);
        const updateText = await elements.updateText.textContent;
        console.log(updateText.trim());
        await t.expect(updateText.trim()).contains(assertValues.updateMessage);
    });
