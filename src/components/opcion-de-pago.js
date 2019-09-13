import React from 'react'
import './opcion-de-pago.css'
import 'materialize-css/dist/css/materialize.min.css'
import imagenPagaYa from '../img/tenga-mi-plata.png'
import imagenReservaYa from '../img/sin-billete.png'



class OpcionDePago extends React.Component {

    render() {

    
    return(

        <div className="container">
            
            {this.props.datos.map(
                (tipoDePago) => {
                    return (

                        <div className = "caja-opcion">
            

            <div className="">
                <div className="opcion ">
                <svg className="rectangulo"
                version="1.1" 
                id="Capa_1" 
                xmlns="http://www.w3.org/2000/svg"              
                x="0px" 
                y="0px"
                width="80px" 
                height="60px" 
                viewBox="600 370 80 60" 
                enable-background="new 600 370 80 60" 
                >
                    <polygon 
                    fill="#B0BEC5" 
                    points="661.436,430 600,430 600,370 680,370 680,412.242 "/>
                    
                </svg>
                <div></div>
                <p>Opción</p>
                <hr className="lineablanca"/>
                <h3 className="opcion-numero">{tipoDePago.id}</h3>
            </div>
                <div className="contenido">
                     <b>{tipoDePago.situacion}</b>
                    <a href="#" className="waves-effect waves-light btn-large red darken-1">{tipoDePago.tipodepago}</a>
                </div>
                
            </div>

            <div className="caja-del-dibujo">

                <img src = {tipoDePago.imagen}/>

            </div>    
           

        </div>
                    )
                }
            )}
           

        

        </div>   
    )
}
}

export default OpcionDePago