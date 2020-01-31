import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [7] significa que es el primer hotel del archivo JSON, es decir, el hotel tower

{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.SanAndres[7].hotel}
            datosCarrusel={datosCarrusel.hotelTower}
            datosPaseos ={datosPaseos.SanAndres} 
            video = {datosHotel.SanAndres[7].video}
            subtitulo = {datosHotel.SanAndres[7].subtitulo}
            datosHotel = {datosHotel.SanAndres[7].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.SanAndres[7].ubicacion}
            dondeQueda = {datosHotel.SanAndres[7].descripcionUbicacion}
            datosQueIncluye = {datosHotel.SanAndres[7].plan}
            noIncluye = {datosHotel.SanAndres[7].noIncluye}
            fotos = {datosHotel.SanAndres[7].fotos}
            webOficial = {datosHotel.SanAndres[7].webOficial}
            tripAdvisor = {datosHotel.SanAndres[7].tripAdvisor}
            />
        )
        
    }

}

export default elHotel