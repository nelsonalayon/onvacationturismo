import React from 'react'

class Incluye extends React.Component {
    
    render() {
        return( <section className="incluye container">

        <ul className="collection with-header">
            <li className="collection-header"><h4>Incluye</h4></li>
            {
                this.props.datos.map(
                    (itemIncluye) => {
                        return (                          
                            <li className="collection-item">{itemIncluye}</li>
                         ) 
                 }
                )        
            }
    
        </ul>

    </section>)
    }
}

export default Incluye



