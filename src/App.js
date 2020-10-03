import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Card from './card.js';
import Resume from './Resume.js';
// function App() {
//   return (
//     React.createElement('div',{style:{background:'yellow'},id:'hai'},
//       React.createElement('h2',null,React.createElement('p',null,'Sreya')))
//   );
// }


// function App(){
//   const x=(
//     <div>
//       <p>Hai everyone</p>
//       <h4> How are You</h4>
//     </div>
//   );
//   return(
//     ReactDOM.render(x,document.getElementById('root'))
//     );
// }

class App extends React.Component{
  render(){
    return(
        <div className = "App">
        <BrowserRouter>
        <Route exact path="/" component={Card}/>

        	<Route exact path="./Resume" component={Resume}/>

        </BrowserRouter>

          {/*<Card/>*/}
        </div>
      );
  }
}

export default App;
