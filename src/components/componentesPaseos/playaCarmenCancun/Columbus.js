import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.PlayaCarmen[9].paseo}
                    imagen = {datosPaseos.PlayaCarmen[9].imagen}
                    video = {datosPaseos.PlayaCarmen[9].video}
                    subtitulo = {datosPaseos.PlayaCarmen[9].subtitulo}
                    intro = {datosPaseos.PlayaCarmen[9].intro}
                    enlaceExt = {datosPaseos.PlayaCarmen[9].enlaceExt}
                    fisicoLogo = {datosPaseos.PlayaCarmen[9].fisicoLogo}
                    fisico = {datosPaseos.PlayaCarmen[9].fisico}
                    dificultadLogo = {datosPaseos.PlayaCarmen[9].dificultadLogo}
                    dificultad = {datosPaseos.PlayaCarmen[9].dificultad}
                    incluye = {datosPaseos.PlayaCarmen[9].incluye}
                    tips = {datosPaseos.PlayaCarmen[9].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

