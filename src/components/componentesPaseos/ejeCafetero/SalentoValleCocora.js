import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.EjeCafetero[9].paseo}
                    imagen = {datosPaseos.EjeCafetero[9].imagen}
                    video = {datosPaseos.EjeCafetero[9].video}
                    subtitulo = {datosPaseos.EjeCafetero[9].subtitulo}
                    intro = {datosPaseos.EjeCafetero[9].intro}
                    enlaceExt = {datosPaseos.EjeCafetero[9].enlaceExt}
                    fisicoLogo = {datosPaseos.EjeCafetero[9].fisicoLogo}
                    fisico = {datosPaseos.EjeCafetero[9].fisico}
                    dificultadLogo = {datosPaseos.EjeCafetero[9].dificultadLogo}
                    dificultad = {datosPaseos.EjeCafetero[9].dificultad}
                    incluye = {datosPaseos.EjeCafetero[9].incluye}
                    tips = {datosPaseos.EjeCafetero[9].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

