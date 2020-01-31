import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [2] significa que es el primer hotel del archivo JSON, es decir, el hotel caribbean

{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.SanAndres[2].hotel}
            datosCarrusel={datosCarrusel.HotelCaribbean}
            datosPaseos ={datosPaseos.SanAndres} 
            video = {datosHotel.SanAndres[2].video}
            subtitulo = {datosHotel.SanAndres[2].subtitulo}
            datosHotel = {datosHotel.SanAndres[2].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.SanAndres[2].ubicacion}
            dondeQueda = {datosHotel.SanAndres[2].descripcionUbicacion}
            datosQueIncluye = {datosHotel.SanAndres[2].plan}
            noIncluye = {datosHotel.SanAndres[2].noIncluye}
            fotos = {datosHotel.SanAndres[2].fotos}
            webOficial = {datosHotel.SanAndres[2].webOficial}
            tripAdvisor = {datosHotel.SanAndres[2].tripAdvisor}
            />
        )
        
    }

}

export default elHotel