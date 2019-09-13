import React from 'react'
import ItemPago from './opcion-de-pago'
import formasDePago from './formas-de-pago.json'


class FormasDePago extends React.Component {

    render() {
        return(

            <div>
                <br/> <br/> <br/> <br/>
                <h2>Porque nuestra misión es hacer que viajes junto a tus seres queridos sin preocuparte por nada, 
                                hemos diseñado las siguientes formas de pago para que cumplas tu deseo de viajar</h2>
                                <br/> <br/> <br/>

                                <ItemPago datos = {formasDePago}/>
            </div>
           
        )
    }
}


export default FormasDePago
