import React from 'react' 
import 'materialize-css/dist/css/materialize.min.css'
import Destino from './tarjeta_destino'
import datos from './datos_tarjetas_destino.json'


class Destinos extends React.Component {

    state = {    
        loading:true,
        error: null,
        data: undefined   
    }      

    componentDidMount() {
        this.fetchData()
    }

    fetchData = ( ) => {
        this.setState({loading:true, error:null })

        try {
            const data = []
            this.setState({loading: false , data: data })
        } catch (error) {
            this.setState({ loading:false, error: error})
        }
    }

 
    render() {

       

        if (this.state.loading) {
            return 'loading...';
        }
        return(
        <div className= "container center-align">
           
           <h2>
           <br/>
            Para nosotros es un placer ayudarte <br/>a 
            programar tus vacaciones. <br/><br/>
            ¿Donde quieres vivir tu próxima aventura?

           </h2>
                
           <div className="">
            <div>               
                    
                    <Destino datos = {datos} />
                   
                
            </div>

           </div>

           
        </div>
    )
    }
    
    
}

export default Destinos