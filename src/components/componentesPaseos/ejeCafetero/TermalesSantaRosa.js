import React from 'react'
import Paseos from '../../paseos'
import datosPaseos from '../../datos_paseos.json'

class ItemPaseo extends React.Component{
    render() {
        return(

            <React.Fragment>
                <Paseos
                    titulo = {datosPaseos.EjeCafetero[6].paseo}
                    imagen = {datosPaseos.EjeCafetero[6].imagen}
                    video = {datosPaseos.EjeCafetero[6].video}
                    subtitulo = {datosPaseos.EjeCafetero[6].subtitulo}
                    intro = {datosPaseos.EjeCafetero[6].intro}
                    enlaceExt = {datosPaseos.EjeCafetero[6].enlaceExt}
                    fisicoLogo = {datosPaseos.EjeCafetero[6].fisicoLogo}
                    fisico = {datosPaseos.EjeCafetero[6].fisico}
                    dificultadLogo = {datosPaseos.EjeCafetero[6].dificultadLogo}
                    dificultad = {datosPaseos.EjeCafetero[6].dificultad}
                    incluye = {datosPaseos.EjeCafetero[6].incluye}
                    tips = {datosPaseos.EjeCafetero[6].tips}
                />
                
            </React.Fragment>
            

        )
    }
}

export default ItemPaseo

