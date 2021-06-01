## Task

We would like you to build an automated test runner that executes tests in the browser and reports on their results as soon as each test has completed.

The objective of this assignment is to give us an idea about how you write maintainable and scalable code, when working as part of a team. We are a big fan of React and Typescript, but feel free to use whatever language, framework, tools, and libraries you like!

Start by copying the code below. It gives you a series of tests to run, which will randomly succeed or fail after running for a few seconds. Use these exact tests as the inputs to your test runner.

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

All six tests should be run simultaneously. Using whatever design you like, make sure that the user interface communicates the following:

- Status of each test (Not Started, Running, Passed, or Failed)
- Number of tests that have passed so far
- Number of tests that have failed so far
- Number of tests that are still running
- An indication (such as "DONE!") when all tests are finished

Initially, each test should be in the “Not Started” state, waiting for the user to press a button to run them. Once tests start running, the UI should update in real-time without needing further user interaction.
