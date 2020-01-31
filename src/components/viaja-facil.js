import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Bancos from './bancos'
import Finantodo from './bancosFinantodo'
import datosBancos from './bancos.json'
import './paga-ya.css'

import Ventajas from './ventajas-finantodo'
import datosVentajas from './ventajas-finantodo.json'

class PagaYa extends React.Component {
    render() {
        return(
            <div>
                <section className="encabezado-formas-de-pago">                    

                         <h1 className="titulo">Viaja fácil</h1>             
                
                </section>
                <section className="row container " >
                    <div className="explicacion-de-pago col s12 l12 ">
                        <div className="textos">
                            <h4>“Que bien, por fin encontramos el destino que deseamos, todos están de acuerdo en viajar en esa fecha 
                                y tenemos muchos deseos de conocer nuestro destino... pero los pagos mensuales me quedan muy elevados... ¿Que puedo hacer?”
                            </h4>
                        </div>   <figure className="foto-viajera col s12 m4 l4">
                            <img src="https://i.pinimg.com/originals/48/dd/7a/48dd7af2529883ee32dd679a573f1b86.png"/>
                        </figure>
                    </div>
                   

                    </section>
                    <section>

                    <div className="solucion">
                            <p>
                            No se preocupe, FINANTODO puede financiarle el plan vacacional para que usted pague en 12 cómodas cuotas.
                            </p>
                    </div>                

                    <div className="como-financiar-vacaciones">
                        <h2>¡Que bien!, ¿pero qué debo hacer?</h2>

                    </div>

                    <div  className="solucion">
                        <p>FINANTODO solicita que se llene un formulario para hacer el prestamo, para ello nos reunimos, nos tomamos un café y llenamos el formulario correspondiente al credito de vacaciones ¿que tal?</p>
                    </div>
                   
                    <div className="y-cuanto-pago">
                        <a href="#modal1"  className="waves-effect waves-light btn-large red darken-1 btn modal-trigger">¿Que datos debo saber para poder llenar el formulario?</a>
                    
                    </div>

                    {/* <!-- Modal Structure --> */}
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                        <h4>Datos del titular del contrato</h4>
                        <ul> <li>Nombre completo</li>
                              <li></li>   Documento de identificación
                            <li>Lugar y fecha de nacimiento</li> 
                            <li>Actividad económica</li> 
                            <li>Número de personas a cargo</li> 
                            <li>Profesión</li> 
                            <li> Nivel de estudios</li>
                            <li>Ingresos y egresos mensuales</li> 
                            <li> Activos</li>
                            <li>Direccion de residencia</li> 
                            <li>Teléfono</li> 
                            <li>Correo electrónico</li> 
                            <li>Empresa donde trabaja</li> 
                            <li>Cargo</li> 
                            <li>Tipo de contrato</li> 
                            <li>Antiguedad en la empresa(meses)</li> 
                            <li>Dirección y teléfono de la empresa</li> 
                            <li>Una referencia familiar, una referencia personal y una referencia laboral</li>
                            <li> <strong> Deudor solidario: Del deudor solidario se solicitan los mismos datos que se le piden al titular del contrato</strong></li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">ok</a>
                    </div>
  </div>

                </section>

                <section>
                    <h2 className="container">Cuales son las condiciones del prestamo 
                        para la cuota inicial de FINANTODO</h2>

                        <div className="explicacion-de-pago">
                        <div className="textos">
                           <ol>
                            <li>Valor máximo que se presta: $4.000.000 o el 70% del valor total de la reserva</li>
                            <li>Es necesario abonar en efectivo o con tarjeta de crédito el 30% del valor total del plan</li>
                            <li>Prestamo a máximo 12 meses</li>
                            <li>Interes del 1.9% mensual</li>
                            <li>Para la aprobación del prestamo se necesita el formulario FINANTODO debidamente diligenciado con firma y huella</li>
                            <li>Una fotocopia de la cédula ampliada al 150%</li>
                            <li>Soporte de ingresos: puede ser RUT, la certificación de un contador o el último estracto bancario</li>
                            <li>Poliza de seguro</li>
                            <li>Plan de pagos</li>
                           </ol>
                        </div>
                        <figure className="foto-viajera">
                            <img src="https://cdn.pixabay.com/photo/2013/02/21/19/06/beach-84533_960_720.jpg"/>
                        </figure>


                        </div>                        
                    

                </section>
                <section>
                    <h2> Qué ventajas ofrece FINANTODO</h2>
                    <Ventajas datos = {datosVentajas}/>
                </section>

                <h2 className="container">Donde puedo hacer mis pagos mensuales</h2>
                <Finantodo datos = {datosBancos}/>
            </div>
        )
    }
}

export default PagaYa