import React, { Component } from 'react';
import './App.css';
import OMDBQueryForm from './OMDBQueryForm'

class App extends Component{
  
  render() { 
    return(
      <div className="App">
        <header className="App-header">
            <OMDBQueryForm />
        </header>
      </div>
    )
    
  }
  
  
}
 



export default App;
