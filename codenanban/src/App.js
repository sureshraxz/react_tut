import logo from './logo.svg';
import './App.css';

//1: Basic component without using class component
// const App = () =>{
//   return (
//     <div> Hi from Suresh 😀</div>
//   );
// }
//***************************************************

//2: pass the data to the app component 
// const name = 'Rohith';

// const App = (props) =>{
//   return (
//     <div> Hi from {name} 😀</div>
//   );
// }
//***************************************************

//3: pass the 'data' from one component to the another
// const PrintName = (props) =>{
//   return(
//     <div> I'm {props.name} from Mars 🎃.</div>
//   );
// }

// const App = () =>{
//   return (
//     //<div> Hi.😀</div> //JSX expressions must have one parent element.
//     <PrintName name={'Suresh'}/>
//   );
// }
//***************************************************

//4: pass the 'className' as property to the another - classNmae is used for css
// const PrintName = (props) =>{
//   return(
//     <div className={props.className}> I'm {props.name} from Mars 🎃.</div>
//   );
// }

// const App = () =>{
//   return (
//     <PrintName className={'test'} name={'Suresh'}/>
//   );
// }
//***************************************************

//4: passing 'events' as property to the another - classNmae is used for css
const PrintName = (props) =>{
  return(
    <div onClick={props.clickEventFromParent} className={props.className}> I'm {props.name} from Mars 🎃.</div>
  );
}

const App = () =>{
  return (
    <PrintName clickEventFromParent={clickFun} className={'test'} name={'Suresh'}/>
  );
}

const clickFun = () =>{
  prompt('Hey Dude! How is Mars? ');
}
//***************************************************


export default App;
