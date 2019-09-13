import React from 'react'
import './bancos.css'
import 'materialize-css/dist/css/materialize.min.css'
import imagenPagaYa from '../img/tenga-mi-plata.png'
import imagenReservaYa from '../img/sin-billete.png'



class OpcionDePago extends React.Component {

    render() {

    
    return(

        <div className="container">
            
            {this.props.datos.bancos.map(
                (tipoDePago) => {
                    return (

                        <div className = "caja-opcion-banco">
            

            <div className="">
                <div className="opcion-banco ">
                <svg className="rectangulo-banco"
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
                <hr className="lineablanca-banco"/>
                <h3 className="opcion-numero-banco">{tipoDePago.id}</h3>
            </div>
                <div className="caja-del-dibujo-banco">

                                <img src = {tipoDePago.imagen}/>

                

                </div>   
                
                
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