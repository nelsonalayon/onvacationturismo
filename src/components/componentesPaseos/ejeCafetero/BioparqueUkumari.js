import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.EjeCafetero[2].paseo}
                    imagen = {datosPaseos.EjeCafetero[2].imagen}
                    video = {datosPaseos.EjeCafetero[2].video}
                    subtitulo = {datosPaseos.EjeCafetero[2].subtitulo}
                    intro = {datosPaseos.EjeCafetero[2].intro}
                    enlaceExt = {datosPaseos.EjeCafetero[2].enlaceExt}
                    fisicoLogo = {datosPaseos.EjeCafetero[2].fisicoLogo}
                    fisico = {datosPaseos.EjeCafetero[2].fisico}
                    dificultadLogo = {datosPaseos.EjeCafetero[2].dificultadLogo}
                    dificultad = {datosPaseos.EjeCafetero[2].dificultad}
                    incluye = {datosPaseos.EjeCafetero[2].incluye}
                    tips = {datosPaseos.EjeCafetero[2].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

