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
            nombre = {datosHotel.PlayaCarmen[1].hotel}
            datosCarrusel={datosCarrusel.hotelTukan}
            datosPaseos ={datosPaseos.PlayaCarmen} 
            video = {datosHotel.PlayaCarmen[1].video}
            subtitulo = {datosHotel.PlayaCarmen[1].subtitulo}
            datosHotel = {datosHotel.PlayaCarmen[1].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.PlayaCarmen[1].ubicacion}
            dondeQueda = {datosHotel.PlayaCarmen[1].descripcionUbicacion}
            datosQueIncluye = {datosHotel.PlayaCarmen[1].plan}
            noIncluye = {datosHotel.PlayaCarmen[1].noIncluye}
            fotos = {datosHotel.PlayaCarmen[1].fotos}
            webOficial = {datosHotel.PlayaCarmen[1].webOficial}
            tripAdvisor = {datosHotel.PlayaCarmen[1].tripAdvisor}
            />
        )
        
    }

}

export default elHotel