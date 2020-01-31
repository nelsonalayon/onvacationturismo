import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Bancos from './bancos'
import datosBancos from './bancos.json'
import './paga-ya.css'

class PagaYa extends React.Component {
    render() {
        return(
            <div>
                <section className="encabezado-formas-de-pago">                    

                         <h1 className="titulo">Paga ya</h1>             
                
                </section>
                <section >
                    <div className="explicacion-de-pago ">
                        <div className="textos">
                            <p>Para reservar es necesario consignar como mínimo el 10% del valor total del plan y mensualmente 
                             hacer abonos iguales hasta 1 mes antes de la fecha del viaje, en ese momento la reserva debe estar 
                                                    totalmente paga</p>
                        </div>
                        <figure className="foto-viajera">
                            <img src="https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_960_720.jpg"/>
                        </figure>

                    </div>
                   
                    <div className="y-cuanto-pago">
                        <a href="#"  className="waves-effect waves-light btn-large red darken-1">Pero entonces, ¿cuanto tengo que pagar mensualmente?</a>
                    
                        <p>La reserva va mantener el precio congelado, sin reajustes de tarifa, 
                            ni intereses ni pagos extras por impuestos. La tarifa que usted contrató es la que va a pagar

                        </p>
                    </div>

                </section>

                <section>
                    <h2>¿Donde puedo hacer mis pagos mensuales?</h2>
                    <Bancos datos = {datosBancos}/>

                </section>
            </div>
        )
    }
}

export default PagaYa