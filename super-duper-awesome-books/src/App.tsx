import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { NavigationPreLogin } from '../src/components/navigation/Navigation';
import { Register } from '../src/components/register/Register';
import { FooterPage } from '../src/components/footer/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">


    <Router>
    <Route exact path='/'><NavigationPreLogin/></Route>

    <Switch>
    <Route path='/register' component={Register}></Route>

    
   



    </Switch>
    </Router>

<FooterPage/>




      </header>



    </div>
  );
}

export default App;
