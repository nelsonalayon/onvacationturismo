import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [1] significa que es el primer hotel del archivo JSON, es decir, el hotel blue reef


{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.SanAndres[1].hotel}
            datosCarrusel={datosCarrusel.hotelBlueReef}
            datosPaseos ={datosPaseos.SanAndres} 
            video = {datosHotel.SanAndres[1].video}
            subtitulo = {datosHotel.SanAndres[1].subtitulo}
            datosHotel = {datosHotel.SanAndres[1].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.SanAndres[1].ubicacion}
            dondeQueda = {datosHotel.SanAndres[1].descripcionUbicacion}
            datosQueIncluye = {datosHotel.SanAndres[1].plan}
            noIncluye = {datosHotel.SanAndres[1].noIncluye}
            fotos = {datosHotel.SanAndres[1].fotos}
            webOficial = {datosHotel.SanAndres[1].webOficial}
            tripAdvisor = {datosHotel.SanAndres[1].tripAdvisor}
            />
        )
        
    }

}

export default elHotel