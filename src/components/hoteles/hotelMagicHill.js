import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [4] significa que es el primer hotel del archivo JSON, es decir, el hotel Magic hill

{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.SanAndres[4].hotel}
            datosCarrusel={datosCarrusel.hotelMagicHill}
            datosPaseos ={datosPaseos.SanAndres} 
            video = {datosHotel.SanAndres[4].video}
            subtitulo = {datosHotel.SanAndres[4].subtitulo}
            datosHotel = {datosHotel.SanAndres[4].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.SanAndres[4].ubicacion}
            dondeQueda = {datosHotel.SanAndres[4].descripcionUbicacion}
            datosQueIncluye = {datosHotel.SanAndres[4].plan}
            noIncluye = {datosHotel.SanAndres[4].noIncluye}
            fotos = {datosHotel.SanAndres[4].fotos}
            webOficial = {datosHotel.SanAndres[4].webOficial}
            tripAdvisor = {datosHotel.SanAndres[4].tripAdvisor}
            />
        )
        
    }

}

export default elHotel