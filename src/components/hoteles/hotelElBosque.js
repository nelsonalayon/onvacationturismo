import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [1] significa que es el segundo hotel del archivo JSON, es decir, el hotel el bosque

{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.Guajira[1].hotel}
            datosPaseos ={datosPaseos.Guajira} 
            video = {datosHotel.Guajira[1].video}
            subtitulo = {datosHotel.Guajira[1].subtitulo}
            datosHotel = {datosHotel.Guajira[1].caracteristicas}
            ubicacion = {datosHotel.Guajira[1].ubicacion}
            dondeQueda = {datosHotel.Guajira[1].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Guajira[1].plan}
            noIncluye = {datosHotel.Guajira[1].noIncluye}
            fotos = {datosHotel.Guajira[1].fotos}
            webOficial = {datosHotel.Guajira[1].webOficial}
            tripAdvisor = {datosHotel.Guajira[1].tripAdvisor}
            datosServicio = {DatosServicio.Princess}
            datosCarrusel={datosCarrusel.HotelElBosque}
            />
        )
        
    }

}

export default elHotel