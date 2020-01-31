import React from 'react'
import './hotel.css'
import tripAdvisor from '../img/tripadvisor.svg'
import { Link } from 'react-router-dom'
 
class PieDePaginaHoteles extends React.Component {
    render () {
        return(
            <div className = "pie-de-pagina row center-align">

                <div className="col s12 l6">
                    <h4>Pagina oficial del hotel</h4> <br/>
                    <div className="col l12 s12 center-align">
                        <a className="waves-effect waves-light btn-small" href={this.props.webOficial} target = "blank" >hotel</a>
                    </div>
                </div>

                <div className="col s12 l6">
                     <h4>Mas información del hotel en:</h4> <br/>
                     <div className="col l12 s12 center-align">
                       <a href={this.props.tripAdvisor} target ="blank"><img src = {tripAdvisor}></img></a> 
                    </div>
                </div>
               

            </div>
        )
    }
}

export default PieDePaginaHoteles