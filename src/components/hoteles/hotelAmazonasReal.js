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
            nombre = {datosHotel.Amazonas[2].hotel}
            datosCarrusel={datosCarrusel.hotelAmazonasReal}
            datosPaseos ={datosPaseos.Amazonas} 
            video = {datosHotel.Amazonas[2].video}
            subtitulo = {datosHotel.Amazonas[2].subtitulo}
            datosHotel = {datosHotel.Amazonas[2].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Amazonas[2].ubicacion}
            dondeQueda = {datosHotel.Amazonas[2].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Amazonas[2].plan}
            noIncluye = {datosHotel.Amazonas[2].noIncluye}
            fotos = {datosHotel.Amazonas[2].fotos}
            webOficial = {datosHotel.Amazonas[2].webOficial}
            tripAdvisor = {datosHotel.Amazonas[2].tripAdvisor}
            />
        )
        
    }

}

export default elHotel