import React from 'react'
import Destino from './destino'
import datosHotel from './datos_tarjeta_hoteles.json'
import datosPaseos from './datos_paseos.json'

function Curacao() {

    return (
        <Destino numero = "8" datosHotel={datosHotel.Curacao} datosPaseos = {datosPaseos.Curacao} />
    )

}

export default Curacao