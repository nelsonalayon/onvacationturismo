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
            nombre = {datosHotel.Panama[1].hotel}
            datosCarrusel={datosCarrusel.sheratonBijaoBeachResort}
            datosPaseos ={datosPaseos.Panama} 
            video = {datosHotel.Panama[1].video}
            subtitulo = {datosHotel.Panama[1].subtitulo}
            datosHotel = {datosHotel.Panama[1].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Panama[1].ubicacion}
            dondeQueda = {datosHotel.Panama[1].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Panama[1].plan}
            noIncluye = {datosHotel.Panama[1].noIncluye}
            fotos = {datosHotel.Panama[1].fotos}
            webOficial = {datosHotel.Panama[1].webOficial}
            tripAdvisor = {datosHotel.Panama[1].tripAdvisor}
            />
        )
        
    }

}

export default elHotel