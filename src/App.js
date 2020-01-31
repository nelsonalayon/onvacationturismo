import React from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css'
import Plantilla from './components/plantilla'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Destinos from './components/Destinos'

import CastilloMar from './components/hoteles/castilloMar'
import Princess from './components/hoteles/hotelPrincess'
import Tukan from './components/hoteles/hotelTukan'
import Wayira from './components/hoteles/hotelWayira'
import PosadaElBosque from './components/hoteles/hotelElBosque'
import PosadaPantu from './components/hoteles/posadaRefugioPantu'
import AcantiladoDeLaTierra from './components/hoteles/acantiladoTierra'
import BlueReef from './components/hoteles/hotelBlueReef'
import Caribbean from './components/hoteles/hotelCaribbean'
import Cove from './components/hoteles/hotelCove'
import MagicHill from './components/hoteles/hotelMagicHill'
import SeaHorse from './components/hoteles/hotelSeaHorse'
import Tone from './components/hoteles/hotelTone'
import Tower from './components/hoteles/hotelTower'
import SolCaribeCampo from './components/hoteles/hotelSolCaribeCampo'
import SolCaribeSanAndres from './components/hoteles/hotelSolCaribeSanAndrés'
import HaciendaCafetera from './components/hoteles/hotelHaciendaCafetera'
import Amazon from './components/hoteles/hotelAmazon'
import MadreservaPeru from './components/hoteles/reservaMadreSelvaPerú'
import AmazonasReal from './components/hoteles/hotelAmazonasReal'
import MadreselvaLeticia from './components/hoteles/hotelMadreSelvaLeticia'
import GirardotResort from './components/hoteles/hotelGirardotResort'
import BeLaSierra from './components/hoteles/hotelBeLaSierra'
import SanhaPlus from './components/hoteles/hotelSánhaPlus'
import DosPlayas from './components/hoteles/hotelDosPlayas'
import CurazaoBeach from './components/hoteles/hotelCurazaoBeach'
import Kunuku from './components/hoteles/hotelKunuku'
import CuracaoMarriott from './components/hoteles/hotelCuracaoMarriott'
import ExecutiveHotel from './components/hoteles/executivehotel'
import SheratonBijao from './components/hoteles/sheratonBijaoBeachResort'
import PlayaBlanca from './components/hoteles/hotelPlayaBlanca'
import Summit from './components/hoteles/summit'
import ListaDeHoteles from './components/listaDeHoteles'

import ChichenItza from './components/componentesPaseos/playaCarmenCancun/chichenItza'

import IslaMujeres from './components/componentesPaseos/playaCarmenCancun/IslaMujeres'
import JungleTour from './components/componentesPaseos/playaCarmenCancun/JungleTour'
import Xcaret from './components/componentesPaseos/playaCarmenCancun/Xcaret'
import TulumXelha from './components/componentesPaseos/playaCarmenCancun/TulumXelha'
import Xoximilco from './components/componentesPaseos/playaCarmenCancun/Xoximilco'
import CobaTulumCenotePlayaCarmen from './components/componentesPaseos/playaCarmenCancun/CobaTulumCenotePlayaDelCarmen'
import CocoBongo from './components/componentesPaseos/playaCarmenCancun/CocoBongo'
import CapitanHook from './components/componentesPaseos/playaCarmenCancun/CapitanHook'
import Columbus from './components/componentesPaseos/playaCarmenCancun/Columbus'
import Palomino from './components/componentesPaseos/guajira/Palomino'
import CaboVela from './components/componentesPaseos/guajira/CaboVela'

import GusanoSuperMable from './components/componentesPaseos/guajira/GusanoSuperMable'
import Maicao from './components/componentesPaseos/guajira/Maicao'
import Cabalgata from './components/componentesPaseos/guajira/Cabalgata'

