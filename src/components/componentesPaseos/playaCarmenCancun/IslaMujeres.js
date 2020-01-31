import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                
                <Paseos
                    titulo = {datosPaseos.PlayaCarmen[1].paseo}
                    imagen = {datosPaseos.PlayaCarmen[1].imagen}
                    video = {datosPaseos.PlayaCarmen[1].video}
                    subtitulo = {datosPaseos.PlayaCarmen[1].subtitulo}
                    intro = {datosPaseos.PlayaCarmen[1].intro}
                    enlaceExt = {datosPaseos.PlayaCarmen[1].enlaceExt}
                    fisicoLogo = {datosPaseos.PlayaCarmen[1].fisicoLogo}
                    fisico = {datosPaseos.PlayaCarmen[1].fisico}
                    dificultadLogo = {datosPaseos.PlayaCarmen[1].dificultadLogo}
                    dificultad = {datosPaseos.PlayaCarmen[1].dificultad}
                    incluye = {datosPaseos.PlayaCarmen[1].incluye}
                    tips = {datosPaseos.PlayaCarmen[1].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

