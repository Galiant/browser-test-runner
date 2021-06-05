// Test card component
import React from 'react';
import { testsWithStatus } from '../utils/utils';
import './Styles.css';

const TestContainer = () => {
  return (
    <div id='tests'>
      {testsWithStatus.map((test, index) => (
        // not recommended to use index for key but for this use case would say that is OK
        <p key={index}>
          {test.description} - {test.status}
        </p>
      ))}
    </div>
  );
};

export default TestContainer;
