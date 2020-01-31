import React from 'react'
import Destino from './destino'
import datosHotel from './datos_tarjeta_hoteles.json'
import datosPaseos from './datos_paseos.json'

function Amazonas() {

    return (
        <Destino numero = "4" datosHotel={datosHotel.Amazonas} datosPaseos = {datosPaseos.Amazonas} />
    )

}

export default Amazonas