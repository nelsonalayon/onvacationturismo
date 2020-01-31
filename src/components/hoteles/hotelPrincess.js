import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [0] significa que es el primer hotel del archivo JSON, es decir, el hotel princess

{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.PlayaCarmen[0].hotel}
            datosCarrusel={datosCarrusel.princess}
            datosPaseos ={datosPaseos.PlayaCarmen} 
            video = {datosHotel.PlayaCarmen[0].video}
            subtitulo = {datosHotel.PlayaCarmen[0].subtitulo}
            datosHotel = {datosHotel.PlayaCarmen[0].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.PlayaCarmen[0].ubicacion}
            dondeQueda = {datosHotel.PlayaCarmen[0].descripcionUbicacion}
            datosQueIncluye = {datosHotel.PlayaCarmen[0].plan}
            noIncluye = {datosHotel.PlayaCarmen[0].noIncluye}
            fotos = {datosHotel.PlayaCarmen[0].fotos}
            webOficial = {datosHotel.PlayaCarmen[0].webOficial}
            tripAdvisor = {datosHotel.PlayaCarmen[0].tripAdvisor}
            />
        )
        
    }

}

export default elHotel