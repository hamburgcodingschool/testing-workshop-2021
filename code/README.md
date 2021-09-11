# Install dependencies
Install Jest and other dependencies with the command `npm install`.

# Run tests
To run the tests, use the command `npm test`. To run only the tests for a specific task, run e.g. `npm test 01` to run only the tests you wrote for task 01.

To watch your tests and rerun them with every change you do, use `npm test -- --watch` (or `npm test 01 -- --watch` for a specific file only).

# Install Selenium

https://www.selenium.dev/selenium/docs/api/javascript/index.html

Ideally, move the selenium driver to the `code` folder, then update the PATH environment variable. For Mac, that's: `export PATH=$PATH:/Users/..../testing-workshop-2021/code`