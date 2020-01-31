import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[4].paseo}
                    imagen = {datosPaseos.SanAndres[4].imagen}
                    video = {datosPaseos.SanAndres[4].video}
                    subtitulo = {datosPaseos.SanAndres[4].subtitulo}
                    intro = {datosPaseos.SanAndres[4].intro}
                    enlaceExt = {datosPaseos.SanAndres[4].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[4].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[4].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[4].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[4].dificultad}
                    incluye = {datosPaseos.SanAndres[4].incluye}
                    tips = {datosPaseos.SanAndres[4].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

