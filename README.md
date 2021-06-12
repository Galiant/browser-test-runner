## Task

Build an automated test runner that executes tests in the browser and reports on their results as soon as each test has completed.

Code below gives a series of tests to run, which will randomly succeed or fail after running for a few seconds. Using these exact tests as the inputs to test runner.

```javascript
const makeDummyTest = () => {
  const delay = 7000 + Math.random() * 7000;
  const testPassed = Math.random() > 0.5;

  return callback => {
    window.setTimeout(() => callback(testPassed), delay);
  };
};

const tests = [
  { description: 'uploads go in both directions', run: makeDummyTest() },
  { description: 'PDFs are adequately waterproof', run: makeDummyTest() },
  {
    description: 'videos are heated to 12,000,000 Kelvin',
    run: makeDummyTest(),
  },
  { description: 'subpixels can go rock climbing', run: makeDummyTest() },
  {
    description: 'images are squarer than traffic cones',
    run: makeDummyTest(),
  },
  { description: "metaproperties don't go too meta", run: makeDummyTest() },
];
```

All six tests should be run simultaneously ensuring that the user interface communicates the following:

- Status of each test (Not Started, Running, Passed, or Failed)
- Number of tests that have passed so far
- Number of tests that have failed so far
- Number of tests that are still running
- An indication (such as "DONE!") when all tests are finished

Initially, each test should be in the “Not Started” state, waiting for the user to press a button to run them. Once tests start running, the UI should update in real-time without needing further user interaction.

## How to run

1. Switch to directory `browser-test-runner`
2. run `yarn install` in your terminal
3. run `yarn start` in your terminal
4. new browser tab should load (if no copy web address from your terminal to your browser - it should be something like `http://localhost:3000/`)
5. to run tests click on `Start` button
