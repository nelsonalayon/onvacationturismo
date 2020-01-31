import React from 'react'

import Hotel from './tarjeta_hotel'
import datosHotel from './datos_tarjeta_hoteles.json'



class ListaDeHoteles extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h1 className="destino">Playa del Carmen</h1>

                <div className= "hoteles container">
                    <Hotel datos = {datosHotel.PlayaCarmen}/>
                </div>

                <h1 className="destino">Guajira</h1>

                <div className= "hoteles container">
                    <Hotel datos = {datosHotel.Guajira}/>
                </div>

                <h1 className="destino">San Andrés</h1>

                <div className= "hoteles container">
                    <Hotel datos = {datosHotel.SanAndres}/>
                </div>

                <h1 className="destino">Eje Cafetero</h1>

                <div className= "hoteles container">
                    <Hotel datos = {datosHotel.EjeCafetero}/>
                </div>

                <h1 className="destino">Amazonas</h1>

                <div className= "hoteles container">
                    <Hotel datos = {datosHotel.Amazonas}/>
                </div>

                <h1 className="destino">Girardot</h1>

                <div className= "hoteles container">
                    <Hotel datos = {datosHotel.Girardot}/>
                </div>

                <h1 className="destino">Santa Marta</h1>

                <div className= "hoteles container">
                    <Hotel datos = {datosHotel.SantaMarta}/>
                </div>

                <h1 className="destino">Cancún</h1>

                <div className= "hoteles container">
                    <Hotel datos = {datosHotel.Cancun}/>
                </div>

                <h1 className="destino">Curazao</h1>

                <div className= "hoteles container">
                    <Hotel datos = {datosHotel.Curacao}/>
                </div>

                <h1 className="destino">Panamá</h1>

                <div className= "hoteles container">
                    <Hotel datos = {datosHotel.Panama}/>
                </div>

            </React.Fragment>
            

            
        )
    }
}

export default ListaDeHoteles