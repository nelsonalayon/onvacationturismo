import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.PlayaCarmen[2].paseo}
                    imagen = {datosPaseos.PlayaCarmen[2].imagen}
                    video = {datosPaseos.PlayaCarmen[2].video}
                    subtitulo = {datosPaseos.PlayaCarmen[2].subtitulo}
                    intro = {datosPaseos.PlayaCarmen[2].intro}
                    enlaceExt = {datosPaseos.PlayaCarmen[2].enlaceExt}
                    fisicoLogo = {datosPaseos.PlayaCarmen[2].fisicoLogo}
                    fisico = {datosPaseos.PlayaCarmen[2].fisico}
                    dificultadLogo = {datosPaseos.PlayaCarmen[2].dificultadLogo}
                    dificultad = {datosPaseos.PlayaCarmen[2].dificultad}
                    incluye = {datosPaseos.PlayaCarmen[2].incluye}
                    tips = {datosPaseos.PlayaCarmen[2].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

