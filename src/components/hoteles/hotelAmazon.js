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
            nombre = {datosHotel.Amazonas[0].hotel}
            datosCarrusel={datosCarrusel.hotelAmazon}
            datosPaseos ={datosPaseos.Amazonas} 
            video = {datosHotel.Amazonas[0].video}
            subtitulo = {datosHotel.Amazonas[0].subtitulo}
            datosHotel = {datosHotel.Amazonas[0].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Amazonas[0].ubicacion}
            dondeQueda = {datosHotel.Amazonas[0].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Amazonas[0].plan}
            noIncluye = {datosHotel.Amazonas[0].noIncluye}
            fotos = {datosHotel.Amazonas[0].fotos}
            webOficial = {datosHotel.Amazonas[0].webOficial}
            tripAdvisor = {datosHotel.Amazonas[0].tripAdvisor}
            />
        )
        
    }

}

export default elHotel