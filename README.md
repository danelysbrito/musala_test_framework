# musala_test_framework

## How to install

install npm node

```bash
npm install //will install all the dependencies necessary for the execution of this framework
```

# Build and Test

Implement as many of the following features as you can:

1. **Design your framework to support two browsers – chrome and firefox. Make the browser selection available from a configuration file.**

For this solution I am using TestCafe. TestCafe is a complete node.js solution for testing web applications. It handles all stages: starting browsers, running tests, collecting test results, and generating reports. TestCafe requires no browser plugins - works in all popular modern browsers, out of the box.

I created a configuration file to set the main parameters.
The .testcaferc.json configuration file specifies the default browser, and other settings such as screenshots, timeouts, report folders, the number of concurrencies, among others.

But in the package.json file all desired execution profiles are specified, using npm, like:

All tests are executed:

```bash
npm run tests
```

Runs only firefox:

```bash
npm run test_firefox
```

Runs only chrome:

```bash
npm run test_chrome
```

Chrome and firefox running at the same time:

```bash
npm run test_both
```

Run test and generate reports in json:

```bash
npm run test_report
```

Generate reports in html:

```bash
npm run html_report_generator
```

2. **Store the base URL (http://www.musala.com/) in the configuration file**

For this requirement I created a data file data\URL.json with all the url that I need in the test, for example:
"https://www.musala.com/" "https://www.musala.com/company/"....etc

3. **Add a possibility the tests below to be executed in parallel simultaneously**

Testcafe allows us to run a test in parallel using concurrency. You can specify the concurrency in the configuration file (in this case I used .testcaferc.json: "concurrency": 1), or in the test execution profile in the package. json("test_paralell": "testcafe -c 2 chrome tests", in this example two test cases will be executed at the same time.
Up to 10 concurrency sessions can run concurrently.

4. **For Test Case 1 – prepare a test data file in a format of your choice, the file must contain 5 sets of invalid e-mail addresses. Implement the test to run 5 times with each e-mail address.**

In this case I created a data file data\invalidEmailAdd.json with 5 combinatios of wrong data and with this instruction DATASET.forEach I can run the same test with diferent data set including in the file.

5. **Provide a report for the test runs**

   In this ocation I used a npm dependencie called testcafe-reporter-cucumber-json

```JSON
testcafe tests --reporter cucumber-json:report/jsonReport/jsonReport.json --reporter-app-name='Test Execution Report'
```

This command line generate a report in json format, this formart is not visually atractive for that reason we used the "multiple-cucumber-html-reporter" that converts from json report to a html report with nice graphics, and more information related with the time, the browsers and if the test case failed it shows the screenshots in the exact moment the process failed.

First You have to test and generate reports in json:

```bash
npm run test_report
```

and then generate reports in html:

```bash
npm run html_report_generator
```

6. **Add a README file**
   Here we are :-D

7. **If you can think of other useful features – feel free to include them as well!**

**Implement the following test cases:
Test Case 1**

1. Visit http://www.musala.com/
2. Scroll down and go to ‘Contact Us’
3. Fill all required fields except email
4. Under email field enter string with wrong email format (e.g., test@test)
5. Click ‘Send’ button
6. Verify that error message ‘The e-mail address entered is invalid.’ appears

Solution in this file: tests\tc1_contactUs_test.js

**Test Case 2**

1. Visit http://www.musala.com/
2. Click ‘Company’ tap from the top
3. Verify that the correct URL (http://www.musala.com/company/) loads
4. Verify that there is ‘Leadership’ section
5. Click the Facebook link from the footer
6. Verify that the correct URL (https://www.facebook.com/MusalaSoft?fref=ts) loads and verify if the Musala Soft profile picture appears on the new page

Solution in this file:
Is a good practice in test case design to split in differet test cases each verification step.This test cases has different verification for example: www.musala.com, musala.com/company, Leadership section, and Musala Soft Facebook profile.
For each case I created a test in the same testsuite: tests\tc2_company_test.js

**Test Case 3**

1. Visit http://www.musala.com/
2. Navigate to Careers menu (from the top)
3. Click ‘Check our open positions’ button
4. Verify that ‘Join Us’ page is opened (can verify that URL is correct: http://www.musala.com/careers/join-us/
5. From the dropdown ‘Select location’ select ‘Anywhere’
6. Choose open position by name (e.g., Experienced Automation QA Engineer)
7. Verify that 4 main sections are shown: General Description, Requirements, Responsibilities, What we offer
8. Verify that ‘Apply’ button is present at the bottom
9. Click ‘Apply’ button
10. Prepare a few sets of negative data (e.g., leave required field(s) empty, enter e-mail with invalid format etc.)
11. Upload a CV document, and click ‘Send’ button
12. Verify shown error messages (e.g., The field is required, The e-mail address entered is invalid etc.)

Solution in this file: tests\tc3_4_careers_test.js
Testcases:
"TC-03a Verify that ‘Join Us’ page is opened",
"TC-03b Verify that 4 main sections are shown: General Description, Requirements, Responsibilities, What we offer",
"TC-03c Verify that ‘Apply’ button is present at the bottom"
"TC-03d Verify shown error messages: The field is required"
"TC-03e Verify shown error messages: The e-mail address entered is invalid."

**Test Case 4**

1. Visit http://www.musala.com/
2. Go to Careers
3. Click ‘Check our open positions’ button
4. Filter the available positions by available cities in the dropdown ‘Select location’ (Sofia and Skopje)
5. Get the open positions by city
6. Print in the console the list with available positions by city in the following format:
   Example:
   Sofia
   Position: Database Administrator
   More info: http://www.musala.com/job/database-administrator/
   Position: OS and Application Administrator
   More info: http://www.musala.com/job/os-and-application-administrator/
   Position: ………………
   More info: ………………
   ………………………………
   Skopje
   Position: ………………
   More info: ………………

Solution in this file: tests\tc3_4_careers_test.js
Testcase: "TC-04 Verify the list with available positions by city"
