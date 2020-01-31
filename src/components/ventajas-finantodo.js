import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

class VentajasFinantodo extends React.Component{
    render() {
        return(
            <div className="row container">

                {this.props.datos.map(
                    (ventaja) => {
                        return (
                            <div className="col s12 m6 l4" id={ventaja.id}>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={ventaja.foto}/>
          
                                    </div>
                                    <div className="card-content">
                                        <p>{ventaja.ventaja}</p>
                                    </div>       
                                </div>
                            </div>
                        )
                    }
                )}
    
  </div>
        )
    }
}

export default VentajasFinantodo