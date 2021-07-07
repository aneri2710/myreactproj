import React from 'react';
import Navbar from './component/layout/Navbar'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './component/Pages/Home'
import History from './component/Pages/History'
import Search from './component/Pages/Search'

const App=()=>{
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/history" component={History}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
