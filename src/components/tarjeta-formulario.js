import React from 'react' 


class TarjetaFormulario extends React.Component {
    render() {
        return(
            <div key= "1">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="https://www.nopuedocreer.com/wp-content/images/2009/06/bicho_malo_2.jpg" alt = "imagen del hotel"/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4"><strong>{this.props.datos.nombre || "pon tu nombre"}</strong><i className="material-icons right">more_vert</i></span>
                                    <p><a href="/hotel">{this.props.datos.Ciudad || "ciudad de residencia"}</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">{this.props.datos.Direccion || "pon tu dirección"}<i className="material-icons right">close</i></span>
                                    <p>{this.props.datos.Telefono || "pon tu telefono"}</p>
                                </div>
                            </div>
        )
    }
}

export default TarjetaFormulario