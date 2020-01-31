import React from 'react' 

class Servicios extends React.Component{
    render() {
        return(
            <ul className="collapsible container">

                {
                    this.props.datos.map(
                        (servicio) => {
                            return(
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">{servicio.icono}</i>{servicio.servicio}</div>
                                    <div className="collapsible-body"><span>{servicio.info}</span></div>
                                </li>
                            )
                        }
                    )
                }
                       
            </ul>
        )
    }
}

export default Servicios