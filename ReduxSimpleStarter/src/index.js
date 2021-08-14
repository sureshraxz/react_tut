//*********creating a component *************

//requirements
import React from 'react';
import ReactDOM  from 'react-dom';

//jsx component => class
const App = () => {
    return <div> Hello from jsx component </div>;
}

//rendering the component into DOM
// React.render(App) - Err1
//Syntax => ReactDOM.render(classInstance,targetElememt)
//ReactDOM.render(App); - Err2
// ReactDOM.render(App,document.querySelector('.index-container'));
ReactDOM.render(<App/>,document.querySelector('.index-container'));