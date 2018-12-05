import 'testcafe';
import herokuPageObject, {elements} from '../pageObject/heroku-app-pageObject';
import {assertValues} from '../util/constants';

/** Test Suite */
fixture("Play Sample Application Computer Database - Check Application Accessibility - Operation")

    /** Test case for application accessibility */
    test('Test case to access the application with valid url', async t => {
        /** Navigate to the application url */
        await herokuPageObject.goToHomePage(t);
        /** Assertion to check the header text on the home page after the page is loaded
        Variable 'headerTxt' contains actual result and Variable headerValue contains expected result */
        const headerTxt = await elements.headerText.textContent;
        await t.expect(headerTxt.trim()).contains(assertValues.headerValue, assertValues.headerValueMissing);
    });

    /** Test case with invalid application url */
    test('Test case to access the application with invalid url', async t => {
        await herokuPageObject.goTOInvalidHomePage(t);
        const actionNotFoundText = await elements.actionNotFound.textContent;
        await t.expect(actionNotFoundText.trim()).contains(assertValues.actionNotFound, assertValues.invalidUrlMessage);
    });