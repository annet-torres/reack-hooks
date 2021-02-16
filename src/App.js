import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Formulario from './components/Contador';
import FormHooks from './components/FormHooks';
import EjemploUno from './components/EjemploUno';
import Saludo from './components/Saludo';
import Comentarios from './components/Comentarios';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import User from './components/User';



function App() {
  /*const sujeto = {
    nombre : 'Annet',
    urlImagen: 'https://via.placeholder.com/64C/O',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.!'
  }*/
  return (
    <Router>
        <div className ="container m-5"> 
        <div className="btn-group">
          <Link to= "/" className =" btn btn-dark mt-5">
            Inicio
          </Link>
          <Link to= "/contacto" className =" btn btn-dark mt-5">
            Contacto
          </Link>
          <NavLink to= "/nosotros" className =" btn btn-dark mt-5" activeClassName ="active">
            Nosotros
          </NavLink>
        </div>
        <hr/>
        <Switch>
        <Route path ="/nosotros/:id">
            <User/>
          </Route>
        <Route path ="/" exact>
          <Inicio/>
       
          </Route>
          <Route path ="/contacto">

            <Contacto/>
          </Route>
          <Route path ="/nosotros">
            <Nosotros/>
          
          </Route>
        
        </Switch>
        </div>
    </Router>
   
  );
}

export default App;
