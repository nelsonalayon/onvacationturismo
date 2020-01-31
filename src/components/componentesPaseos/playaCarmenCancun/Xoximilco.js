import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.PlayaCarmen[5].paseo}
                    imagen = {datosPaseos.PlayaCarmen[5].imagen}
                    video = {datosPaseos.PlayaCarmen[5].video}
                    subtitulo = {datosPaseos.PlayaCarmen[5].subtitulo}
                    intro = {datosPaseos.PlayaCarmen[5].intro}
                    enlaceExt = {datosPaseos.PlayaCarmen[5].enlaceExt}
                    fisicoLogo = {datosPaseos.PlayaCarmen[5].fisicoLogo}
                    fisico = {datosPaseos.PlayaCarmen[5].fisico}
                    dificultadLogo = {datosPaseos.PlayaCarmen[5].dificultadLogo}
                    dificultad = {datosPaseos.PlayaCarmen[5].dificultad}
                    incluye = {datosPaseos.PlayaCarmen[5].incluye}
                    tips = {datosPaseos.PlayaCarmen[5].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

