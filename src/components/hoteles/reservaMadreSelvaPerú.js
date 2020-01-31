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
            nombre = {datosHotel.Amazonas[1].hotel}
            datosCarrusel={datosCarrusel.reservaMadreSelvaPeru}
            datosPaseos ={datosPaseos.Amazonas} 
            video = {datosHotel.Amazonas[1].video}
            subtitulo = {datosHotel.Amazonas[1].subtitulo}
            datosHotel = {datosHotel.Amazonas[1].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Amazonas[1].ubicacion}
            dondeQueda = {datosHotel.Amazonas[1].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Amazonas[1].plan}
            noIncluye = {datosHotel.Amazonas[1].noIncluye}
            fotos = {datosHotel.Amazonas[1].fotos}
            webOficial = {datosHotel.Amazonas[1].webOficial}
            tripAdvisor = {datosHotel.Amazonas[1].tripAdvisor}
            />
        )
        
    }

}

export default elHotel