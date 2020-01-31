import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [3] significa que es el primer hotel del archivo JSON, es decir, el hotel cove

{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.SanAndres[3].hotel}
            datosCarrusel={datosCarrusel.hotelCove}
            datosPaseos ={datosPaseos.SanAndres} 
            video = {datosHotel.SanAndres[3].video}
            subtitulo = {datosHotel.SanAndres[3].subtitulo}
            datosHotel = {datosHotel.SanAndres[3].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.SanAndres[3].ubicacion}
            dondeQueda = {datosHotel.SanAndres[3].descripcionUbicacion}
            datosQueIncluye = {datosHotel.SanAndres[3].plan}
            noIncluye = {datosHotel.SanAndres[3].noIncluye}
            fotos = {datosHotel.SanAndres[3].fotos}
            webOficial = {datosHotel.SanAndres[3].webOficial}
            tripAdvisor = {datosHotel.SanAndres[3].tripAdvisor}
            />
        )
        
    }

}

export default elHotel