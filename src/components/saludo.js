import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './saludo.css'
import { Link } from 'react-router-dom'


class Saludo extends React.Component {

    // state = {
    //     usuario: " "
    // }



    // handleChange = (e) => {

    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    //      console.log({
    //         name: e.target.name, 
    //         value: e.target.value})
           
    //      }

    handleClick = (e) => {
        console.log('boton apretado')
    }

    handleSubmit = e => e.preventDefault();


    render() {
        return (

            <div className= "saludo">
                <div className="container center-align">
                    <h1>Hola amigo turista</h1>
                    <form onSubmit = {this.handleSubmit}>
                        <input 
                            onChange= {this.props.onChange} 
                            type="text" 
                            name = "Usuario"
                            value =  {this.props.formValues}
                            />
                        <Link type = "button" 
                            onClick = {this.props.onSubmit} 
                            to = "/destinos"
                            className ="btn waves-effect waves-light red darken-2"                      
                            name="action">Siguiente >
                            
                            <i className ="material-icons right">send</i>
                        </Link>
                    </form>
                </div>
             </div>   

            )

    }
   
}

export default Saludo 