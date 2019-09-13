import React from 'react' 
import 'materialize-css/dist/css/materialize.min.css'
import facebook from '../img/facebook.svg'
import twiter from '../img/twiter.svg'
import instagram from '../img/instagram.svg'
import youtube from '../img/youtube.svg'
import logo_onVacation from '../img/logoOnvacation.png'
import quetedetiene from '../img/queTeDetiene.png'
import './plantilla.css'
import M from "materialize-css";
import { Link } from 'react-router-dom';




class Plantilla extends React.Component {

    state =  {
        nombre: "nelson"

    }

    

    componentWillMount() {

        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.carousel');
            let elemsSidebar = document.querySelectorAll('.sidenav');
            


            
            let instances = M.Carousel.init(elems, {
              shift: 100,
              fullWidth: false,
              indicators: true
            } );
            let instancesSidebar = M.Sidenav.init(elemsSidebar, {
                            edge:"left", 
                            draggable:true });

          });    
          
          
          document.addEventListener('DOMContentLoaded', function() {
            let elemsCollapsible = document.querySelectorAll('.collapsible');
            let instances = M.Collapsible.init(elemsCollapsible);
          });
        
          
    }

    handleChange = e => {
        this.setState({
            ...this.state.form,
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
                <Link to="/"> <img className="LogoPrincipal" src= {logo_onVacation} alt = "Logo on Vacation" width="160"/> </Link>
                <div className="barralateral hide-on-med-and-down"></div>
                <section className="chat-container">
                    <div className="chat-button">chat en vivo</div>
                    <div className="chat-content">
                            {/* pendiente por resolver el chat de face */}
                                       </div>
                </section>
                <nav className = "barraNavegacion">
                    <div className="nav-wrapper">
                    <a href="#" className="brand-logo"> <img src = {quetedetiene} alt = "que te detiene" width = "140"/> </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-down">
                        <li><a href="sass.html">Destinos</a></li>
                        <li><a href="badges.html">Formas de pago</a></li>
                        <li><a href="collapsible.html">Preguntas</a></li>
                        <li><a href="collapsible.html">Testimonios</a></li>
                        <li><a href="collapsible.html">Empresas</a></li>
                        <li><a href="collapsible.html">Quinceañeras</a></li>
                    </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><div className="user-view">
                            <div className="background">
                                <img src="https://ichef.bbci.co.uk/news/ws/720/amz/worldservice/live/assets/images/2014/09/05/140905164109_eden_isla_tropical_336x189_thinkstock_nocredit.jpg" alt="oficina"/>
                            </div>
                        <a href="#user"><img className="circle" src="https://static.platzi.com/media/avatars/nelsonandresalayonmican_db24d28e-d8da-41a7-af3d-871f62530c7a.jpg" alt="nelson"/></a>
                        <a href="#name"><span className="white-text name">John Doe</span></a>
                        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="sass.html">Destinos</a></li>
                    <li><a href="badges.html">Formas de pago</a></li>
                    <li><a href="collapsible.html">Preguntas</a></li>
                    <li><a href="mobile.html">Testimonios</a></li>
                    <li><a href="mobile.html">Empresas</a></li>
                    <li><a href="mobile.html">Quinceañeras</a></li>
                </ul>

                <div className="redes">

                    <a href = "#"> <img src = {facebook} alt= "Facebook" height="30em"/></a>
                    <a href = "#"> <img src = {instagram} alt= "instagram" height="30em"/></a>
                    <a href = "#"> <img src = {twiter} alt= "Twiter" height="30em"/></a>
                    <a href = "#"> <img src = {youtube} alt= "Youtube" height="30em"/></a>

                </div>

               

            </React.Fragment>

        )
    }
        
    
}

export default Plantilla
