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
            nombre = {datosHotel.EjeCafetero[0].hotel}
            datosCarrusel={datosCarrusel.hotelHaciendaCafetera}
            datosPaseos ={datosPaseos.EjeCafetero} 
            video = {datosHotel.EjeCafetero[0].video}
            subtitulo = {datosHotel.EjeCafetero[0].subtitulo}
            datosHotel = {datosHotel.EjeCafetero[0].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.EjeCafetero[0].ubicacion}
            dondeQueda = {datosHotel.EjeCafetero[0].descripcionUbicacion}
            datosQueIncluye = {datosHotel.EjeCafetero[0].plan}
            noIncluye = {datosHotel.EjeCafetero[0].noIncluye}
            fotos = {datosHotel.EjeCafetero[0].fotos}
            webOficial = {datosHotel.EjeCafetero[0].webOficial}
            tripAdvisor = {datosHotel.EjeCafetero[0].tripAdvisor}
            />
        )
        
    }

}

export default elHotel