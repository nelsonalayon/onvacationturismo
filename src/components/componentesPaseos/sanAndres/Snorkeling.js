import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[10].paseo}
                    imagen = {datosPaseos.SanAndres[10].imagen}
                    video = {datosPaseos.SanAndres[10].video}
                    subtitulo = {datosPaseos.SanAndres[10].subtitulo}
                    intro = {datosPaseos.SanAndres[10].intro}
                    enlaceExt = {datosPaseos.SanAndres[10].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[10].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[10].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[10].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[10].dificultad}
                    incluye = {datosPaseos.SanAndres[10].incluye}
                    tips = {datosPaseos.SanAndres[10].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

