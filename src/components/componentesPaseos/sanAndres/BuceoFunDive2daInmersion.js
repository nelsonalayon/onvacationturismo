import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[1].paseo}
                    imagen = {datosPaseos.SanAndres[1].imagen}
                    video = {datosPaseos.SanAndres[1].video}
                    subtitulo = {datosPaseos.SanAndres[1].subtitulo}
                    intro = {datosPaseos.SanAndres[1].intro}
                    enlaceExt = {datosPaseos.SanAndres[1].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[1].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[1].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[1].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[1].dificultad}
                    incluye = {datosPaseos.SanAndres[1].incluye}
                    tips = {datosPaseos.SanAndres[1].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

