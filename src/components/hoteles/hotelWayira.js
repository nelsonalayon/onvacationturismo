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
            nombre = {datosHotel.Guajira[0].hotel}
            video = {datosHotel.Guajira[0].video}
            subtitulo = {datosHotel.Guajira[0].subtitulo}
            datosHotel = {datosHotel.Guajira[0].caracteristicas}
            ubicacion = {datosHotel.Guajira[0].ubicacion}
            dondeQueda = {datosHotel.Guajira[0].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Guajira[0].plan}
            noIncluye = {datosHotel.Guajira[0].noIncluye}
            fotos = {datosHotel.Guajira[0].fotos}
            webOficial = {datosHotel.Guajira[0].webOficial}
            tripAdvisor = {datosHotel.Guajira[0].tripAdvisor}
            datosServicio = {DatosServicio.Princess}
            datosCarrusel={datosCarrusel.hotelWayira}
            datosPaseos ={datosPaseos.PlayaCarmen} 
            />
        )
        
    }

}

export default elHotel