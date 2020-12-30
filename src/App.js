import React, { Component } from 'react';
import './App.scss';
import Navbar from './New/Components/navbar'
import About from './New/Pages/about'
import Home from './New/Pages/home'
import Profession from './New/Pages/profession'
import Hobby from './New/Pages/hobby'
import { Route } from 'react-router-dom'


export default class App extends Component{



  render(){
    return(
      <div className = {'father_div'}>

        <div className = {'mother_header'}>
              <div className = {'nkar'}>
                
              </div>
              <header>
                    <Navbar/>
              </header>
        </div>



    <div className = {'mother'}>
       
     
              <section>

                  <Route exact path = {'/'}>
                      <Home/>
                  </Route>

                  <Route path = {'/about'}>
                      <About/>
                  </Route>

                  <Route path = {'/profession'}>
                      <Profession/>
                  </Route>

                  <Route path = {'/hobby'}>
                      <Hobby/>
                  </Route>


              </section>



     
   </div>


      </div>
      
    )
  }
}