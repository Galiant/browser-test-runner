import React from 'react';
// Components
import Button from './components/Button';
import TestContainer from './components/TestContainer';
import Total from './components/Total';
// Functions
import { startTests, refresh } from './utils/utils';
import './App.css';

const App = () => {
  return (
    <>
      <h1>Test Runner</h1>
      <div className='testWrapper'>
        <TestContainer />
        <div className='results'>
          <Total textContent='Total Passed' totalId='passedTotal' />
          <Total textContent='Total Failed' totalId='failedTotal' />
          <Total textContent='Total Running' totalId='runningTotal' />
          <p id='done'></p>
        </div>
      </div>
      <div className='buttonWrapper'>
        <Button
          buttonId='startButton'
          handleClick={startTests}
          textContent='Start'
        />
        <Button handleClick={refresh} textContent='Refresh' />
      </div>
    </>
  );
};

export default App;
