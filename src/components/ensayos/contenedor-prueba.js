import React from 'react'
import ComponentePrueba from './componente-prueba'
import FormularioPrueba from './formulario-prueba'
import OtroComponente from './algo-chevere'
import LlamadaAUnaApi from './llamadaAUnaApi'
import ApiTripadvisor from './apiTripadvisor'

class ContenedorPrueba extends React.Component {

    state = {

        nombre:""
    }


  handleChange = (e) => {       
       

        this.setState({[e.target.name]: e.target.value})      

        console.log({
            nombre: e.target.name,
            valor: e.target.value
        })
    }


    render () {
        return ( 
        <div>
            <ComponentePrueba datos = {this.state.nombre}/>
            <OtroComponente datos = {this.state.nombre}/>
            <FormularioPrueba onChange= {this.handleChange}/>
            <ApiTripadvisor/>
            <LlamadaAUnaApi/>
        </div>
            )
    }
}

export default ContenedorPrueba