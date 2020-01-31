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
            nombre = {datosHotel.SanAndres[0].hotel}
            video = {datosHotel.SanAndres[0].video}
            subtitulo = {datosHotel.SanAndres[0].subtitulo}
            ubicacion = {datosHotel.SanAndres[0].ubicacion}
            dondeQueda = {datosHotel.SanAndres[0].descripcionUbicacion}
            datosHotel = {datosHotel.SanAndres[0].caracteristicas}
            datosQueIncluye = {datosHotel.SanAndres[0].plan}
            noIncluye = {datosHotel.SanAndres[0].noIncluye}
            webOficial = {datosHotel.SanAndres[0].webOficial}
            tripAdvisor = {datosHotel.SanAndres[0].tripAdvisor}
            fotos = {datosHotel.SanAndres[0].fotos}
            datosPaseos ={datosPaseos.SanAndres} 
            datosCarrusel={datosCarrusel.acantiladoTierra}
            datosServicio = {DatosServicio.Princess}
            />
        )
        
    }

}

export default elHotel