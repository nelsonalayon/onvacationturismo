import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.Guajira[2].paseo}
                    imagen = {datosPaseos.Guajira[2].imagen}
                    video = {datosPaseos.Guajira[2].video}
                    subtitulo = {datosPaseos.Guajira[2].subtitulo}
                    intro = {datosPaseos.Guajira[2].intro}
                    enlaceExt = {datosPaseos.Guajira[2].enlaceExt}
                    fisicoLogo = {datosPaseos.Guajira[2].fisicoLogo}
                    fisico = {datosPaseos.Guajira[2].fisico}
                    dificultadLogo = {datosPaseos.Guajira[2].dificultadLogo}
                    dificultad = {datosPaseos.Guajira[2].dificultad}
                    incluye = {datosPaseos.Guajira[2].incluye}
                    tips = {datosPaseos.Guajira[2].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

