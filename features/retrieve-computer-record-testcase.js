import 'testcafe';
import herokuPageObject from '../pageObject/heroku-app-pageObject';
import testGlobals from '../util/globalVariables';

/** Test Suite */
fixture("Play Sample Application Computer Database - CRUD#Retrieve Operation")

    /** Test case for retreiving through random choice */
    test('Test case to retrieve a computer record by random selection of a record ', async t =>{
        await herokuPageObject.goToHomePage(t);
        await herokuPageObject.chooseRandomEntry(t);
        await herokuPageObject.findComputerForRetrievalByIndex(t,testGlobals.getResultIndex());
    });