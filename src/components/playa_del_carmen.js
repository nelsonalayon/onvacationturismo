import React from 'react' 
import 'materialize-css/dist/css/materialize.min.css'

import './playa_del_carmen.css'
import mexico from '../img/logo_mexico.png'
import Hotel from './tarjeta_hotel'

import datosHotel from './datos_tarjeta_hoteles.json'
import Paseos from './tarjeta_paseos'
import datosPaseos from './datos_paseos.json'
import queTeDetiene from '../img/queTeDetiene.svg'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

class PlayaDelCarmen extends React.Component {
    render() {
        return(

            <React.Fragment>
    
                <div className="hero ">

                    
                        <div className = "row">

                            <div className = "col s12 center-align">                            
                            <h1 className = "titulo ">Playa del<br/>
                            Carmen</h1>
                            <h3 className= "subtitulo">La riviera maya</h3>
                            </div>
                        </div>

                
                <div className="row intro">                    
                    <div className="playa-del-carmen-texto z-depth-4"><p>
                        Playa del Carmen, es uno de los destinos preferidos para vacacionar especialmente en el verando, ya que es lugar idílico situado en el corazón de la Riviera Maya con fina y blanca arena y aguas verde-azules.

                        Siempre encontrarás una hamaca y una sombrilla para tomar el sol y descansar, sobre todo a los extremos de la población que ofrecen las zonas de playa más tranquilas.

                        La ciudad es bañada por las aguas del Mar Caribe.

                        Es el lugar ideal para viajar en familia, amigos, en pareja y ¿por que no? solo. 

                        Te ofrece diferentes alternativas para que tus vacaciones sean inolvidables como disfrutar de la playa, conocer un poco más de su historia y disfrutar de la vida nocturna que ofrece

                        ¿Quieres saber mas acerca de lo que te estás perdiendo en Playa del Carmen?</p>
                        
                        <div className = "mexico">
                            <img src = {mexico} alt = "viva mexico" width = "200px" className = "mexico-hijo"/>
                            <p className = "mexico-hijo">visitmexico.com</p>
                        </div>
                        
                    </div>

                    <div>
                         <div className= "video-container ">
                        <div className="">                        
                        
                            <iframe width="auto" height ="auto"  src="https://www.youtube.com/embed/xKz9ioXMd_A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen= {true}></iframe>
                    
                        </div>
                    </div>    
                    <h4>¿Donde queda Playa del Carmen?</h4>
                    <div className ="mapa-container">
                        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119468.4239291634!2d-87.14173688047644!3d20.653777820544253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e4323d22d4e61%3A0xe8c10b783bab4adc!2sPlaya+del+Carmen%2C+Q.R.%2C+M%C3%A9xico!5e0!3m2!1ses!2sco!4v1566494099631!5m2!1ses!2sco" frameBorder="0" allowFullScreen></iframe>

                    </div>   
                    </div>

                   
                         

                </div>

                


                    <hr/>

                    <h2>Nuestros hoteles</h2>

                <div className= "hoteles">
                    <Hotel datos = {datosHotel}/>
                </div>

                     

                    <hr/>

                    <h2>¿Deseas vivir una experiencia memorable? <br/>
                        Vamos a agregar paseos a tu aventura</h2>

                    <Paseos datos = {datosPaseos}/>

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

                    <h2 className = "puntos-positivos">

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

export default PlayaDelCarmen