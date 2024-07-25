import React from 'react';
import Issues from '../components/Issues';
import Suggestions from '../components/Suggestions';
import Poll from '../components/Poll';

const EmployeesDiscussion = () => {
  return (
    <div>
      <h2>Employees Discussion</h2>
      <Issues />
      <Suggestions />
      <Poll />
    </div>
  );
};

export default EmployeesDiscussion;
