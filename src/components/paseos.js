import React from 'react'
import './paseos.css'
import datosPaseos from './datos_paseos.json'
import Incluye from './componentesPaseos/incluye'
import Tips from './componentesPaseos/tips'


class Paseo extends React.Component {
    render() {
          return(
              <React.Fragment>
            <section className="hero-paseos">   

                <div className = "contenedor-imagen">
                    <h1 className="titulo-paseo">{this.props.titulo}</h1>
                     <img className="imagen-paseo" src={this.props.imagen} width="100%"  />
                     
                </div>  
                
            </section>

            <section className="row container">

                <div className="col s12 m6 ">
                    <iframe width="100%" 
                    className="contenedor-video"                    
                    src={this.props.video} 
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen="true"></iframe>
                </div>              

                <div className="col s12 m6">

                    <h4 className="subtitle">{this.props.subtitulo}</h4>

                    <p>{this.props.intro}</p>

                    <br/>                    
                         <a className="waves-effect waves-light btn" href={this.props.enlaceExt} target="blank">Enlace externo con mas información</a>
                    
                    

                   
                </div>                
            </section>
                  

            <section className="row container">

                <div className="niveles-dificultad center-align col s12 m6">
                    <h5>Nivel físico</h5>

                    <i class="large material-icons">{this.props.fisicoLogo}</i>
                    <p>{this.props.fisico}</p>

                </div>

                <div className="niveles-dificultad center-align s12 m6">
                    <h5>Nivel de dificultad</h5>

                    <i class="large material-icons">{this.props.dificultadLogo}</i>
                    <p>{this.props.dificultad}</p>

                </div>            
                

            </section>


                <Incluye datos={this.props.incluye}/>    

            

                <Tips datos={this.props.tips}/>           

            
            </React.Fragment>
        )
    }      
    
}

export default Paseo