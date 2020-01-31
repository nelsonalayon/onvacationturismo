import React from 'react'
import Destino from './destino'
import datosHotel from './datos_tarjeta_hoteles.json'
import datosPaseos from './datos_paseos.json'

function SanAndres() {

    return (
        <Destino numero = "1" datosHotel={datosHotel.SanAndres} datosPaseos = {datosPaseos.SanAndres} />
    )

}

export default SanAndres