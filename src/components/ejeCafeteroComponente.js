import React from 'react'
import Destino from './destino'
import datosHotel from './datos_tarjeta_hoteles.json'
import datosPaseos from './datos_paseos.json'

function EjeCafetero() {

    return (
        <Destino numero = "3" datosHotel={datosHotel.EjeCafetero} datosPaseos = {datosPaseos.EjeCafetero} />
    )

}

export default EjeCafetero