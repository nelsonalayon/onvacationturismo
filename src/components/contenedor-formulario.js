import React from 'react'
import Formulario from './formulario'
import TarjetaFormulario from './tarjeta-formulario'

class ContenedorFormulario extends React.Component{
    state = { form: {
        nombre: "",
        Ciudad:"",
        Telefono:"",
        Direccion:""
    }}

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit = async e =>  {
        e.preventDefault()

        try {

        } catch {
            
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col s12 l6">
                    <Formulario onChange = {this.handleChange } formValues={this.state.form} onSubmit = {this.handleSubmit}/>

                </div>
                <div className="col s12 l6">
                     <TarjetaFormulario datos={this.state.form}  />
                </div>               
               

            </div>
           

        )
    }
}

export default ContenedorFormulario