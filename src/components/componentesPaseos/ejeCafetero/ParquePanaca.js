import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.EjeCafetero[7].paseo}
                    imagen = {datosPaseos.EjeCafetero[7].imagen}
                    video = {datosPaseos.EjeCafetero[7].video}
                    subtitulo = {datosPaseos.EjeCafetero[7].subtitulo}
                    intro = {datosPaseos.EjeCafetero[7].intro}
                    enlaceExt = {datosPaseos.EjeCafetero[7].enlaceExt}
                    fisicoLogo = {datosPaseos.EjeCafetero[7].fisicoLogo}
                    fisico = {datosPaseos.EjeCafetero[7].fisico}
                    dificultadLogo = {datosPaseos.EjeCafetero[7].dificultadLogo}
                    dificultad = {datosPaseos.EjeCafetero[7].dificultad}
                    incluye = {datosPaseos.EjeCafetero[7].incluye}
                    tips = {datosPaseos.EjeCafetero[7].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

