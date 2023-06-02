import React from 'react';

const ChildComponent = React.memo(({ count }) => {
  console.log('Child Component rendered');
  
  return (
    <div>
      <h2>Child Component</h2>
      <p>Count: {count}</p>
    </div>
  );
});

export default ChildComponent;
