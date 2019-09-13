import React from 'react' 
import './muestra-de-paseos.css'


class MuestraHotel extends React.Component {

   

    render() {
        return(
          
            <div className="row container"> 
            {
              this.props.datos.PlayaCarmen.map(
              (tarjeta) => {

                          

                if (tarjeta.id <= 2){
                  return(
                    
                      <div className="col s12 l4 hoverable">
                        <div className="card">
                          <div className="card-image">
                            <a href="#">
                              <img src={tarjeta.imagen} alt={tarjeta.paseo} height="300px" width="auto"/>
                            <span className="card-title">{tarjeta.paseo}</span>
                            </a>
                            
                          </div>                          
                         
                        </div>
                      </div>
                    
                    )         
                  } 

            }  
              
    
              )
            
          }
          </div>
        )    

}
}

export default MuestraHotel

