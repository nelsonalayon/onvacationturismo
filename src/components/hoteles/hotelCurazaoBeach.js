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
            nombre = {datosHotel.Curacao[0].hotel}
            datosCarrusel={datosCarrusel.hotelCurazaoBeach}
            datosPaseos ={datosPaseos.Curacao} 
            video = {datosHotel.Curacao[0].video}
            subtitulo = {datosHotel.Curacao[0].subtitulo}
            datosHotel = {datosHotel.Curacao[0].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Curacao[0].ubicacion}
            dondeQueda = {datosHotel.Curacao[0].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Curacao[0].plan}
            noIncluye = {datosHotel.Curacao[0].noIncluye}
            fotos = {datosHotel.Curacao[0].fotos}
            webOficial = {datosHotel.Curacao[0].webOficial}
            tripAdvisor = {datosHotel.Curacao[0].tripAdvisor}
            />
        )
        
    }

}

export default elHotel