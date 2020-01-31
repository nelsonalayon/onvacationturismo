import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[6].paseo}
                    imagen = {datosPaseos.SanAndres[6].imagen}
                    video = {datosPaseos.SanAndres[6].video}
                    subtitulo = {datosPaseos.SanAndres[6].subtitulo}
                    intro = {datosPaseos.SanAndres[6].intro}
                    enlaceExt = {datosPaseos.SanAndres[6].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[6].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[6].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[6].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[6].dificultad}
                    incluye = {datosPaseos.SanAndres[6].incluye}
                    tips = {datosPaseos.SanAndres[6].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

