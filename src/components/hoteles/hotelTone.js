import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [6] significa que es el primer hotel del archivo JSON, es decir, el hotel tone

{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.SanAndres[6].hotel}
            datosCarrusel={datosCarrusel.hotelTone}
            datosPaseos ={datosPaseos.SanAndres} 
            video = {datosHotel.SanAndres[6].video}
            subtitulo = {datosHotel.SanAndres[6].subtitulo}
            datosHotel = {datosHotel.SanAndres[6].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.SanAndres[6].ubicacion}
            dondeQueda = {datosHotel.SanAndres[6].descripcionUbicacion}
            datosQueIncluye = {datosHotel.SanAndres[6].plan}
            noIncluye = {datosHotel.SanAndres[6].noIncluye}
            fotos = {datosHotel.SanAndres[6].fotos}
            webOficial = {datosHotel.SanAndres[6].webOficial}
            tripAdvisor = {datosHotel.SanAndres[6].tripAdvisor}
            />
        )
        
    }

}

export default elHotel