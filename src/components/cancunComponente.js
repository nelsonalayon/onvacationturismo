import React from 'react'
import Destino from './destino'
import datosHotel from './datos_tarjeta_hoteles.json'
import datosPaseos from './datos_paseos.json'

function Cancun() {

    return (
        <Destino numero = "7" datosHotel={datosHotel.Cancun} datosPaseos = {datosPaseos.Cancun} />
    )

}

export default Cancun