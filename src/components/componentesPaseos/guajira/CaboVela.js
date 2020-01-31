import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.Guajira[1].paseo}
                    imagen = {datosPaseos.Guajira[1].imagen}
                    video = {datosPaseos.Guajira[1].video}
                    subtitulo = {datosPaseos.Guajira[1].subtitulo}
                    intro = {datosPaseos.Guajira[1].intro}
                    enlaceExt = {datosPaseos.Guajira[1].enlaceExt}
                    fisicoLogo = {datosPaseos.Guajira[1].fisicoLogo}
                    fisico = {datosPaseos.Guajira[1].fisico}
                    dificultadLogo = {datosPaseos.Guajira[1].dificultadLogo}
                    dificultad = {datosPaseos.Guajira[1].dificultad}
                    incluye = {datosPaseos.Guajira[1].incluye}
                    tips = {datosPaseos.Guajira[1].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

