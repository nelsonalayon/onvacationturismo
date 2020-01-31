import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.Guajira[0].paseo}
                    imagen = {datosPaseos.Guajira[0].imagen}
                    video = {datosPaseos.Guajira[0].video}
                    subtitulo = {datosPaseos.Guajira[0].subtitulo}
                    intro = {datosPaseos.Guajira[0].intro}
                    enlaceExt = {datosPaseos.Guajira[0].enlaceExt}
                    fisicoLogo = {datosPaseos.Guajira[0].fisicoLogo}
                    fisico = {datosPaseos.Guajira[0].fisico}
                    dificultadLogo = {datosPaseos.Guajira[0].dificultadLogo}
                    dificultad = {datosPaseos.Guajira[0].dificultad}
                    incluye = {datosPaseos.Guajira[0].incluye}
                    tips = {datosPaseos.Guajira[0].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

