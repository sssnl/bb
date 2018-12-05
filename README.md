
## About Testcafe

1. Testcafe is a Node.js tool to automate end-to-end web testing.
2. TestCafe is free to use and has Plugins, integration with other tools, launching tests from IDE, etc. 
3. TestCafe runs on Windows, MacOS, and Linux. It supports desktop, mobile, remote and cloud browsers (UI or headless).

## Pre-requirements

1. Ensure that Node.js and npm are installed on your computer.
2. Download or Clone the repository <<https://github.com/sssnl/bb.git>> to your local.

## Installing Testcafe & other dependencies using npm

1. Execute `npm install -g testcafe` to install Testcafe
2. To install all dependencies of the project, Open the project folder in IDE and Navigate to the project folder <<Backbase>> with the console. Here we need to download the required dependencies by typing this in the command line.

`npm i`

This command makes npm use the package.json file where all dependencies are listed, and installs them to the local directory.

## Project Folder Structure

1. Backbase is the root project folder.
2. The folder 'tests' under backbase contains the test cases scripts.
3. The folder 'pageObject' contains the script with reusable web page elements, form selectors for DOM scraping. This application has many reusable page elements and so all of them is in the same script 'heroku-app-pageObject.js'. Page object scripts can be segregated with specific page elements based on the functionality/operation.
4. The folder 'util' contains the helper files.

## To execute the testcases

1. To run a single test or folder: Navigate to the project folder <<and execute the command `testcafe [browsertype] [testfile or folder]`
  
  example 1:  Backbase>> `testcafe chrome tests`
  This runs the entire Tests folder which holds all the testcases in tests folder and this command runs all the testcases in Chrome browser.

  example 2:  Backbase>> `testcafe chrome tests\application-access-testcase.js`
  This line executes a single test case in the chrome browser.

  example 3:  Backbase>> `testcafe chrome .\tests\create-retrieve-new-computer-testcase.js --speed 0.1`
  This line executes a single test case in the chrome browser in moderate speed. Speed limit value - 0.01 being the slowest and the limit value - 1 being the fastest (default)

## Information on the Test suite

Tests in the automated test suite are structured using the Page Object Model of abstraction which means information on how to perform actions and interact with the application is stored in Page Objects.

### Helper files
The util folder contains helper files that contain functions which are used throughout the page objects. Most notable is the `randoms.js` file, which contains functions that return randomly generated test data using libraries such as `faker and moment`

Other utilities are 
- The `contants.js` file, where the asset messages to be displayed are configured.

- The `globalVariables.js` file, where data is written or stored using accessor and mutator methods in order to be used by the testcases. Here we transfer data between testcases, instead of having this data deleted when a testcase is finished and Testcafe does its cleanup.


## Notable command line features

`-S -s [relative path where screenshots will be stored]`
With this command, testcafe will take screenshots when a test fails and save it in the folder specified after -s.

`-q`
With this command testcafe will keep running failing tests and pass or fail it depending on the ratio at which the test passed or failed.

`--speed [0.01 - 1]`
Causes Testcafe to run at a factor of its maximum speed (1).

`chrome:emulation:device=ipad:orientation=horizontal`
Emulate chrome in the size it is being displayed on an ipad in landscape mode. In order to emulate portrait mode, `orientation=horizontal` can be removed, since vertical is the default.

## Debugging tests

When debugging tests, add this line before the step where the test fails:
`await t.debug()`
Testcafe will pause before it fails and using the browsers console you can check page elements and verify whether these are visible the moment Testcafe expects them to be.

If the Selector is visible at the test step that fails, the test most likely fails due to an animation that renders elements unclickable or invisible. When this happens, possibly static wait can be added by using : `await t.wait(500)` that tells Testcafe to wait for this step for 0.5 seconds.


#### Maintaining and updating the package.json

After installing npm-check-updates, you can update the package.json by running the cmd `ncu -u`, and then download the latest versions of the dependencies by running the `npm i` command.

I would suggest running the regressionset at least once after updating the dependencies, and if a new version of the dependencies destroys tests, returning the version of that package to its original state, but then typing it as follows: `1.2.x`
