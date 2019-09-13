import React from 'react'
import './ventajas-todo-incluido.css'

class Ventajas extends React.Component{
    render() {
        return(
            <div class="row container">
                {
                    this.props.datos.map(
                        (ventajas) => {
                            return(
                                <div class="col s12 m5 tarjeta-ventajas">
                                    <div class="card-panel blue-grey lighten-5 row ">

                                    <i className="material-icons col s12 l2 red-text center-align icono-de-ventajas">{ventajas.icono}</i>
                                        <div className="col s12 l10">
                                            <h4 className="white-text blue-grey-text text-darken-4">{ventajas.titulo}</h4>
                                            <span class="blue-grey-text text-darken-1">{ventajas.descripcion}
                                            </span>
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        }
                    )
                }
                
            </div>
        )
    }
}

export default Ventajas