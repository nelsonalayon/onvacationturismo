import React from 'react' 
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from 'react-router-dom'


import '../tarjeta_destino.css'

class Destino extends React.Component {
    render(){
          return(

            <div className = "row">
               {this.props.datos.map(
                        (tarjeta) => {
                            return (                     

                                  <div key= {tarjeta.id}>
                                    <div className="col s12 m4 hoverable">
                                      <div className="card">
                                        <div className="card-image">
                                          <img src={tarjeta.imagen} alt= "foto"/>
                                          <span className="card-title"> <strong> {tarjeta.nombre}</strong></span>
                                          <Link className="btn-floating halfway-fab waves-effect waves-light red" to ="/playa_del_carmen"><i className="material-icons">add</i></Link>
                                        </div>
                                        <div className="card-content">
                                          <p>{tarjeta.slogan}</p>
                                        </div>
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

export default Destino