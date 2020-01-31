import React from 'react'
import datosHotel from '../datos_tarjeta_hoteles.json'
import datosCarrusel from '../carrusel.json'
import datosPaseos from '../datos_paseos.json'
import DatosServicio from '../servicios-del-hotel.json'

import Hotel from '../hotel'

class elHotel extends React.Component

// en donde aparece [3] significa que es el cuarto hotel del archivo JSON, es decir, el hotel castillo del mar

{

    render() {
        return (
            <Hotel 
            nombre = {datosHotel.Guajira[3].hotel}
            datosCarrusel={datosCarrusel.castilloMar}
            datosPaseos ={datosPaseos.Guajira} 
            video = {datosHotel.Guajira[3].video}
            subtitulo = {datosHotel.Guajira[3].subtitulo}
            datosHotel = {datosHotel.Guajira[3].caracteristicas}
            datosServicio = {DatosServicio.Princess}
            ubicacion = {datosHotel.Guajira[3].ubicacion}
            dondeQueda = {datosHotel.Guajira[3].descripcionUbicacion}
            datosQueIncluye = {datosHotel.Guajira[3].plan}
            noIncluye = {datosHotel.Guajira[3].noIncluye}
            fotos = {datosHotel.Guajira[3].fotos}
            webOficial = {datosHotel.Guajira[3].webOficial}
            tripAdvisor = {datosHotel.Guajira[3].tripAdvisor}
            />
        )
        
    }

}

export default elHotel