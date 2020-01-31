import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.Amazonas[1].paseo}
                    imagen = {datosPaseos.Amazonas[1].imagen}
                    video = {datosPaseos.Amazonas[1].video}
                    subtitulo = {datosPaseos.Amazonas[1].subtitulo}
                    intro = {datosPaseos.Amazonas[1].intro}
                    enlaceExt = {datosPaseos.Amazonas[1].enlaceExt}
                    fisicoLogo = {datosPaseos.Amazonas[1].fisicoLogo}
                    fisico = {datosPaseos.Amazonas[1].fisico}
                    dificultadLogo = {datosPaseos.Amazonas[1].dificultadLogo}
                    dificultad = {datosPaseos.Amazonas[1].dificultad}
                    incluye = {datosPaseos.Amazonas[1].incluye}
                    tips = {datosPaseos.Amazonas[1].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

