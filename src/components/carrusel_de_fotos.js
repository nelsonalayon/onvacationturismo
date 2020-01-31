import React from 'react' 
import Hotel from './tarjeta_hotel'

// los estilos css los toma de Hotel.css


class Carrusel extends React.Component{  
   
    render() {
        return(
            <div className="carousel carousel-slider carrusel-hoteles">

                {
                    this.props.datos.map(  
                        (objeto) => {

                            return(
                                 <div className="carousel-item" href="#one!">

                                    <div className="contenedor-titulo-hotel">
                                                            
                                        <h1 className="titular-hero-hotel">
                                            <span>{objeto.subtitulo} </span> 
                                            <br/> <br/>
                                            {objeto.titulo}
                                        </h1>
                                    </div>
                    
                                    <img className="imagenes-del-hero" src={objeto.imagen} />
                    
                                </div>
                            )
                            
                           
                        }
                     ) 
                      
                }

            </div>    
        )
    }
}

export default Carrusel