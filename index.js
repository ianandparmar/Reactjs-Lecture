import React, {Component} from 'react'; //react-lib
import ReactDOM from 'react-dom'; //virtual dom
import App from './App';

//create Class based component
//1.create class
//2.extends base class component
//3.inside create render() method

// class App extends React.Component {
//   render() {
//     return <h1>I am a class based component</h1>;
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));//to show higlliglted import App from './App';

//without jsx --how it is difficult
ReactDOM.render(
  React.createElement('div', {class: 'container'}, 'I am div'),
  // React.createElement('h1', {class: 'lead'}, 'I am h1'),
  // React.createElement('p', {class: 'para'}, 'I am p'),
  document.getElementById('root')
);
