import React from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css'
import Plantilla from './components/plantilla'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Destinos from './components/Destinos'

import inicio from './components/inicio'
import saludo from './components/saludo'
import Guajira from './components/guajira'

import PlayaDelCarmen from './components/playa_del_carmen'
import Hotel from './components/hotel'
import Pagos from './components/formas-de-pago'
import PagaYa from './components/paga-ya'
import ContenedorFormulario from './components/contenedor-formulario'
import NotFound from './components/not-found'

import ContenedorSaludoDestinos from './components/contenedor-saludo-destinos'


class App extends React.Component {

  state =  {
   

}

handleChange = e => {
    this.setState({
        ...this.state.form,
        [e.target.name]: e.target.value,
    })
}

  render() {
    return (
    <BrowserRouter>
    <Plantilla>

        <Switch>
          <Route exact path ="/" component = {inicio}/>
          {/* <Route exact path = "/saludo" component = {ContenedorSaludoDestinos}/> */}
          <Route exact path ="/saludo" component = {saludo}  /> 
          <Route exact path ="/playa_del_carmen" component = {PlayaDelCarmen}/>
          <Route exact path ="/destinos" component = {Destinos}/>
          <Route exact path ="/guajira" component = {Guajira}/>
         
          <Route exact path ="/hotel" component = {Hotel}/>
          <Route exact path ="/pagos" component = {Pagos}/>
          <Route component={NotFound}/>
          
         


        </Switch>  
      </Plantilla>    
    
    </BrowserRouter>
  );
  }
  
}

export default PagaYa;
