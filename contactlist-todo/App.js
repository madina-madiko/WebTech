import React, { Component } from 'react';
import './css/style.css';
import ContactList from './ContactList/App';
import ToDo from './ToDo/Main';
import './App.css';
import { Route, NavLink, HashRouter } from "react-router-dom";

const MainPage = () => <div>
                       <div className="navbar-header"> 
                        <a className="navbar-brand" href="app.js">Welcome</a>
                       </div>
                       </div>


class App extends Component {
  render() {
    return (
     
       <HashRouter>    
         <header id="fh5co-header" role="banner">
           <nav className='navbar navbar-default'>
           <div className="container-fluid">
           <div id="fh5co-navbar" className="navbar-collapse collapse">
           <ul className="nav navbar-nav navbar-right">
             <ol><NavLink exact to='/'><span> Home <span className="border"></span></span></NavLink></ol>
             <ol><NavLink to='/ContactList/App'><span> ContactList <span className="border"></span></span></NavLink></ol>
             <ol><NavLink to='/ToDo/Main'><span> To Do App <span className="border"></span></span></NavLink></ol>
           </ul>
          <div className="content">
             <Route exact path = '/' component={MainPage}/>
             <Route path = '/ContactList' component={ContactList}/>
             <Route path = '/ToDo' component={ToDo}/>

          </div>
          </div>
          
          </div>
          </nav>
          </header>          
       </HashRouter>
    );
  }
}

export default App;