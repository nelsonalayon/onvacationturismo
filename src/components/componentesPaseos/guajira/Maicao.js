import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.Guajira[3].paseo}
                    imagen = {datosPaseos.Guajira[3].imagen}
                    video = {datosPaseos.Guajira[3].video}
                    subtitulo = {datosPaseos.Guajira[3].subtitulo}
                    intro = {datosPaseos.Guajira[3].intro}
                    enlaceExt = {datosPaseos.Guajira[3].enlaceExt}
                    fisicoLogo = {datosPaseos.Guajira[3].fisicoLogo}
                    fisico = {datosPaseos.Guajira[3].fisico}
                    dificultadLogo = {datosPaseos.Guajira[3].dificultadLogo}
                    dificultad = {datosPaseos.Guajira[3].dificultad}
                    incluye = {datosPaseos.Guajira[3].incluye}
                    tips = {datosPaseos.Guajira[3].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

