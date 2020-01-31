import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.PlayaCarmen[8].paseo}
                    imagen = {datosPaseos.PlayaCarmen[8].imagen}
                    video = {datosPaseos.PlayaCarmen[8].video}
                    subtitulo = {datosPaseos.PlayaCarmen[8].subtitulo}
                    intro = {datosPaseos.PlayaCarmen[8].intro}
                    enlaceExt = {datosPaseos.PlayaCarmen[8].enlaceExt}
                    fisicoLogo = {datosPaseos.PlayaCarmen[8].fisicoLogo}
                    fisico = {datosPaseos.PlayaCarmen[8].fisico}
                    dificultadLogo = {datosPaseos.PlayaCarmen[8].dificultadLogo}
                    dificultad = {datosPaseos.PlayaCarmen[8].dificultad}
                    incluye = {datosPaseos.PlayaCarmen[8].incluye}
                    tips = {datosPaseos.PlayaCarmen[8].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

