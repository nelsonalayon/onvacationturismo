import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css"
import './hotel.css'
import datosPaseos from './datos_paseos.json'
import Paseos from './muestra-de-paseos'
import datosCarrusel from './carrusel.json'
import Carrusel from './carrusel_de_fotos'
import Servicios from './servicios_del_hotel'
import DatosServicio from './servicios-del-hotel.json'
import VentajasTodoIncluido from './ventajas_todo_incluido'
import datosVentajasTodoIncluido from './ventajas_del_todo_incluido.json'
import QueIncluye from './que-incluye'
import datosQueIncluye from './que-incluye.json'
import NoIncluye from './noIncluye'

class Hotel extends React.Component {

 
    render() {
        return(
            <React.Fragment>
                <Carrusel datos={datosCarrusel}/>

            <div className="fotos-iniciales row" >
                                
                    <Paseos datos = {datosPaseos}/>
                
                <div className="col l12 s12 center-align">
                    <a className="waves-effect waves-light btn-small" >Mas paseos</a>
                </div>
            </div>

            <div>
                <div className="row container" >
                    <div className="col s12 l6 ">
                        <img width="80%" src = "https://www.princess-hotels.com/sites/default/files/styles/porlets_servicios_hotel/public/actividades%20ni%C3%B1os_1.jpg?itok=Ghwk6Ke9"/>
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/MGsnO_9WC18" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div>

                    <div className="col s12 l6">
                        <h3>Vive unas vacaciones en un hotel 5 estrellas en la Riviera Maya</h3>
                        <p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                        El Hotel Platinum Yucatan Princess, un nuevo hotel en Playa del Carmen en un entorno de lujo donde podrás disfrutar de la sofisticación de sus modernas y exquisitamente decoradas habitaciones...

                        <br/><br/>Se convertirán en el lugar ideal para pasar unas exclusivas vacaciones en el caribe... 

                        <br/><br/>Donde escaparás de la rutina diaria y tendrás la oportunidad descubrir el paraíso caribeño en uno de los mejores hoteles en la Riviera Maya.
                        </p>

                        <p> Es la opción perfecta para unas vacaciones prácticas y completas en el Caribe mexicano, sin preocuparte de nada. 

                        <br/><br/>El hotel ideal para familias, parejas, jóvenes, amigos y grupos que viajen en busca de las mejores vacaciones en el Caribe.

                        <br/><br/>En el Grand Sunset Princess podrás estar todo el día divirtiéndote y difrutar del mejor ambiente con la amplia oferta de servicios que te ofrece el hotel. </p>

                    </div>

                </div>
               
                <section>
                    <h2>Servicios del Hotel</h2>
                     <Servicios datos= {DatosServicio}/>
                </section>

                <section>
                <h2>Donde queda el hotel</h2>

                <div className="row">
                    <div className="col s12 l6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.9512804608066!2d-87.03287268531942!3d20.671561005252723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQwJzE3LjYiTiA4N8KwMDEnNTAuNSJX!5e0!3m2!1ses!2sco!4v1566771302441!5m2!1ses!2sco" width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>
                    </div>

                    <div className="col s12 l6">
                        <p>Se encuentra enclavado en el emplazamiento ideal, junto a una
                        impresionante playa de arenas blancas en la Riviera Maya, próximo a las principales atracciones turísticas y lugares de interés de la región.

                        Ubicado en prolongación 5ta avenida Mza 20 Lote 006 Playa del Carmen Quintana Roo 7771.</p>
                    </div>
                </div>

               
                </section>

                <section>
                    <h2>¿Y como es el plan?</h2>

                    <VentajasTodoIncluido datos={datosVentajasTodoIncluido}/>
                    
                    
                </section>

                <section className="lo-que-incluimos">
                    

                        <QueIncluye datos={datosQueIncluye}/>

                        <NoIncluye datos={datosQueIncluye}/>

                        
                        
                </section>            


            </div>
            </React.Fragment>
        )
    }
}

export default Hotel