import Acuario from './components/componentesPaseos/sanAndres/Acuario'
import BuceoFunDive2daInmersion from './components/componentesPaseos/sanAndres/BuceoFunDive2daInmersion'
import BuceoDoble from './components/componentesPaseos/sanAndres/BuceoDoble'
import VeladaBlancabordo from './components/componentesPaseos/sanAndres/VeladaBlancaABordo'
import CuevaMorgan from './components/componentesPaseos/sanAndres/CuevaDeMorgan'
import CursoBuceo1erNivel from './components/componentesPaseos/sanAndres/CursoBuceo1erNivel'
import ExpedicionDiscovery from './components/componentesPaseos/sanAndres/ExpedicionDiscovery'
import JhonnyCay from './components/componentesPaseos/sanAndres/JhonnyCay'
import MarDeLosSieteColores from './components/componentesPaseos/sanAndres/MarDeLosSieteColores'
import RockyCayBeach from './components/componentesPaseos/sanAndres/RockyCayBeach'
import Snorkeling from './components/componentesPaseos/sanAndres/Snorkeling'
import MiniCursoBuceo from './components/componentesPaseos/sanAndres/MiniCursoBuceo'
import Snuba from './components/componentesPaseos/sanAndres/Snuba'
import TourVipBeach from './components/componentesPaseos/sanAndres/TourVipBeach'
import TourBahia from './components/componentesPaseos/sanAndres/TourBahía'
import TourVipPanoramico from './components/componentesPaseos/sanAndres/TourVipPanoramico'
import VueltaIslaTerrestre from './components/componentesPaseos/sanAndres/VueltaIslaTerrestre'
import DiscoTkYateRumba from './components/componentesPaseos/sanAndres/DiscoTkYateRumba'
import CasaMuseo from './components/componentesPaseos/sanAndres/CasaMuseo'
import PlayaIndigo from './components/componentesPaseos/sanAndres/PlayaIndigo'
import CityTourFilandia from './components/componentesPaseos/ejeCafetero/CityTourFilandia'
import ParqueCafe from './components/componentesPaseos/ejeCafetero/ParqueDelCafe'
import BioparqueUkumari from './components/componentesPaseos/ejeCafetero/BioparqueUkumari'
import Mariposario from './components/componentesPaseos/ejeCafetero/Mariposario'
import ParqueArrieros from './components/componentesPaseos/ejeCafetero/ParqueArrieros'
import Recuca from './components/componentesPaseos/ejeCafetero/Recuca'
import TermalesSantaRosa from './components/componentesPaseos/ejeCafetero/TermalesSantaRosa'
import ParquePanaca from './components/componentesPaseos/ejeCafetero/ParquePanaca'
import CityTourPereira from './components/componentesPaseos/ejeCafetero/CityTourPereira'
import SalentoValleCocora from './components/componentesPaseos/ejeCafetero/SalentoValleCocora'
import TourPanoramico from './components/componentesPaseos/panama/TourPanoramico'
import CityTourCanalPanama from './components/componentesPaseos/panama/CityTourCanalPanama'
import TourCompras from './components/componentesPaseos/panama/TourCompras'
import TourComprasZonaLibreColon from './components/componentesPaseos/panama/TourComprasZonaLibreColon'
import SanLorenzoCostaCosta from './components/componentesPaseos/panama/SanLorenzoCostaCosta'
import PortobelloCostaCosta from './components/componentesPaseos/panama/PortobelloCostaCosta'
import FiestaPanamena from './components/componentesPaseos/panama/FiestaPanamena'
import EmberaQuera from './components/componentesPaseos/panama/EmberaQuera'
import BarHoppingCascoAntiguo from './components/componentesPaseos/panama/BarHoppingCascoAntiguo'
import TelefericoExhibicionesEcologicas from './components/componentesPaseos/panama/TelefericoExhibicionesEcologicas'
import FullDaySanBlas from './components/componentesPaseos/panama/FullDaySanBlas'
import CenaCanalPanama from './components/componentesPaseos/panama/CenaCanalPanama'
import JungleLand from './components/componentesPaseos/panama/JungleLand'
import AutobusTurístico from './components/componentesPaseos/panama/AutobusTuristico'
import FullDayContadora from './components/componentesPaseos/panama/FullDayContadora'
import TourCanalPanama from './components/componentesPaseos/panama/TourCanalPanama'
import ElValleDeAnton from './components/componentesPaseos/ejeCafetero/ValleDeAnton'
import AventuraCocle from './components/componentesPaseos/panama/AventuraCocle'
import FullDayIslaTaboga from './components/componentesPaseos/panama/FullDayIslaTaboga'
import comunidadesIndigenas from './components/componentesPaseos/Amazonas/comunidadesIndigenas'
import Canopy from './components/componentesPaseos/Amazonas/canopy'
import caminataNocturna from './components/componentesPaseos/Amazonas/caminataNocturan'
import KayakAmazonas from './components/componentesPaseos/Amazonas/kayakAmazonas'



