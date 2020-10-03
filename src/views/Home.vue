<template>
  <div class="home">
    <HeaderComp :title="header.title" :img="header.imgPath"/>
    <section>
      <CardContainer :cards="cards.slice(0,2)"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Rayos actuales e imagen de infrarrojo (loop)</h1>
      <br>
      <CardContainer :cards="cards.slice(2, 9)"/>
      <ButtonContainer :buttons="buttons"/> 
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Modelos Numéricos</h1>
      <br>
      <CardContainer :cards="cards.slice(9)"/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import CardContainer from '@/components/CardContainer.vue'
import ButtonContainer from '@/components/ButtonContainer.vue'

export default {
  name: 'Home',
  components: {
    HeaderComp,
    CardContainer,
    ButtonContainer,
  },
  data() {
    return {
      header: {
        title: 'Departamento de Meteorología Sinóptica y Aeronáutica',
        imgPath: 'logos/IMN-LogoRedes-RGB.png',
      },
      cards: [
        // Primer bloque 0 - 1
        {
          title: 'GOES 16 L1B CO5, CO3, CO1 2k',
          img: 'animaciones/tornado.gif',
          link: 'https://www.imn.ac.cr/imagenes-sat/crtrucol-animada.gif',
          big: true
        },
        {
          title: 'GOES 16 L1B CO2, CO3, CO1 2k',
          img: 'animaciones/hollingshead.gif',
          link: 'https://www.imn.ac.cr/imagenes-sat/caribe-animada.gif',
          big: true
        },
        // Segundo Bloque 2 - 9
        {
          title: 'Vaisala Thunderstorm',
          img: 'imagenes/vaisala.jpg',
          link: 'https://storm.vaisala.com/thunderstorm/login',
          big: false
        },
        {
          title: 'Ramsdis Infrarrojo Loop',
          img: 'imagenes/infrarrojo.gif',
          link: 'http://rammb.cira.colostate.edu/ramsdis/online/loop.asp?data_folder=rmtc/rmtcnhir48&width=640&height=480',
          big: false
        },
        {
          title: 'Sondeos Wyoming',
          img: 'imagenes/sondeo.png',
          link: 'http://weather.uwyo.edu/upperair/sounding.html',
          big: false
        },
        {
          title: 'Mapa de lluvia nacional',
          img: 'imagenes/mapa_lluvia.png',
          link: 'http://intranet.imn.ac.cr/estaciones/esta.html',
          big: false
        },
        {
          title: 'Valle Central (este)',
          img: 'imagenes/VC_este.png',
          link: 'https://www.imn.ac.cr/especial/gam2.html',
          big: false
        },
        {
          title: 'Valle Central (oeste)',
          img: 'imagenes/VC_oeste.png',
          link: 'https://www.imn.ac.cr/especial/gam.html',
          big: false
        },
        {
          title: 'ECMWF Model',
          img: 'imagenes/nmme-apcpna.png',
          link: 'https://www.tropicaltidbits.com/analysis/models/?model=ecmwf&region=watl&pkg=uv850_vort&runtime=2017090512&fh=168&xpos=0&ypos=0',
          big: false
        },
        // Tercer bloque 9 - final
        {
          title: 'WRF 1',
          img: 'imagenes/wrf1.png',
          link: 'http://wrf.imn.ac.cr/',
          big: false
        },
        {
          title: 'WRF 1.5',
          img: 'imagenes/wrf-15.png',
          link: 'http://wrf1-5.imn.ac.cr/',
          big: false
        },
        {
          title: 'Sarapiquí',
          img: 'imagenes/sarapiqui.png',
          link: 'http://sarapiqui.imn.ac.cr/ensamble6h.html',
          big: false
        },
        {
          title: 'WRF 5',
          img: 'imagenes/wrf5.png',
          link: 'http://wrf5.imn.ac.cr/lluvia/lluviaensamble.html',
          big: false
        },
      ],
      buttons: [
        {
          title: 'Radar',
          link: 'http://190.185.117.144:8080/rainweb/site/#map=7/10.871/-82.859',
        },
        {
          title: 'Probabilidad de Lluvia',
          link: 'http://wrf5.imn.ac.cr/lluvia/probabilidad.html'
        },
        {
          title: 'Datos Diarios (anomalías)',
          link: 'http://intranet.imn.ac.cr/estaciones/graficos/mapas/'
        },
        {
          title: 'Lluvia Actual',
          link: 'http://intranet.imn.ac.cr/estaciones/esta.html'
        },
        {
          title: 'Rayos Registrados',
          link: 'http://intranet.imn.ac.cr/estaciones/graficos/rayos/'
        }
      ]
    }
  }
}
</script>

<style>

</style>
