Code Splitting:
Traditionally, all the components in a React application would be bundled into one single file called bundle.js

This allows the Browser to download the entire app once so that the user can navigate seamlessly without having the need to make another HTTP Request to server.

As the application grew in size and more third partty packages were installed, the bundle size bloated up causing the app to have long initial load time.

A single bundle file is split into smaller ones and the user only download the code they need.

with an anlytics website, if a user wants to navigate to their profile page and then log-off, there is no need to download the bulky code related to the dashboard page.

to access the diffrent loading folder: npm build
to access the network load time: npm server

Cose splitting is used to reduce the loading time of App during intital rendering and it stops the unnessary components to reload until the user access it.

Forwarding-Ref: 
is a technique for automatically passing a ref through a component to one of its children.
It can be useful for some kinds of components, especially in reusable component library.

Portals: 
Provides a first-class way to render children into a DOM node that exsists outside the DOM hierachy of the parent Component.
It Provides the ability to break-down the DOM tree, so that we can render a component onto a DOM node that is not under the root element.

sometimes it’s useful to insert a child into a different location in the DOM:

Error-Boundary: 
A class component that implements either one or both of the life-cycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary.
The static method getDerivedStateFromError is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information.

Error boundaries are React components that catch JS error in their child component tree, log errors and display a fallback UI.
A class component becomes an Error-Boundary by defining either or both of getDerivedState from error and ComponentDidCatch LifeCycle methods.
The placement of the error boundary also matters as it controls if the entire app should have the fall-back  UI  or just the component the component causing the problem   

React automatically logs every error

HighOrderComponent: 
To share common functionality between components
A pattern where a function takes a function as an argument and returns a new component.
const newcomponent = higherOrderComponent(originalComponent)
const enhancedComponent = higherOrderComponent(originalComponent)
The HOC Pattern is used to share the commmon functionality between the components without having to repeat the code.

Render-Prop Pattern:
The term 'render-prop' refers to a technique for sharing code between React Components using a Prop whose value is a function

Reconcilation: is a process through which React Updates the DOM, so whenever the props and state of a component is changed, React needs to take the decision whether it needs to update the DOM based on certain guidelines.