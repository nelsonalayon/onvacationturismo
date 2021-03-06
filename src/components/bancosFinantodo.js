import React from 'react'
import './bancos.css'
import 'materialize-css/dist/css/materialize.min.css'
import imagenPagaYa from '../img/tenga-mi-plata.png'
import imagenReservaYa from '../img/sin-billete.png'
class OpcionDePago extends React.Component {

    render() {

    
    return(

        <div className="container">
            
            {this.props.datos.finantodo.map(
                (tipoDePago) => {
                    return (
                       

                        <div className = "caja-opcion-banco" key= {tipoDePago.id}>
            

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
                enableBackground="new 600 370 80 60" 
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
                <div className="caja-del-dibujo-banco" >

                    <div className="simbolo-banco">

                        <img src = {tipoDePago.foto} alt={tipoDePago.nombreBanco}/>
                    </div>

                    <div className="datos-banco">

                        
                          <h5> {tipoDePago.cuenta}</h5> <br/>
                          <h5> {tipoDePago.nombreCuenta}</h5> <br/>                          
                    </div>

                    
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