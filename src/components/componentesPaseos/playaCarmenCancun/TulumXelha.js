import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.PlayaCarmen[4].paseo}
                    imagen = {datosPaseos.PlayaCarmen[4].imagen}
                    video = {datosPaseos.PlayaCarmen[4].video}
                    subtitulo = {datosPaseos.PlayaCarmen[4].subtitulo}
                    intro = {datosPaseos.PlayaCarmen[4].intro}
                    enlaceExt = {datosPaseos.PlayaCarmen[4].enlaceExt}
                    fisicoLogo = {datosPaseos.PlayaCarmen[4].fisicoLogo}
                    fisico = {datosPaseos.PlayaCarmen[4].fisico}
                    dificultadLogo = {datosPaseos.PlayaCarmen[4].dificultadLogo}
                    dificultad = {datosPaseos.PlayaCarmen[4].dificultad}
                    incluye = {datosPaseos.PlayaCarmen[4].incluye}
                    tips = {datosPaseos.PlayaCarmen[4].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

