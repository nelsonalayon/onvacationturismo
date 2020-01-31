import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[8].paseo}
                    imagen = {datosPaseos.SanAndres[8].imagen}
                    video = {datosPaseos.SanAndres[8].video}
                    subtitulo = {datosPaseos.SanAndres[8].subtitulo}
                    intro = {datosPaseos.SanAndres[8].intro}
                    enlaceExt = {datosPaseos.SanAndres[8].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[8].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[8].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[8].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[8].dificultad}
                    incluye = {datosPaseos.SanAndres[8].incluye}
                    tips = {datosPaseos.SanAndres[8].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

