import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[12].paseo}
                    imagen = {datosPaseos.SanAndres[12].imagen}
                    video = {datosPaseos.SanAndres[12].video}
                    subtitulo = {datosPaseos.SanAndres[12].subtitulo}
                    intro = {datosPaseos.SanAndres[12].intro}
                    enlaceExt = {datosPaseos.SanAndres[12].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[12].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[12].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[12].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[12].dificultad}
                    incluye = {datosPaseos.SanAndres[12].incluye}
                    tips = {datosPaseos.SanAndres[12].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

