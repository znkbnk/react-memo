# react-memo

Step 1: Set up the project

-  Create a new React project
using a tool like Create React
App or your preferred method.

Step 2: Create a Parent Component

-  In your project, create a new
file called ParentComponent.js.
-  Set up a functional component
named ParentComponent.
-  Inside the component, render
a simple <div> element with some
content, like a heading and a paragraph.

Step 3: Create a Child Component

-  In the same project, create
another file called ChildComponent.js.
-  Set up a functional component
named ChildComponent.
-  Inside the component, render
a simple <div> element with
some content, like a paragraph.

Step 4: Implement React.memo()

-  Import the React.memo() function
at the top of your ChildComponent.js file.
-  Wrap the ChildComponent
function with React.memo()

Step 5: Render ChildComponent in ParentComponent

-  In the ParentComponent.js file,
import the ChildComponent component.
-  Render the ChildComponent component
inside the ParentComponent component.

Step 6: Test the Performance Optimization

-  Open your project in a browser
or in a development server.
-  Inspect the React component tree
using the browser's developer tools.
-  Make sure the ChildComponent is
only rendered once initially.
-  Trigger a re-render of the
ParentComponent by updating its state or props.
-  Observe the component tree and check
if the ChildComponent is re-rendered or not.

Step 7: Update Props and Test Again

-  Pass some props from the 
ParentComponent to the ChildComponent.
-  Update the props in the ParentComponent
and observe if the ChildComponent is
re-rendered only when the props change.

Step 8: Add a Prop Comparison Function

-  If you have complex props that can't be
shallow compared by React's default
mechanism, you can provide a custom
comparison function to React.memo().
-  Define a prop comparison function
in the ChildComponent.js file.
-  Update the React.memo() call to
include the comparison function.
  
Step 9: Test the Performance Optimization
with Custom Comparison Function

-  Repeat Step 6 and Step 7 to observe
if the ChildComponent is re-rendered
only when the relevant props change,
using the custom comparison function.

Step 10: Optional - Test Performance Differences

-  As an optional step, you can compare the
performance difference between using
React.memo() and not using it.
-  Create a large dataset or simulate
a heavy workload for the ParentComponent
and observe the rendering performance
with and without React.memo().
  
