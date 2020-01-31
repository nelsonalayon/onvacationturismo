import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.EjeCafetero[1].paseo}
                    imagen = {datosPaseos.EjeCafetero[1].imagen}
                    video = {datosPaseos.EjeCafetero[1].video}
                    subtitulo = {datosPaseos.EjeCafetero[1].subtitulo}
                    intro = {datosPaseos.EjeCafetero[1].intro}
                    enlaceExt = {datosPaseos.EjeCafetero[1].enlaceExt}
                    fisicoLogo = {datosPaseos.EjeCafetero[1].fisicoLogo}
                    fisico = {datosPaseos.EjeCafetero[1].fisico}
                    dificultadLogo = {datosPaseos.EjeCafetero[1].dificultadLogo}
                    dificultad = {datosPaseos.EjeCafetero[1].dificultad}
                    incluye = {datosPaseos.EjeCafetero[1].incluye}
                    tips = {datosPaseos.EjeCafetero[1].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

