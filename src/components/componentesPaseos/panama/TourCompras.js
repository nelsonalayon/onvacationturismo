import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.PlayaCarmen[0].paseo}
                    imagen = {datosPaseos.PlayaCarmen[0].imagen}
                    video = {datosPaseos.PlayaCarmen[0].video}
                    subtitulo = {datosPaseos.PlayaCarmen[0].subtitulo}
                    intro = {datosPaseos.PlayaCarmen[0].intro}
                    enlaceExt = {datosPaseos.PlayaCarmen[0].enlaceExt}
                    fisicoLogo = {datosPaseos.PlayaCarmen[0].fisicoLogo}
                    fisico = {datosPaseos.PlayaCarmen[0].fisico}
                    dificultadLogo = {datosPaseos.PlayaCarmen[0].dificultadLogo}
                    dificultad = {datosPaseos.PlayaCarmen[0].dificultad}
                    incluye = {datosPaseos.PlayaCarmen[0].incluye}
                    tips = {datosPaseos.PlayaCarmen[0].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

