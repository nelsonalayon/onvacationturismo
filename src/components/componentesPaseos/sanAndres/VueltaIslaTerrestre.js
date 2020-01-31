import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[16].paseo}
                    imagen = {datosPaseos.SanAndres[16].imagen}
                    video = {datosPaseos.SanAndres[16].video}
                    subtitulo = {datosPaseos.SanAndres[16].subtitulo}
                    intro = {datosPaseos.SanAndres[16].intro}
                    enlaceExt = {datosPaseos.SanAndres[16].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[16].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[16].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[16].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[16].dificultad}
                    incluye = {datosPaseos.SanAndres[16].incluye}
                    tips = {datosPaseos.SanAndres[16].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

