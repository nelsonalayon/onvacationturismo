import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[14].paseo}
                    imagen = {datosPaseos.SanAndres[14].imagen}
                    video = {datosPaseos.SanAndres[14].video}
                    subtitulo = {datosPaseos.SanAndres[14].subtitulo}
                    intro = {datosPaseos.SanAndres[14].intro}
                    enlaceExt = {datosPaseos.SanAndres[14].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[14].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[14].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[14].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[14].dificultad}
                    incluye = {datosPaseos.SanAndres[14].incluye}
                    tips = {datosPaseos.SanAndres[14].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

