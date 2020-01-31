import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.PlayaCarmen[6].paseo}
                    imagen = {datosPaseos.PlayaCarmen[6].imagen}
                    video = {datosPaseos.PlayaCarmen[6].video}
                    subtitulo = {datosPaseos.PlayaCarmen[6].subtitulo}
                    intro = {datosPaseos.PlayaCarmen[6].intro}
                    enlaceExt = {datosPaseos.PlayaCarmen[6].enlaceExt}
                    fisicoLogo = {datosPaseos.PlayaCarmen[6].fisicoLogo}
                    fisico = {datosPaseos.PlayaCarmen[6].fisico}
                    dificultadLogo = {datosPaseos.PlayaCarmen[6].dificultadLogo}
                    dificultad = {datosPaseos.PlayaCarmen[6].dificultad}
                    incluye = {datosPaseos.PlayaCarmen[6].incluye}
                    tips = {datosPaseos.PlayaCarmen[6].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

