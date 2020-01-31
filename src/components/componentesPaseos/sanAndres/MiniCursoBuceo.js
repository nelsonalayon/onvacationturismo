import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[11].paseo}
                    imagen = {datosPaseos.SanAndres[11].imagen}
                    video = {datosPaseos.SanAndres[11].video}
                    subtitulo = {datosPaseos.SanAndres[11].subtitulo}
                    intro = {datosPaseos.SanAndres[11].intro}
                    enlaceExt = {datosPaseos.SanAndres[11].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[11].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[11].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[11].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[11].dificultad}
                    incluye = {datosPaseos.SanAndres[11].incluye}
                    tips = {datosPaseos.SanAndres[11].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

