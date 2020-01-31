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
            nombre = {datosHotel.Cancun[0].hotel}
            datosCarrusel={datosCarrusel.HotelDosPlayas}
            datosPaseos ={datosPaseos.Cancun} 
            video = {datosHotel.Cancun[0].video}
            subtitulo = {datosHotel.Cancun[0].subtitulo}
            datosHotel = {datosHotel.Cancun[0].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Cancun[0].ubicacion}
            dondeQueda = {datosHotel.Cancun[0].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Cancun[0].plan}
            noIncluye = {datosHotel.Cancun[0].noIncluye}
            fotos = {datosHotel.Cancun[0].fotos}
            webOficial = {datosHotel.Cancun[0].webOficial}
            tripAdvisor = {datosHotel.Cancun[0].tripAdvisor}
            />
        )
        
    }

}

export default elHotel