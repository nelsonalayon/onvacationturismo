import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.Amazonas[0].paseo}
                    imagen = {datosPaseos.Amazonas[0].imagen}
                    video = {datosPaseos.Amazonas[0].video}
                    subtitulo = {datosPaseos.Amazonas[0].subtitulo}
                    intro = {datosPaseos.Amazonas[0].intro}
                    enlaceExt = {datosPaseos.Amazonas[0].enlaceExt}
                    fisicoLogo = {datosPaseos.Amazonas[0].fisicoLogo}
                    fisico = {datosPaseos.Amazonas[0].fisico}
                    dificultadLogo = {datosPaseos.Amazonas[0].dificultadLogo}
                    dificultad = {datosPaseos.Amazonas[0].dificultad}
                    incluye = {datosPaseos.Amazonas[0].incluye}
                    tips = {datosPaseos.Amazonas[0].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

