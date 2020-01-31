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

                         <h1 className="titulo">Reserva ya</h1>             
                
                </section>
                <section className="row container " >
                    <div className="explicacion-de-pago col s12 l12 ">
                        <div className="textos">
                            <h4>“Hemos decidido viajar para una fecha especial, ya toda la familia programó las vacaciones 
                                para la misma fecha, y además hay una promoción espectacular en el destino que todos queremos... 
                                Pero no tengo el dinero en estos momentos para pagar la cuota inicial...”</h4>
                        </div>   <figure className="foto-viajera col s12 m4 l4">
                            <img src="https://i.pinimg.com/236x/60/31/f1/6031f1bd7ff9ec5ff719d50cc449bac3.jpg"/>
                        </figure>
                    </div>
                   

                    </section>
                    <section>

                    <div className="solucion">
                            <p>
                            On Vacation, pensando en esta situación ha hecho una alianza con FINANTODO, empresa dedicada a financiar las vacaciones de los colombianos
                             para perstarle el dinero al viajero que ya tomó la decisión y que su único incoveniente es el dinero.
                            </p>
                    </div>                

                    <div className="como-financiar-vacaciones">
                        <h2>¡Que bien!, quiero que FINANTODO 
                            financie mis vacaciones, ¿como hago?</h2>

                    </div>

                    <div  className="solucion">
                        <p>FINANTODO solicita que se llene un formulario para hacer el prestamo, para ello nos reunimos, nos tomamos un café y llenamos el formulario correspondiente al credito de vacaciones ¿que tal?</p>
                    </div>
                   
                    <div className="y-cuanto-pago">
                        <a href="#modal1"  className="waves-effect waves-light btn-large red darken-1 btn modal-trigger">¿Que datos debo saber para poder llenar el formulario?</a>
                    
                    </div>

                    {/* <!-- Modal Structure --> */}
                    <div id="modal1" class="modal">
                        <div className="modal-content">
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
                    <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">ok</a>
                    </div>
  </div>

                </section>

                <section>
                    <h2 className="container">Cuales son las condiciones del prestamo 
                        para la cuota inicial de FINANTODO</h2>

                        <div className="explicacion-de-pago">
                        <div className="textos">
                           <ol>
                            <li>Valor máximo que se presta: $1.000.000 o el 20% del valor total de la reserva</li>
                            <li>Prestamo a máximo 12 meses</li>
                            <li>    Si el prestamo se paga a menos de 1 mes los intereses son de 0%</li>
                            <li> Si el prestamo se paga a mas de 1 mes los intereses son del 1.9%</li>
                            <li>Para la aprobación del prestamo se necesita el formulario FINANTODO debidamente diligenciado con firma y huella y una fotocopia de la cédula ampliada al 150%</li>
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