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
            nombre = {datosHotel.Curacao[2].hotel}
            datosCarrusel={datosCarrusel.hotelCuracaoMarriot}
            datosPaseos ={datosPaseos.Curacao} 
            video = {datosHotel.Curacao[2].video}
            subtitulo = {datosHotel.Curacao[2].subtitulo}
            datosHotel = {datosHotel.Curacao[2].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Curacao[2].ubicacion}
            dondeQueda = {datosHotel.Curacao[2].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Curacao[2].plan}
            noIncluye = {datosHotel.Curacao[2].noIncluye}
            fotos = {datosHotel.Curacao[2].fotos}
            webOficial = {datosHotel.Curacao[2].webOficial}
            tripAdvisor = {datosHotel.Curacao[2].tripAdvisor}
            />
        )
        
    }

}

export default elHotel