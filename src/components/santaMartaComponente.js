import React from 'react'
import Destino from './destino'
import datosHotel from './datos_tarjeta_hoteles.json'
import datosPaseos from './datos_paseos.json'

function SantaMarta() {

    return (
        <Destino numero = "6" datosHotel={datosHotel.SantaMarta} datosPaseos = {datosPaseos.SantaMarta} />
    )

}

export default SantaMarta