import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.EjeCafetero[8].paseo}
                    imagen = {datosPaseos.EjeCafetero[8].imagen}
                    video = {datosPaseos.EjeCafetero[8].video}
                    subtitulo = {datosPaseos.EjeCafetero[8].subtitulo}
                    intro = {datosPaseos.EjeCafetero[8].intro}
                    enlaceExt = {datosPaseos.EjeCafetero[8].enlaceExt}
                    fisicoLogo = {datosPaseos.EjeCafetero[8].fisicoLogo}
                    fisico = {datosPaseos.EjeCafetero[8].fisico}
                    dificultadLogo = {datosPaseos.EjeCafetero[8].dificultadLogo}
                    dificultad = {datosPaseos.EjeCafetero[8].dificultad}
                    incluye = {datosPaseos.EjeCafetero[8].incluye}
                    tips = {datosPaseos.EjeCafetero[8].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

