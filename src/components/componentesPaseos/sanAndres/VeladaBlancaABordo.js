import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[3].paseo}
                    imagen = {datosPaseos.SanAndres[3].imagen}
                    video = {datosPaseos.SanAndres[3].video}
                    subtitulo = {datosPaseos.SanAndres[3].subtitulo}
                    intro = {datosPaseos.SanAndres[3].intro}
                    enlaceExt = {datosPaseos.SanAndres[3].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[3].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[3].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[3].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[3].dificultad}
                    incluye = {datosPaseos.SanAndres[3].incluye}
                    tips = {datosPaseos.SanAndres[3].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

