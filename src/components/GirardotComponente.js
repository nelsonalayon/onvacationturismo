import React from 'react'
import Destino from './destino'
import datosHotel from './datos_tarjeta_hoteles.json'
import datosPaseos from './datos_paseos.json'

function Girardot() {

    return (
        <Destino numero = "5" datosHotel={datosHotel.Girardot} datosPaseos = {datosPaseos.Girardot} />
    )

}

export default Girardot