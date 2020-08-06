import React from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './Landing/Landing';
import Projects from './Projects/Projects';


function App() {
  return (
    <div className="App">



<Switch>
<Route 
      exact path={`/`} 
      render={ (routerProps
      ) => < Landing/>} />

<Route 
      exact path={`/projects`} 
      render={ (routerProps
      ) => < Projects/>} />         
         

              
              </Switch>
              
                 
    </div>
  );
}

export default App;