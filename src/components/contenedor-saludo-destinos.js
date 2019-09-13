import React from 'react'
import Saludo from './saludo'
import Destino from './Destinos'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'

class ContenedorSaludoDestino extends React.Component {
    state= {
        usuario:""
    }

    handleChange = e => {
        this.setState({
            usuario:e.target.value
        }
            
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let element = document.getElementsByClassName("show");
        element[0].remove("show")
        let mostrar = document.getElementsByClassName("hide");
        mostrar[0].classList.add("show")
        mostrar[0].classList.remove("hide")     
        console.log(this.state)
        

       
        
        // console.log("form was submited")
        // console.log(this.state)
    }

    


    render() {
        return(

            <BrowserRouter>
            <div className = "show">
            <Saludo onChange = {this.handleChange} onSubmit = {this.handleSubmit}/>
            </div>

            <div className = "hide">
                <Destino pasajero={this.state.usuario} formValues={this.state}/>
            </div>
            
            </BrowserRouter>
        )
    }
}

export default ContenedorSaludoDestino