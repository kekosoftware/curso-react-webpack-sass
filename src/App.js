import './App.scss'
import React, { Fragment } from 'react';
import Header from "./components/Headear";
import Characters from './components/Characters';
import './components/Header.css'

const App = () => {
  return ( 
    <Fragment>
      <Header 
        title="Rick and Morty"
      />
      <Characters />
    </Fragment>
   );
}
 
export default App;
