import React from 'react' 
import 'materialize-css/dist/css/materialize.min.css'
import './tarjeta_hotel.css'
import { Link } from 'react-router-dom'


class Hotel extends React.Component {
    render(){
          return (
              <div className="row">

                  {this.props.datos.PlayaCarmen.map(
                      (tarjeta) => {
                          return (
                            <div className="card col l6 s12 tarjetahotel" key= {tarjeta.id}>
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={tarjeta.imagen} alt = "imagen del hotel"/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4"><strong>{tarjeta.hotel}</strong><i className="material-icons right">more_vert</i></span>
                                    <p><Link to="/hotel">{tarjeta.slogan}</Link></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">{tarjeta.hotel}<i className="material-icons right">close</i></span>
                                    <p>{tarjeta.descripcion}</p>
                                </div>
                            </div>

                          )
                      }
                    

                  ) }

               

              </div>
            
       
          )
}
}

export default Hotel