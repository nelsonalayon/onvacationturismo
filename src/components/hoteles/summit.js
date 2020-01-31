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
            nombre = {datosHotel.Panama[2].hotel}
            datosCarrusel={datosCarrusel.summit}
            datosPaseos ={datosPaseos.Panama} 
            video = {datosHotel.Panama[2].video}
            subtitulo = {datosHotel.Panama[2].subtitulo}
            datosHotel = {datosHotel.Panama[2].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Panama[2].ubicacion}
            dondeQueda = {datosHotel.Panama[2].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Panama[2].plan}
            noIncluye = {datosHotel.Panama[2].noIncluye}
            fotos = {datosHotel.Panama[2].fotos}
            webOficial = {datosHotel.Panama[2].webOficial}
            tripAdvisor = {datosHotel.Panama[2].tripAdvisor}
            />
        )
        
    }

}

export default elHotel