import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[2].paseo}
                    imagen = {datosPaseos.SanAndres[2].imagen}
                    video = {datosPaseos.SanAndres[2].video}
                    subtitulo = {datosPaseos.SanAndres[2].subtitulo}
                    intro = {datosPaseos.SanAndres[2].intro}
                    enlaceExt = {datosPaseos.SanAndres[2].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[2].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[2].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[2].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[2].dificultad}
                    incluye = {datosPaseos.SanAndres[2].incluye}
                    tips = {datosPaseos.SanAndres[2].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

