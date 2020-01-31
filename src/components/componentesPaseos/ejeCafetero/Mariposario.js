import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.EjeCafetero[3].paseo}
                    imagen = {datosPaseos.EjeCafetero[3].imagen}
                    video = {datosPaseos.EjeCafetero[3].video}
                    subtitulo = {datosPaseos.EjeCafetero[3].subtitulo}
                    intro = {datosPaseos.EjeCafetero[3].intro}
                    enlaceExt = {datosPaseos.EjeCafetero[3].enlaceExt}
                    fisicoLogo = {datosPaseos.EjeCafetero[3].fisicoLogo}
                    fisico = {datosPaseos.EjeCafetero[3].fisico}
                    dificultadLogo = {datosPaseos.EjeCafetero[3].dificultadLogo}
                    dificultad = {datosPaseos.EjeCafetero[3].dificultad}
                    incluye = {datosPaseos.EjeCafetero[3].incluye}
                    tips = {datosPaseos.EjeCafetero[3].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

