import React from 'react' 
import './hotel.css'


class Caracteristicas extends React.Component{  
   
    render() {
        return(
            <div>

                {
                    this.props.datosHotel.map(  
                        (objeto) => {

                            return(
                                <div className = "descripcion-hotel">
                                    <p>                               
                    
                                        {objeto}
                    
                                    </p>

                            </div>
                            )
                            
                           
                        }
                     ) 
                      
                }

            </div>    
        )
    }
}

export default Caracteristicas