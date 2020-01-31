import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.EjeCafetero[5].paseo}
                    imagen = {datosPaseos.EjeCafetero[5].imagen}
                    video = {datosPaseos.EjeCafetero[5].video}
                    subtitulo = {datosPaseos.EjeCafetero[5].subtitulo}
                    intro = {datosPaseos.EjeCafetero[5].intro}
                    enlaceExt = {datosPaseos.EjeCafetero[5].enlaceExt}
                    fisicoLogo = {datosPaseos.EjeCafetero[5].fisicoLogo}
                    fisico = {datosPaseos.EjeCafetero[5].fisico}
                    dificultadLogo = {datosPaseos.EjeCafetero[5].dificultadLogo}
                    dificultad = {datosPaseos.EjeCafetero[5].dificultad}
                    incluye = {datosPaseos.EjeCafetero[5].incluye}
                    tips = {datosPaseos.EjeCafetero[5].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

