import React from 'react'
import Destino from './destino'
import datosHotel from './datos_tarjeta_hoteles.json'
import datosPaseos from './datos_paseos.json'

function Guajira() {

    return (
        <Destino numero = "0" datosHotel={datosHotel.Guajira} datosPaseos = {datosPaseos.Guajira} />
    )

}

export default Guajira