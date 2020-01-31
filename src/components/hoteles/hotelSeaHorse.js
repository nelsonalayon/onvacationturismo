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
            nombre = {datosHotel.SanAndres[5].hotel}
            datosCarrusel={datosCarrusel.hotelSeaHorse}
            datosPaseos ={datosPaseos.SanAndres} 
            video = {datosHotel.SanAndres[5].video}
            subtitulo = {datosHotel.SanAndres[5].subtitulo}
            datosHotel = {datosHotel.SanAndres[5].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.SanAndres[5].ubicacion}
            dondeQueda = {datosHotel.SanAndres[5].descripcionUbicacion}
            datosQueIncluye = {datosHotel.SanAndres[5].plan}
            noIncluye = {datosHotel.SanAndres[5].noIncluye}
            fotos = {datosHotel.SanAndres[5].fotos}
            webOficial = {datosHotel.SanAndres[5].webOficial}
            tripAdvisor = {datosHotel.SanAndres[5].tripAdvisor}
            />
        )
        
    }

}

export default elHotel