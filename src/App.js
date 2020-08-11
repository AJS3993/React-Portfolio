import React from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './Landing/Landing';
import Projects from './Projects/Projects';
import Blog from './Blog/Blog';
import MyFirstPost from './Posts/MyFirstPost';
import LabLife from './Posts/LabLife';
import GeneralAssembly from './Posts/GeneralAssembly'


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
         
         <Route 
      exact path={`/myfirstpost`} 
      render={ (routerProps
      ) => < MyFirstPost/>} /> 

       <Route 
      exact path={`/lablife`} 
      render={ (routerProps
      ) => < LabLife/>} />  

<Route 
      exact path={`/generalassembly`} 
      render={ (routerProps
      ) => < GeneralAssembly/>} />  
              
              </Switch>
              
                 
    </div>
  );
}

export default App;