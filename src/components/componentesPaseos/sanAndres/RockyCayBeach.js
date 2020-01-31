import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[9].paseo}
                    imagen = {datosPaseos.SanAndres[9].imagen}
                    video = {datosPaseos.SanAndres[9].video}
                    subtitulo = {datosPaseos.SanAndres[9].subtitulo}
                    intro = {datosPaseos.SanAndres[9].intro}
                    enlaceExt = {datosPaseos.SanAndres[9].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[9].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[9].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[9].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[9].dificultad}
                    incluye = {datosPaseos.SanAndres[9].incluye}
                    tips = {datosPaseos.SanAndres[9].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

