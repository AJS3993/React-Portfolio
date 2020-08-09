import React from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './Landing/Landing';
import Projects from './Projects/Projects';
import Blog from './Blog/Blog'


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

      <Route 
      exact path={`/blog`} 
      render={ (routerProps
      ) => < Blog/>} />        
         

              
              </Switch>
              
                 
    </div>
  );
}

export default App;