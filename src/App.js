import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <div className="App">



<Switch>
<Route 
      exact path={`/`} 
      render={ (routerProps
      ) => < HomePage/>} />
              
              </Switch>

    </div>
  );
}

export default App;