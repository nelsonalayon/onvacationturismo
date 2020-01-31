import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[5].paseo}
                    imagen = {datosPaseos.SanAndres[5].imagen}
                    video = {datosPaseos.SanAndres[5].video}
                    subtitulo = {datosPaseos.SanAndres[5].subtitulo}
                    intro = {datosPaseos.SanAndres[5].intro}
                    enlaceExt = {datosPaseos.SanAndres[5].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[5].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[5].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[5].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[5].dificultad}
                    incluye = {datosPaseos.SanAndres[5].incluye}
                    tips = {datosPaseos.SanAndres[5].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

