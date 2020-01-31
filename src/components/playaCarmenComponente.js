import React from 'react'
import Destino from './destino'
import datosHotel from './datos_tarjeta_hoteles.json'
import datosPaseos from './datos_paseos.json'

function PlayaCarmen() {

    return (
        <Destino numero = "2" datosHotel={datosHotel.PlayaCarmen} datosPaseos = {datosPaseos.PlayaCarmen} />
    )

}

export default PlayaCarmen