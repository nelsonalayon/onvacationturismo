import React from 'react'
import TarjetaRick from './tarjetaRick'


// En este componente se hace:
// un llamado a una api externa
// se usa el estado del componente para manejar los estados de una petición post (loading, error, data)
// se usa el estado para especificar el numero de pagina que queremos obtener (nextpage)
// se usa una funcion asincrona (async await) para hacer un llamado a una api
// se usa una condicional && para poner un loader en caso de que el estado loading del componente sea true
// y se usa un condicional && para poner un boton en caso de que el estado loaging del componente sea false


class LlamarApi extends React.Component{

    // Debemos manejar los estados de una carga, que son loading, error y datos, los cuales se especifican en el estado del componente

    state = {

        // el estado nextPage sirve para que nuestra aplicación cargue mas paginas de rick and morty, 
        nextPage:1,
        loading:true,
        error:null,
       data: {
           results: []
       }
    }

    componentDidMount() {
        this.fetchCharacters()
    }

    fetchCharacters = async () => {
        // antes de hacer cualquier cosa, especificamos los estados loading y error del componente
        this.setState({loading:true, error: null})

        try{
            const response = await fetch(`http://api.tripadvisor.com/api/partner/2.0/location/89575/`)
            const data = await response.json()
            // aca se modifica el estado del componente con los datos recibidos
            this.setState({
                nextPage: this.state.nextPage +1,
                loading:false, 
                data:{
                    info: data.info,
                    // este codigo sirve para concatenar las paginas que vamos cargando 
                    results: [].concat(this.state.data.results, data.results)
                },
                
            })

        } catch (error){
            // En caso de que falle la carga de datos, se maneja el error
            this.setState({
                loading:false, 
                error:error
            })

        }
        
    }
    render() {
        // el siguiente if es para manejar el caso de que falle la carga de datos
        if(this.state.error) {
            return `Error: ${this.state.error.message}`
        }
        return(
            <div className= 'row'>
                <h1>hola mundo</h1>
                
                    <div>
                         {this.state.data.results.map(muneco => (
                             <li key= {muneco.id}>
                                 <TarjetaRick data = {muneco}/>
                             </li>
                             
                         ))
                         }
                    </div>

                    {/* el siguiente código es una condicional que dice que si el estado esta en cargando, mostrar
                    lo que esta en <h1>, es decir un loading */}
                {this.state.loading && (
                    <h1>cargando esta vaina</h1>
                )}

                {/* aca vamos a mostrar un boton solamente cuando el estado loading sea falso */}

                <div>
                     {!this.state.loading && (
                        //  en el tutorial se pone () =>this.fetchCharacters, pero a mi me funciona solamente con this.fetchCharacters
                    <button onClick = {this.fetchCharacters} className="waves-effect waves-light btn">load more</button>
                ) }
                </div>

               
                    
                
            </div>
        )
    }
}

export default LlamarApi