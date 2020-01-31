import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[13].paseo}
                    imagen = {datosPaseos.SanAndres[13].imagen}
                    video = {datosPaseos.SanAndres[13].video}
                    subtitulo = {datosPaseos.SanAndres[13].subtitulo}
                    intro = {datosPaseos.SanAndres[13].intro}
                    enlaceExt = {datosPaseos.SanAndres[13].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[13].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[13].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[13].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[13].dificultad}
                    incluye = {datosPaseos.SanAndres[13].incluye}
                    tips = {datosPaseos.SanAndres[13].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

