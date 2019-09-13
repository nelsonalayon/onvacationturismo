import React from 'react' 


// todos los campos de texto de este formulario son controlados, lo que significa que los datos que se guardan en state 
// no se repiten en los campos de texto sino que ustan la misma información (this.state.nombredelcampo). Si el state no 
// se inicializa el navegador va a dar error porque el navegador no va a poder encontrar la información 

class Formulario extends React.Component {

    state = {}

    // handleChange = (e) =>{   

    //     this.setState({[e.target.name]: e.target.value})

    //     console.log({
    //         name:e.target.name,
    //         value:e.target.value})}


    handleClick = () => {
        console.log("boton apretado")
        }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log("form was submited")
    //     console.log(this.state)
    // }


    render() {
        return(
            <div className="container">
           <form onSubmit= {this.props.onSubmit}>
               <label > Nombre completo</label>
               <input className= "entrada"
               
                onChange = {this.props.onChange}
                name = "nombre"
                type= "text"
                value={this.props.formValues.nombre}>

                </input>

                <label >Ciudad de residencia</label>
                    <input className= "entrada"
               
                            onChange = {this.props.onChange}
                            name = "Ciudad"
                            type= "text"
                            value={this.props.formValues.Ciudad}
                            >

                    </input>

                    <label >Dirección</label>
                    <input className= "entrada"
               
                            onChange = {this.props.onChange}
                            name = "Direccion"
                            type= "text"
                            value={this.props.formValues.Direccion}
                            >

                    </input>

                    <label >Teléfono</label>
                    <input className= "entrada"
               
                            onChange = {this.props.onChange}
                            name = "Telefono"
                            type= "text"
                            value={this.props.formValues.Telefono}
                            >

                    </input>

                <button 
                onClick = {this.handleClick}
                >sdfasd</button>
               <p>Cuando edites y deselecciones este control, el color de fondo de su contenedor cambiará: <input type="text"/></p>
           </form>
           </div>
        )
    }
}

export default Formulario