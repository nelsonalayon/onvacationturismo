import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[0].paseo}
                    imagen = {datosPaseos.SanAndres[0].imagen}
                    video = {datosPaseos.SanAndres[0].video}
                    subtitulo = {datosPaseos.SanAndres[0].subtitulo}
                    intro = {datosPaseos.SanAndres[0].intro}
                    enlaceExt = {datosPaseos.SanAndres[0].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[0].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[0].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[0].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[0].dificultad}
                    incluye = {datosPaseos.SanAndres[0].incluye}
                    tips = {datosPaseos.SanAndres[0].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

