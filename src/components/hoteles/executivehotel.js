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
            nombre = {datosHotel.Panama[0].hotel}
            datosCarrusel={datosCarrusel.executivehotel}
            datosPaseos ={datosPaseos.Panama} 
            video = {datosHotel.Panama[0].video}
            subtitulo = {datosHotel.Panama[0].subtitulo}
            datosHotel = {datosHotel.Panama[0].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Panama[0].ubicacion}
            dondeQueda = {datosHotel.Panama[0].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Panama[0].plan}
            noIncluye = {datosHotel.Panama[0].noIncluye}
            fotos = {datosHotel.Panama[0].fotos}
            webOficial = {datosHotel.Panama[0].webOficial}
            tripAdvisor = {datosHotel.Panama[0].tripAdvisor}
            />
        )
        
    }

}

export default elHotel