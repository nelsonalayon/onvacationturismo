import React from 'react' 
import 'materialize-css/dist/css/materialize.min.css'
import './tarjeta_paseos.css'


class Paseos extends React.Component {
  
    
    render(){
          return (
              <div className="row">
                  {this.props.datos.map(
                      (tarjeta) => {
                          return (
                            <div className="col s12 l4" key= {tarjeta.id}>                                
                                    <div className="card horizontal hoverable">
                                        <div className="oiga">
                                            <img src={tarjeta.imagen} alt = "imagen" className="imagen-del-paseo"/>
                                        </div>
                                        <div className="card-stacked">
                                        <div className="card-content">
                                            <p>{tarjeta.descripcion}</p>
                                        </div>
                                        <div className="card-action">
                                            <a href={tarjeta.link}>{tarjeta.paseo}</a>
                                        </div>
                                        </div>
                                    </div>
                            </div>

                          )
                      }
                    

                  ) }

               

              </div>
            
       
          )
}
}

export default Paseos

