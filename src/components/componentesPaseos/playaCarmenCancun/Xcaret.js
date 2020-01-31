import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.PlayaCarmen[3].paseo}
                    imagen = {datosPaseos.PlayaCarmen[3].imagen}
                    video = {datosPaseos.PlayaCarmen[3].video}
                    subtitulo = {datosPaseos.PlayaCarmen[3].subtitulo}
                    intro = {datosPaseos.PlayaCarmen[3].intro}
                    enlaceExt = {datosPaseos.PlayaCarmen[3].enlaceExt}
                    fisicoLogo = {datosPaseos.PlayaCarmen[3].fisicoLogo}
                    fisico = {datosPaseos.PlayaCarmen[3].fisico}
                    dificultadLogo = {datosPaseos.PlayaCarmen[3].dificultadLogo}
                    dificultad = {datosPaseos.PlayaCarmen[3].dificultad}
                    incluye = {datosPaseos.PlayaCarmen[3].incluye}
                    tips = {datosPaseos.PlayaCarmen[3].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

