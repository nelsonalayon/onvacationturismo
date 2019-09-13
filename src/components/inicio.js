import React from 'react'
import Noticias from '../propaganda'
import onVacation from '../img/logoOnvacationBlanco.png'
import queTeDetiene from '../img/queTeDetiene.png'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
 

function Inicio () {
    return (

      <div>
        <div className="App row">

          <div className= "onvacation_quetedetiene col l6 s12">

            <div>
              <figure>
                <img src = {onVacation} width= "330" alt = "logo On Vacation"/>          
              </figure>
              <hr></hr>
              <figure>
                <img src = {queTeDetiene} width = "270" alt = "logo que te detiene"/>
              </figure>
              <Link className=" red darken-2 waves-effect waves-light btn" to = '/saludo'>Inicio</Link>
            </div>    

          </div>
        <div className="col l6 hide-on-small-only">
          <Noticias />
        </div> 
        
      
      </div>
      
      <div className="col l6 hide-on-med-and-up show-on-small">
          <Noticias />
        </div> 
    </div>
    )
}

export default Inicio