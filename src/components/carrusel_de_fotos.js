import React from 'react' 

class Carrusel extends React.Component{
    render() {
        return(
            <div className="carousel carousel-slider carrusel-hoteles">

                {
                    this.props.datos.playaCarmen.map(  
                        (objeto) => {

                            return(
                                 <div className="carousel-item" href="#one!">

                                <div className="contenedor-titulo-hotel">
                                                          
                                <h1 className="titular-hero-hotel">
                                <span>{objeto.subtitulo} </span> 
                                <br/>
                                {objeto.titulo}</h1>
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