import React from 'react'
import Destino from './destino'
import datosHotel from './datos_tarjeta_hoteles.json'
import datosPaseos from './datos_paseos.json'

function Panama() {

    return (
        <Destino numero = "9" datosHotel={datosHotel.Panama} datosPaseos = {datosPaseos.Panama} />
    )

}

export default Panama