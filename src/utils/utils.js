export const makeDummyTest = () => {
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

// Creating new test array with status as didn't want to edit the initial array
export const testsWithStatus = tests.map(test => ({
  ...test,
  status: 'Not Started',
}));

// Run tests and get status
const runTests = () => {
  testsWithStatus.forEach(test =>
    test.run(x => {
      x === true ? (test.status = 'Passed') : (test.status = 'Failed');
    })
  );
};

// Get tests results
const getTests = () => {
  // Setting interval here as we need to get info of the tests as they running
  const interval = setInterval(() => {
    let output = '';
    let passed = 0;
    let failed = 0;
    let running = tests.length;
    testsWithStatus.forEach(test => {
      output += `<p>${test.description} - ${test.status}</p>`;
      // Using switch statement to get total number of passed, failed and running tests
      switch (test.status) {
        case 'Passed':
          passed++;
          running--;
          break;
        case 'Failed':
          failed++;
          running--;
          break;
        default:
      }
    });
    // Passing values of above iterations to UI
    document.getElementById('tests').innerHTML = output;
    document.getElementById('passedTotal').innerHTML = passed;
    document.getElementById('failedTotal').innerHTML = failed;
    document.getElementById('runningTotal').innerHTML = running;
    // Get "DONE!" info after tests finished to run and clear interval
    if (running === 0) {
      document.getElementById('done').innerHTML = 'DONE!';
      clearInterval(interval);
    }
  }, 0);
};

const promiseRunTest = () => {
  return new Promise((resolve, reject) => {
    runTests();

    const error = false;

    if (!error) {
      resolve();
    } else {
      reject('Error: Something went wrong');
    }
  });
};

export const startTests = () => {
  // After starting test disable start button
  document.getElementById('startButton').disabled = true;
  // Set test status to "Running" after starting tests
  testsWithStatus.forEach(test => (test.status = 'Running'));
  promiseRunTest()
    // Get test results
    .then(getTests)
    .catch(error => console.log(error));
};

// Refresh tests with page reload
export const refresh = () => {
  window.location.reload();
};
