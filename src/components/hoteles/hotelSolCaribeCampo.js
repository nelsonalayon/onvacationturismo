import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [8] significa que es el primer hotel del archivo JSON, es decir, el hotel sol caribe campo

{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.SanAndres[8].hotel}
            datosCarrusel={datosCarrusel.hotelSolCaribeCampo}
            datosPaseos ={datosPaseos.SanAndres} 
            video = {datosHotel.SanAndres[8].video}
            subtitulo = {datosHotel.SanAndres[8].subtitulo}
            datosHotel = {datosHotel.SanAndres[8].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.SanAndres[8].ubicacion}
            dondeQueda = {datosHotel.SanAndres[8].descripcionUbicacion}
            datosQueIncluye = {datosHotel.SanAndres[8].plan}
            noIncluye = {datosHotel.SanAndres[8].noIncluye}
            fotos = {datosHotel.SanAndres[8].fotos}
            webOficial = {datosHotel.SanAndres[8].webOficial}
            tripAdvisor = {datosHotel.SanAndres[8].tripAdvisor}
            />
        )
        
    }

}

export default elHotel