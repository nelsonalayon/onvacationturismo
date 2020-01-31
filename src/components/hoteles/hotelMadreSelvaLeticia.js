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
            nombre = {datosHotel.Amazonas[3].hotel}
            datosCarrusel={datosCarrusel.hotelMadreSelvaLeticia}
            datosPaseos ={datosPaseos.Amazonas} 
            video = {datosHotel.Amazonas[3].video}
            subtitulo = {datosHotel.Amazonas[3].subtitulo}
            datosHotel = {datosHotel.Amazonas[3].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Amazonas[3].ubicacion}
            dondeQueda = {datosHotel.Amazonas[3].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Amazonas[3].plan}
            noIncluye = {datosHotel.Amazonas[3].noIncluye}
            fotos = {datosHotel.Amazonas[3].fotos}
            webOficial = {datosHotel.Amazonas[3].webOficial}
            tripAdvisor = {datosHotel.Amazonas[3].tripAdvisor}
            />
        )
        
    }

}

export default elHotel