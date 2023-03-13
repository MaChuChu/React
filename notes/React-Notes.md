# React

## What is React?
React is a declarative, and flexible Javascript library for building user interfaces. By use components it lets you compose complex user interfaces with small and isolated code.

**Components**
A component takes in parameters called props (short for properties), and returns a hierarchy of views to display through the render method.

**Render**
The render method returns a component of whats seen on the screen. React takes the description and displays the result. Thus a render returns a React element.

**State**
State is a set of observable properties that control the behavior of the component. State of a component is an object that holds some information that may change over the lifetime of the component.

**Difference between props and state**
- Props are immutable, once the prop is set the props cannot be changed, while state is an observable object that is used to hold data that may change over time and the behavior can be controlled after each change.
- State can be used in class components, functional components with the user of React Hooks (useState) while props don't have this limitation.
- Props are set by parent components, State is generally updated by event handlers. 

**React Hooks**
Hooks let developers use state and other React features, without writing a class.