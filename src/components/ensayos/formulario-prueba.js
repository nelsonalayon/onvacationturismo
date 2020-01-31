import React from 'react' 

class Formulario extends React.Component {

    state = {
       name:""
    }

    // handleChange = (e) => {       
       

    //     this.setState({name: e.target.value})

      

    //     console.log({
    //         name: e.target.name,
    //         value: e.target.value
    //     })
    // }

    render(){
        return(
        <div>
            <form onSubmit>
                <label>ponga un nombre</label>
                <input type = "text" onChange={this.props.onChange} name = "nombre" value = {this.state.value}></input>
            </form>
        </div>
            )
    } 
}

export default Formulario