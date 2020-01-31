import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './hotel.css'

import Paseos from './muestra-de-paseos'

import Carrusel from './carrusel_de_fotos'
import Carrusel2 from './carrusel_de_fotos2'
import Servicios from './servicios_del_hotel'
import VentajasTodoIncluido from './ventajas_todo_incluido'
import datosVentajasTodoIncluido from './ventajas_del_todo_incluido.json'
import QueIncluye from './que-incluye'
import NoIncluye from './noIncluye'
import CaracteristicasHotel from './caracteristicasHotel'

import PieHotel from './PieHoteles'

class Hotel extends React.Component {

 
    render() {
        return(
            <React.Fragment>
                <Carrusel datos={this.props.datosCarrusel}/>

            <div className="fotos-iniciales row" >
                                
                    <Paseos datos = {this.props.datosPaseos}/>
                
                <div className="col l12 s12 center-align">
                    <a className="waves-effect waves-light btn-small" >Mas paseos</a>
                </div>
            </div>

            <div>
                <div className="row container" >
                    <div className="col s12 l6">
                    <Carrusel2  datos={this.props.fotos}/>
                        {/* <img width="80%" src = "https://www.princess-hotels.com/sites/default/files/styles/porlets_servicios_hotel/public/actividades%20ni%C3%B1os_1.jpg?itok=Ghwk6Ke9"/> */}
                        <iframe width="100%" height="300px" src={this.props.video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div>

                    <div className="col s12 l6">
                        <h3>{this.props.subtitulo}</h3>
                        <CaracteristicasHotel datosHotel = {this.props.datosHotel}/>                         

                    </div>

                </div>
               
                <section>
                    <h2>Servicios del Hotel</h2>
                     <Servicios datos= {this.props.datosServicio}/>
                </section>

                <section>
                <h2>Donde queda el hotel</h2>

                <div className="row">
                    <div className="col s12 l6">
                        <iframe title="ubicacion" src={this.props.ubicacion} width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>
                    </div>

                    <div className="col s12 l6">
                        {/* Uso el siguiente componente para describir la ubicacion del hotel */}
                    <CaracteristicasHotel datosHotel = {this.props.dondeQueda}/>
                        
                    </div>
                </div>

               
                </section>

                <section>
                    <h2>¿Y como es el plan?</h2>

                    <VentajasTodoIncluido datos={datosVentajasTodoIncluido}/>
                    
                    
                </section>

                <section className="lo-que-incluimos">

                <h2>Qué incluye nuestro viaje a {this.props.nombre}</h2>
                    

                        <QueIncluye datos={this.props.datosQueIncluye}/>

                        <NoIncluye datos={this.props.noIncluye}/>                        
                        
                </section>    
                <section>
                    <PieHotel webOficial= {this.props.webOficial} tripAdvisor={this.props.tripAdvisor}/>
                </section>
            </div>
            </React.Fragment>
        )
    }
}

export default Hotel