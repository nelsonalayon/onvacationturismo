import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Bancos from './bancos'
import Finantodo from './bancosFinantodo'
import datosBancos from './bancos.json'
import './paga-ya.css'

import Ventajas from './ventajas-finantodo'
import datosVentajas from './ventajas-finantodo.json'
import ventajasFlexi from './ventajas-flexiprogramada.json'

class PagaYa extends React.Component {
    render() {
        return(
            <div>
                <section className="encabezado-formas-de-pago">                    

                         <h1 className="titulo">Flexiprogramada</h1>             
                
                </section>
                <section className="row container " >
                    <div className="explicacion-de-pago col s12 l12 ">
                        <div className="textos">
                            <h4>Todos los años queremos viajar en familia pero nunca
                                 programamos nada y terminamos yendo cada uno por su cuenta a cualquier lado o simplemente nos quedamos en casa.
                            </h4>
                        </div>   <figure className="foto-viajera col s12 m4 l4">
                            <img src="https://image.freepik.com/vector-gratis/hombre-negocios-dice-que-vale_1012-177.jpg"/>
                        </figure>
                    </div>
                   

                </section>
                <section>

                    <div className="solucion">
                            <p>
                            Con On Vacation usted puede desde YA empezar a programas sus vacaciones abonando desde tan solo 30.000 pesos....
                            </p>
                    </div>                

                    <div className="como-financiar-vacaciones">
                        <h2>¡Que bien!, ¿pero qué debo hacer?</h2>

                    </div>

                    <div  className="solucion">
                        <p>Es muy sencillo, On Vacation ofrece varios planes de ahorro para que usted vaya ahorrando mensualmente y una vez usted haya decidido fecha,
                            destino y con quien va a viajar, pueda usar ese dinero que está ahorrando para concretar su reserva.  
                            Estos son los planes que ofrece On Vacation para que usted vaya ahorrando</p>
                    </div>  
                </section>  

                <section>
                    <table className="striped container">
                        <thead>
                            <tr>
                                <th>A cuantos meses</th>
                                <th>Cuanto pago mensualmente</th>
                                <th>Cuanto ahorraré al terminar el plan</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>12</td>
                                <td>$ 30.000</td>
                                <td>$ 360.000</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>$ 50.000</td>
                                <td>$ 600.000</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>$ 100.000</td>
                                <td>$ 1.200.000</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>$ 150.000</td>
                                <td>$ 1.800.000</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>$ 200.000</td>
                                <td>$ 2.400.000</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>$ 250.000</td>
                                <td>$ 3.000.000</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>$ 30.000</td>
                                <td>$ 540.000</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>$ 50.000</td>
                                <td>$ 900.000</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>$ 100.000</td>
                                <td>$ 1.800.000</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>$ 150.000</td>
                                <td>$ 2.700.000</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>$ 200.000</td>
                                <td>$ 3.600.000</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>$ 250.000</td>
                                <td>$ 4.500.000</td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td>$ 30.000</td>
                                <td>$720.000</td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td>$ 50.000</td>
                                <td>$ 1.200.000</td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td>$ 100.000</td>
                                <td>$ 2.400.000</td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td>$ 150.000</td>
                                <td>$ 3.600.000</td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td>$ 200.000</td>
                                <td>$ 4.800.000</td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td>$ 250.000</td>
                                <td>$ 6.000.000</td>
                            </tr>

                        </tbody>
                    </table>

                    <div  className="solucion">
                        <p>Cuando usted escoja cuanto dinero y a cuantos meses desea abonar a sus vacaciones, hacemos una reserva
                             normal pero sin fecha, ni destino ni pasajeros.  Una vez hecha la reserva a su correo va a llegar un
                              contrato virtual y va a recibir una llamada de nuestro call center para confirmar todos los datos 
                              de la reserva.</p>
                    </div>      
                        
                </section>            
                        
                    
             

            <section>
                <h2 className="container">Cuales son las condiciones del plan Flexiprogramada</h2>

                <div className="explicacion-de-pago">
                    <div className="textos">
                        <ol>
                        <li>El dinero abonado en el plan Flexiprogramadas puede usarse para hacer una reserva desde los 3 meses de haberse hecho el contrato.</li>
                        <li>Cada plan Flexiprogramada está destinado a convertirse en una reserva. No se pueden sumar dos o mas planes Flexiprogramada a una sola reserva. Cada plan Flexiprogramada corresponde a una reserva.</li>
                        <li>Mensualmente no se va a cobrar ni cuotas de manejo ni iva. Sin embargo, si usted se atrasa en sus abonos mas de 2 meses, se le genera un cobro mensual de $28.000 pesos </li>
                        </ol>
                    </div>
                    <figure className="foto-viajera">
                        <img src="https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_960_720.jpg"/>
                    </figure>


                </div>                        
                    

            </section>
            <section>
                <h2> Que ventajas ofrece Flexiprogramada</h2>
                <Ventajas datos = {ventajasFlexi}/>
            </section>

            <h2 className="container">Donde puedo hacer mis pagos mensuales</h2>
            <Bancos datos = {datosBancos}/>
            </div>
        )
    }
}

export default PagaYa