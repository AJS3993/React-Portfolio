import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">



<Switch>
<Route 
      exact path={`/`} 
      render={ (routerProps
      ) => < HomePage/>} />

          

          <Route
            exact
            path="/Contact"
            render={() => (
              <HomePage
              />
            )}
          />

              
              </Switch>

    </div>
  );
}

export default App;