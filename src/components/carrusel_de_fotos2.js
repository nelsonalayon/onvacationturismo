import React from 'react' 
import './hotel.css'


class Carrusel extends React.Component{  
   
    render() {
        return(
            <div className="carousel carousel-slider carrusel2 ">

                {
                    this.props.datos.map(  
                        (objeto) => {

                            return(
                                 <div className="carousel-item" href="#one!">
                               
                    
                             <img className="imagenes-del-hero" src={objeto} />

                             
                    
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