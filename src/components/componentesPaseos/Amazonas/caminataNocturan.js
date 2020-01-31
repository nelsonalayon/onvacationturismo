import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.Amazonas[3].paseo}
                    imagen = {datosPaseos.Amazonas[3].imagen}
                    video = {datosPaseos.Amazonas[3].video}
                    subtitulo = {datosPaseos.Amazonas[3].subtitulo}
                    intro = {datosPaseos.Amazonas[3].intro}
                    enlaceExt = {datosPaseos.Amazonas[3].enlaceExt}
                    fisicoLogo = {datosPaseos.Amazonas[3].fisicoLogo}
                    fisico = {datosPaseos.Amazonas[3].fisico}
                    dificultadLogo = {datosPaseos.Amazonas[3].dificultadLogo}
                    dificultad = {datosPaseos.Amazonas[3].dificultad}
                    incluye = {datosPaseos.Amazonas[3].incluye}
                    tips = {datosPaseos.Amazonas[3].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

