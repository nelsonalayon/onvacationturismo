import React from 'react' 
import 'materialize-css/dist/css/materialize.min.css'

import './playa_del_carmen.css'
import mexico from '../img/logo_mexico.png'
import Hotel from './tarjeta_hotel'

import datosHotel from './datos_tarjeta_hoteles.json'
import Paseos from './tarjeta_paseos'

import queTeDetiene from '../img/queTeDetiene.svg'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import datosDestino from './datos_tarjetas_destino.json'

class Guajira extends React.Component {
    render() {

        let divStyle = {backgroundImage: `url(${datosDestino[0].imagen})`}
        return(

            <React.Fragment>
    
                <div className="hero " style = {divStyle} >

                    
                        <div className = "row">

                            <div className = "col s12 center-align">                            
                            <h1 className = "titulo ">{datosDestino[0].nombre}</h1>
                            <h3 className= "subtitulo">{datosDestino[0].slogan}</h3>
                            </div>
                        </div>

                
                <div className="row intro">                    
                    <div className="playa-del-carmen-texto z-depth-4"><p>
                        {datosDestino[0].descripcion}</p>
                        
                        <div className = "mexico">
                            <a href = {datosDestino[0].link_externo} target = "blank">
                            <img src = {datosDestino[0].imagen_link_externo}/>
                            <p className = "mexico-hijo">{datosDestino[0].texto_link_externo}</p>
                            </a>
                        </div>
                        
                    </div>

                    <div>
                         <div className= "video-container ">
                        <div className="">                        
                        
                            <iframe title = "mapa" width="auto" height ="auto"  src={datosDestino[0].video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen= {true}></iframe>
                    
                        </div>
                    </div>    
                    <h4>¿Donde queda {datosDestino[0].nombre}?</h4>
                    <div className ="mapa-container">
                        <iframe className="google-map" src={datosDestino[0].ubicacion} frameBorder="0" allowFullScreen></iframe>

                    </div>   
                    </div>                        

                </div>
                
                    <hr/>

                    <h2>Nuestros hoteles</h2>

                <div className= "hoteles">
                    <Hotel datos = {datosHotel.Guajira}/>
                </div>

                     

                    <hr/>

                    <h2>¿Deseas vivir una experiencia memorable? <br/>
                        Vamos a agregar paseos a tu aventura</h2>

                    <Paseos datos = {datosPaseos.Guajira}/>

                    <div className="hero espectacular">
                        <h2 className = "titulo-blanco">Espectacular, ¿cierto?<br/>
                        Ahora, ¿como hacemos la reserva? </h2>
                    
                        <div className="playa-del-carmen-texto z-depth-4 center-align">
                            <p>Es sencillo, solamente son necesarios los datos del siguiente formulario, y una vez la reserva esté montada yo a su correo electrónico o a su whatsapp les envio el número de reserva para que usted pueda pagarlo de acuerdo a las muchas formas de pago que ofrecemos.  </p>
                            <a className="waves-effect waves-light btn" href ="#"> Formulario </a>   
                        </div> 
                    </div>
                    <div className="hero espectacular">
                        <h2 className = "titulo-blanco">Solamente necesitas querer 
                                vivir una aventura, Nosotros nos 
                                encargamos de facilitarte todo </h2>

                        <div className="playa-del-carmen-texto z-depth-4 center-align">
                            <p>Muchas veces desistimos de vivir momentos inolvidables de descanso o aventura solamente porque creemos que no nos lo merecemos, o porque no consultamos a nuestro asesor de confianza las formas que tenemos para financiar nuestras vacaciones. Mira en el siguiente enlace todas las opciones disponibles que tenemos para financiarte las vaciones para que no tengas ninguna razón para negarte esas vacaciones que tanto deseas  </p>
                            <Link  className="waves-effect waves-light btn" to ="/pagos" > Formas de pago </Link>   
                        </div> 
                    </div>

                <div className=" center-align">

                    <h2 className = "puntos-positivos container">

                        Planes todo incluido para que tu única preocupación sea que tipo de bebida tomar o que playa visitar <br/><br/>

                        facilidades increibles de pago para no preocuparte por dinero en tu paseo <br/><br/>

                        Asesoria constante profesional y personalizada para que estés seguro y viajes sin contratiempos <br/><br/>

                        Destinos paradisiacos a precios insuperables <br/><br/><br/>

                        ...
        
                    </h2>
                
                    <figure className="que-te-detiene">
                        <img className="imagen-que-te-detiene" src = {queTeDetiene} alt = "¿Que te detiene?"></img>
                    </figure>

                    </div>
                </div>

            </React.Fragment>
           
        )
    }
}

export default Guajira