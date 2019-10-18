import React,{useEffect,useState} from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import TopPage from './TopPage';

const App = () =>{

   
  return (
    <Router>
      <div className="App">
        
          <Nav />
          <Switch>
            <Route path="/" exact component={TopPage}/> 
            <Route path="/about" component={About}/>
            <Route path="/shop" exact component={Shop}/>
            <Route path="/shop/:id" component={ItemDetail}/>
            {/* <Route path="/:query/:id" component={Details}/> */}
          </Switch>
          <TopPage />
        
      </div>
    </Router>
  );
}


export default App;
