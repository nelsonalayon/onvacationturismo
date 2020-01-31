import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.EjeCafetero[0].paseo}
                    imagen = {datosPaseos.EjeCafetero[0].imagen}
                    video = {datosPaseos.EjeCafetero[0].video}
                    subtitulo = {datosPaseos.EjeCafetero[0].subtitulo}
                    intro = {datosPaseos.EjeCafetero[0].intro}
                    enlaceExt = {datosPaseos.EjeCafetero[0].enlaceExt}
                    fisicoLogo = {datosPaseos.EjeCafetero[0].fisicoLogo}
                    fisico = {datosPaseos.EjeCafetero[0].fisico}
                    dificultadLogo = {datosPaseos.EjeCafetero[0].dificultadLogo}
                    dificultad = {datosPaseos.EjeCafetero[0].dificultad}
                    incluye = {datosPaseos.EjeCafetero[0].incluye}
                    tips = {datosPaseos.EjeCafetero[0].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

