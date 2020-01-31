import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.Amazonas[2].paseo}
                    imagen = {datosPaseos.Amazonas[2].imagen}
                    video = {datosPaseos.Amazonas[2].video}
                    subtitulo = {datosPaseos.Amazonas[2].subtitulo}
                    intro = {datosPaseos.Amazonas[2].intro}
                    enlaceExt = {datosPaseos.Amazonas[2].enlaceExt}
                    fisicoLogo = {datosPaseos.Amazonas[2].fisicoLogo}
                    fisico = {datosPaseos.Amazonas[2].fisico}
                    dificultadLogo = {datosPaseos.Amazonas[2].dificultadLogo}
                    dificultad = {datosPaseos.Amazonas[2].dificultad}
                    incluye = {datosPaseos.Amazonas[2].incluye}
                    tips = {datosPaseos.Amazonas[2].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

