import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[18].paseo}
                    imagen = {datosPaseos.SanAndres[18].imagen}
                    video = {datosPaseos.SanAndres[18].video}
                    subtitulo = {datosPaseos.SanAndres[18].subtitulo}
                    intro = {datosPaseos.SanAndres[18].intro}
                    enlaceExt = {datosPaseos.SanAndres[18].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[18].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[18].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[18].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[18].dificultad}
                    incluye = {datosPaseos.SanAndres[18].incluye}
                    tips = {datosPaseos.SanAndres[18].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

