import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[15].paseo}
                    imagen = {datosPaseos.SanAndres[15].imagen}
                    video = {datosPaseos.SanAndres[15].video}
                    subtitulo = {datosPaseos.SanAndres[15].subtitulo}
                    intro = {datosPaseos.SanAndres[15].intro}
                    enlaceExt = {datosPaseos.SanAndres[15].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[15].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[15].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[15].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[15].dificultad}
                    incluye = {datosPaseos.SanAndres[15].incluye}
                    tips = {datosPaseos.SanAndres[15].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

