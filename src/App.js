import React from 'react';
import NavBar from './Components/NavBar'
import {Route,Switch} from 'react-router-dom'
import MovieProvider from './Contexts/MovieProvider'
import Api from './Components/Api'
import Material from './Components/Material'
function App() {
  return (
      <Switch>
      <MovieProvider>
        <Route
       exact
       path='/search/:name'
         render={(routeProps)=><Material searchQuery={routeProps.match.params.name}/>}
       />
    </MovieProvider>
        <Route
          
          path='/'
          render={()=><NavBar/>}
        />
      </Switch>
    // {/* <Switch>
    
    //   <Route
    //  exact
    //  path='/search/:name'
    //    render={(routeProps)=><MovieProvider searchQuery={routeProps.match.params.name}/>}
    //  />
  
    //   <Route
        
    //     path='/'
    //     render={()=><NavBar/>}
    //   />
    // </Switch> */}
  );
}

export default App;

