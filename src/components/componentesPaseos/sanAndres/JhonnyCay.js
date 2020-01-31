import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[7].paseo}
                    imagen = {datosPaseos.SanAndres[7].imagen}
                    video = {datosPaseos.SanAndres[7].video}
                    subtitulo = {datosPaseos.SanAndres[7].subtitulo}
                    intro = {datosPaseos.SanAndres[7].intro}
                    enlaceExt = {datosPaseos.SanAndres[7].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[7].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[7].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[7].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[7].dificultad}
                    incluye = {datosPaseos.SanAndres[7].incluye}
                    tips = {datosPaseos.SanAndres[7].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