import inicio from './components/inicio'
import saludo from './components/saludo'
import Guajira from './components/guajiraComponente'
import PlayaDelCarmen from './components/playaCarmenComponente'
import SanAndres from './components/sanAndresComponente'
import Hotel from './components/hotel'
import Pagos from './components/formas-de-pago'
import PagaYa from './components/paga-ya'
import ContenedorFormulario from './components/contenedor-formulario'
import NotFound from './components/not-found'
import ReservaYa from './components/reserva-ya'
import ViajaYa from './components/viaja-ya'
import ViajaFacil from './components/viaja-facil'
import Flexiprogramada from './components/flexiprogramada'
import ContenedorPrueba from './components/ensayos/contenedor-prueba'
import Paseo from './components/paseos'

import EjeCafetero from './components/ejeCafeteroComponente'
import Amazonas from './components/amazonasComponente'
import Girardot from './components/GirardotComponente'
import SantaMarta from './components/santaMartaComponente'
import Cancun from './components/cancunComponente'
import Curacao from './components/curacaoComponente'
import Panama from './components/panamaComponente'

import ContenedorSaludoDestinos from './components/contenedor-saludo-destinos'


class App extends React.Component {

  state =  {
   

}



handleChange = e => {
    this.setState({
        ...this.state.form,
        [e.target.name]: e.target.value,
    })
}

