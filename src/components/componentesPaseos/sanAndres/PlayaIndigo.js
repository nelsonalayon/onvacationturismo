import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[19].paseo}
                    imagen = {datosPaseos.SanAndres[19].imagen}
                    video = {datosPaseos.SanAndres[19].video}
                    subtitulo = {datosPaseos.SanAndres[19].subtitulo}
                    intro = {datosPaseos.SanAndres[19].intro}
                    enlaceExt = {datosPaseos.SanAndres[19].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[19].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[19].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[19].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[19].dificultad}
                    incluye = {datosPaseos.SanAndres[19].incluye}
                    tips = {datosPaseos.SanAndres[19].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

