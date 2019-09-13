import React from 'react'
import './que-incluye.css'

class QueIncluye extends React.Component{
    render(){
        return(
             <ul className="collection row container">
                 <h2>Qué incluye nuestro viaje 
                        a Playa del Cármen</h2>
                {this.props.datos.Princess.map(
                    (incluye) => {
                        return(
                           
                            <li className="collection-item avatar col s12 l4">
                                <div className="paraponerpadding">
                                
                              <img src={incluye.imagen} alt="" className="circle "/>
                              <h6 className="paseo">{incluye.paseo}</h6>
                              <span className="title">{incluye.titulo}</span>                             
                               </div>
                            </li>
                           
                        )
                    }
                )}  
              </ul>  
            


        )
    }
}

export default QueIncluye