  render() {
    return (
    <BrowserRouter>
    
    <Plantilla>

        <Switch>         
          <Route exact path ="/" component = {inicio}/>
          {/* <Route exact path = "/saludo" component = {ContenedorSaludoDestinos}/> */}
          <Route exact path ="/saludo" component = {saludo}  /> 
          
          <Route exact path ="/destinos" component = {Destinos}/>
          <Route exact path ="/listaDeHoteles" component ={ListaDeHoteles}/>         
          
          <Route exact path ="/guajira" component = {Guajira}/>
          <Route exact path ="/san_andres" component = {SanAndres}/>
          <Route exact path ="/playa_del_carmen" component = {PlayaDelCarmen}/>
          <Route exact path ="/eje_cafetero" component = {EjeCafetero}/>
          <Route exact path ="/amazonas" component = {Amazonas}/>
          <Route exact path ="/girardot" component = {Girardot}/>
          <Route exact path ="/santa_marta" component = {SantaMarta}/>
          <Route exact path ="/cancun" component = {Cancun}/>
          <Route exact path ="/curacao" component = {Curacao}/>
          <Route exact path ="/panama" component = {Panama}/>
          <Route exact path ="/hotel" component = {Hotel}/>

          
          <Route exact path = "/playa_del_carmen/hotel_princess" component ={Princess}/>
          <Route exact path = "/playa_del_carmen/hotel_tukan" component ={Tukan}/>
          <Route exact path = "/guajira/hotel_wayira" component ={Wayira}/>
          <Route exact path = "/guajira/posada_balneario_el_bosque" component ={PosadaElBosque}/>
          <Route exact path = "/guajira/posada_refugio_de_pantu" component ={PosadaPantu}/>
          <Route exact path = "/guajira/hotel_castillo_del_mar" component ={CastilloMar}/>
          <Route exact path = "/san_andres/hotel_acantilado_de_la_tierra" component ={AcantiladoDeLaTierra}/>
          <Route exact path = "/san_andres/hotel_blue_reef" component ={BlueReef}/>
          <Route exact path = "/san_andres/hotel_caribbean" component ={Caribbean}/>
          <Route exact path = "/san_andres/hotel_cove" component ={Cove}/>
          <Route exact path = "/san_andres/hotel_magic_hill" component ={MagicHill}/>
          <Route exact path = "/san_andres/hotel_sea_horse" component ={SeaHorse}/>
          <Route exact path = "/san_andres/hotel_tone" component ={Tone}/>
          <Route exact path = "/san_andres/hotel_tower" component ={Tower}/>
          <Route exact path = "/san_andres/hotel_sol_caribe_campo" component ={SolCaribeCampo}/>
          <Route exact path = "/san_andres/hotel_sol_caribe_san_andres" component ={SolCaribeSanAndres}/>
          <Route exact path = "/eje_cafetero/hotel_hacienda_cafetera" component ={HaciendaCafetera}/>
          <Route exact path = "/amazonas/hotel_amazon" component ={Amazon}/>
          <Route exact path = "/amazonas/reserva_madre_selva_peru" component ={MadreservaPeru}/>
          <Route exact path = "/amazonas/hotel_amazonas_real" component ={AmazonasReal}/>
          <Route exact path = "/amazonas/hotel_madre_selva_leticia" component ={MadreselvaLeticia}/>
          <Route exact path = "/girardot/hotel_girardot_resort" component ={GirardotResort}/>
          <Route exact path = "/santa_marta/hotel_be_la_sierra" component ={BeLaSierra}/>
          <Route exact path = "/santa_marta/hotel_sahna_plus" component ={SanhaPlus}/>
          <Route exact path = "/cancun/hotel_dos_playas" component ={DosPlayas}/>
          <Route exact path = "/curacao/hotel_curazao_beach" component ={CurazaoBeach}/>
          <Route exact path = "/curacao/hotel_kunuku" component ={Kunuku}/>
          <Route exact path = "/curacao/hotel_curacao_marriott" component ={CuracaoMarriott}/>
          <Route exact path = "/panama/executive_hotel" component ={ExecutiveHotel}/>
          <Route exact path = "/panama/hotel_sheraton_bijao" component ={SheratonBijao}/>
          <Route exact path = "/panama/hotel_summit" component ={Summit}/>
          <Route exact path = "/panama/hotel_playa_blanca" component ={PlayaBlanca}/>

          <Route exact path = "/chichen_itza" component ={ChichenItza}/>         
          <Route exact path = "/IslaMujeres" component ={IslaMujeres}/>
          <Route exact path = "/JungleTour" component ={JungleTour}/>
          <Route exact path = "/Xcaret" component ={Xcaret}/>
          <Route exact path = "/TulumXelha" component ={TulumXelha}/>
          <Route exact path = "/Xoximilco" component ={Xoximilco}/>
          <Route exact path = "/CobaTulumCenotePlayaCarmen" component ={CobaTulumCenotePlayaCarmen}/>
          <Route exact path = "/CocoBongo" component ={CocoBongo}/>
          <Route exact path = "/CapitanHook" component ={CapitanHook}/>
          <Route exact path = "/Columbus" component ={Columbus}/>
          <Route exact path = "/Palomino" component ={Palomino}/>
          <Route exact path = "/CaboVela" component ={CaboVela}/>
         
          <Route exact path = "/GusanoSuperMable" component ={GusanoSuperMable}/>
          <Route exact path = "/Maicao" component ={Maicao}/>
          <Route exact path = "/Cabalgata" component ={Cabalgata}/>
          
          <Route exact path = "/Acuario" component ={Acuario}/>
          <Route exact path = "/BuceoFunDive2daInmersion" component ={BuceoFunDive2daInmersion}/>
          <Route exact path = "/BuceoDoble" component ={BuceoDoble}/>
          <Route exact path = "/VeladaBlancabordo" component ={VeladaBlancabordo}/>
          <Route exact path = "/CuevaMorgan" component ={CuevaMorgan}/>
          <Route exact path = "/CursoBuceo1erNivel" component ={CursoBuceo1erNivel}/>
          <Route exact path = "/ExpedicionDiscovery" component ={ExpedicionDiscovery}/>
          <Route exact path = "/JhonnyCay" component ={JhonnyCay}/>
          <Route exact path = "/MarDeLosSieteColores" component ={MarDeLosSieteColores}/>
          <Route exact path = "/RockyCayBeach" component ={RockyCayBeach}/>
          <Route exact path = "/Snorkeling" component ={Snorkeling}/>
          <Route exact path = "/MiniCursoBuceo" component ={MiniCursoBuceo}/>
          <Route exact path = "/Snuba" component ={Snuba}/>
          <Route exact path = "/TourVipBeach" component ={TourVipBeach}/>
          <Route exact path = "/TourBahia" component ={TourBahia}/>
          <Route exact path = "/TourVipPanoramico" component ={TourVipPanoramico}/>
          <Route exact path = "/VueltaIslaTerrestre" component ={VueltaIslaTerrestre}/>
          <Route exact path = "/DiscoTkYateRumba" component ={DiscoTkYateRumba}/>
          <Route exact path = "/CasaMuseo" component ={CasaMuseo}/>
          <Route exact path = "/PlayaIndigo" component ={PlayaIndigo}/>
          <Route exact path = "/CityTourFilandia" component ={CityTourFilandia}/>
          <Route exact path = "/ParqueCafe" component ={ParqueCafe}/>
          <Route exact path = "/BioparqueUkumari" component ={BioparqueUkumari}/>
          <Route exact path = "/Mariposario" component ={Mariposario}/>
          <Route exact path = "/ParqueArrieros" component ={ParqueArrieros}/>
          <Route exact path = "/Recuca" component ={Recuca}/>
          <Route exact path = "/TermalesSantaRosa" component ={TermalesSantaRosa}/>
          <Route exact path = "/ParquePanaca" component ={ParquePanaca}/>
          <Route exact path = "/CityTourPereira" component ={CityTourPereira}/>
          <Route exact path = "/SalentoValleCocora" component ={SalentoValleCocora}/>
          <Route exact path = "/TourPanoramico" component ={TourPanoramico}/>
          <Route exact path = "/CityTourCanalPanama" component ={CityTourCanalPanama}/>
          <Route exact path = "/TourCompras" component ={TourCompras}/>
          <Route exact path = "/TourComprasZonaLibreColon" component ={TourComprasZonaLibreColon}/>
          <Route exact path = "/SanLorenzoCostaCosta" component ={SanLorenzoCostaCosta}/>
          <Route exact path = "/PortobelloCostaCosta" component ={PortobelloCostaCosta}/>
          <Route exact path = "/FiestaPanamena" component ={FiestaPanamena}/>
          <Route exact path = "/EmberaQuera" component ={EmberaQuera}/>
          <Route exact path = "/BarHoppingCascoAntiguo" component ={BarHoppingCascoAntiguo}/>
          <Route exact path = "/TelefericoExhibicionesEcologicas" component ={TelefericoExhibicionesEcologicas}/>
          <Route exact path = "/FullDaySanBlas" component ={FullDaySanBlas}/>
          <Route exact path = "/CenaCanalPanama" component ={CenaCanalPanama}/>
          <Route exact path = "/JungleLand" component ={JungleLand}/>
          <Route exact path = "/AutobusTurístico" component ={AutobusTurístico}/>
          <Route exact path = "/FullDayContadora" component ={FullDayContadora}/>
          <Route exact path = "/TourCanalPanama" component ={TourCanalPanama}/>
          <Route exact path = "/ElValleDeAnton" component ={ElValleDeAnton}/>
          <Route exact path = "/AventuraCocle" component ={AventuraCocle}/>
          <Route exact path = "/FullDayIslaTaboga" component ={FullDayIslaTaboga}/>     
          <Route exact path = "/comunidadesIndigenas" component = {comunidadesIndigenas}/>
          <Route exact path = "/canopy" component = {Canopy}/>
          <Route exact path = "/caminataNocturna" component ={caminataNocturna}/>
          <Route exact path = "/KayakAmazonas" component ={KayakAmazonas}/>
          

          

          <Route exact path ="/pagos" component = {Pagos}/>
          <Route exact path ="/paga-ya" component = {PagaYa}/>
          <Route exact path = '/reserva-ya' component = {ReservaYa}/>         
          <Route exact path = '/viaja-ya' component = {ViajaYa}/>
          <Route exact path = '/viaja-facil' component = {ViajaFacil}/>
          <Route exact path = '/flexiprogramada' component = {Flexiprogramada}/>
          <Route exact path = '/paseos' component = {Paseo}/>
           
           
           <Route component={NotFound}/>
         
        </Switch>  
      </Plantilla>    
    
    </BrowserRouter>
  );
  }
  
}

export default App;
