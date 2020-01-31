import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.PlayaCarmen[7].paseo}
                    imagen = {datosPaseos.PlayaCarmen[7].imagen}
                    video = {datosPaseos.PlayaCarmen[7].video}
                    subtitulo = {datosPaseos.PlayaCarmen[7].subtitulo}
                    intro = {datosPaseos.PlayaCarmen[7].intro}
                    enlaceExt = {datosPaseos.PlayaCarmen[7].enlaceExt}
                    fisicoLogo = {datosPaseos.PlayaCarmen[7].fisicoLogo}
                    fisico = {datosPaseos.PlayaCarmen[7].fisico}
                    dificultadLogo = {datosPaseos.PlayaCarmen[7].dificultadLogo}
                    dificultad = {datosPaseos.PlayaCarmen[7].dificultad}
                    incluye = {datosPaseos.PlayaCarmen[7].incluye}
                    tips = {datosPaseos.PlayaCarmen[7].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

