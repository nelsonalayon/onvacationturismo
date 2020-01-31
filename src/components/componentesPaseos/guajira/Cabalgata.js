import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.Guajira[4].paseo}
                    imagen = {datosPaseos.Guajira[4].imagen}
                    video = {datosPaseos.Guajira[4].video}
                    subtitulo = {datosPaseos.Guajira[4].subtitulo}
                    intro = {datosPaseos.Guajira[4].intro}
                    enlaceExt = {datosPaseos.Guajira[4].enlaceExt}
                    fisicoLogo = {datosPaseos.Guajira[4].fisicoLogo}
                    fisico = {datosPaseos.Guajira[4].fisico}
                    dificultadLogo = {datosPaseos.Guajira[4].dificultadLogo}
                    dificultad = {datosPaseos.Guajira[4].dificultad}
                    incluye = {datosPaseos.Guajira[4].incluye}
                    tips = {datosPaseos.Guajira[4].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

