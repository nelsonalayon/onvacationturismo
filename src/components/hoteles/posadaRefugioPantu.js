import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [2] significa que es el tercer hotel del archivo JSON, es decir, el refugio pantu


{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.Guajira[2].hotel}
            datosCarrusel={datosCarrusel.posadaRefugioPantu}
            datosPaseos ={datosPaseos.Guajira} 
            video = {datosHotel.Guajira[2].video}
            subtitulo = {datosHotel.Guajira[2].subtitulo}
            datosHotel = {datosHotel.Guajira[2].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Guajira[2].ubicacion}
            dondeQueda = {datosHotel.Guajira[2].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Guajira[2].plan}
            noIncluye = {datosHotel.Guajira[2].noIncluye}
            fotos = {datosHotel.Guajira[2].fotos}
            webOficial = {datosHotel.Guajira[2].webOficial}
            tripAdvisor = {datosHotel.Guajira[2].tripAdvisor}
            />
        )
        
    }

}

export default elHotel