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
            nombre = {datosHotel.Panama[3].hotel}
            datosCarrusel={datosCarrusel.hotelPlayaBlanca}
            datosPaseos ={datosPaseos.Panama} 
            video = {datosHotel.Panama[3].video}
            subtitulo = {datosHotel.Panama[3].subtitulo}
            datosHotel = {datosHotel.Panama[3].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Panama[3].ubicacion}
            dondeQueda = {datosHotel.Panama[3].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Panama[3].plan}
            noIncluye = {datosHotel.Panama[3].noIncluye}
            fotos = {datosHotel.Panama[3].fotos}
            webOficial = {datosHotel.Panama[3].webOficial}
            tripAdvisor = {datosHotel.Panama[3].tripAdvisor}
            />
        )
        
    }

}

export default elHotel