import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.SanAndres[17].paseo}
                    imagen = {datosPaseos.SanAndres[17].imagen}
                    video = {datosPaseos.SanAndres[17].video}
                    subtitulo = {datosPaseos.SanAndres[17].subtitulo}
                    intro = {datosPaseos.SanAndres[17].intro}
                    enlaceExt = {datosPaseos.SanAndres[17].enlaceExt}
                    fisicoLogo = {datosPaseos.SanAndres[17].fisicoLogo}
                    fisico = {datosPaseos.SanAndres[17].fisico}
                    dificultadLogo = {datosPaseos.SanAndres[17].dificultadLogo}
                    dificultad = {datosPaseos.SanAndres[17].dificultad}
                    incluye = {datosPaseos.SanAndres[17].incluye}
                    tips = {datosPaseos.SanAndres[17].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

