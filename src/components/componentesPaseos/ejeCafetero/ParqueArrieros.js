import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.EjeCafetero[4].paseo}
                    imagen = {datosPaseos.EjeCafetero[4].imagen}
                    video = {datosPaseos.EjeCafetero[4].video}
                    subtitulo = {datosPaseos.EjeCafetero[4].subtitulo}
                    intro = {datosPaseos.EjeCafetero[4].intro}
                    enlaceExt = {datosPaseos.EjeCafetero[4].enlaceExt}
                    fisicoLogo = {datosPaseos.EjeCafetero[4].fisicoLogo}
                    fisico = {datosPaseos.EjeCafetero[4].fisico}
                    dificultadLogo = {datosPaseos.EjeCafetero[4].dificultadLogo}
                    dificultad = {datosPaseos.EjeCafetero[4].dificultad}
                    incluye = {datosPaseos.EjeCafetero[4].incluye}
                    tips = {datosPaseos.EjeCafetero[4].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

