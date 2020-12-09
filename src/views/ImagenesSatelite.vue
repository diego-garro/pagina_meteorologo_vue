<template>
  <div class="img-satelite">
    <section>
      <HeaderComp title="Imágenes de Satélite" subtitle="Acceso directo a diferentes sitios de imágenes"/>
      <br>
      <ButtonComp link="https://www.ncdc.noaa.gov/gibbs/" title="Archivo de imágenes (1980 - Actualidad)" :light="true"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Las imágenes de satélite acá son las del GOES-13, GOES-16 y algunos derivados</h1>
      <br>
      <ButtonContainer :buttons="buttons"/>
    </section>
    <br>
    <section>
      <CardContainer :cards="cards.slice(0, 3)"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Imágenes de Satélite Sinópticas</h1>
      <br>
      <CardContainer :cards="cards.slice(3, 9)"/>
      <br>
      <h2 class="content-note">Nota: Estas son las imágenes actuales para darle seguimiento al tiempo actual, si desea ver algún registro o imagen satelital más antigua debe ir al histórico</h2>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Agua precipitable advectada</h1>
      <br>
      <CardContainer :cards="cards.slice(12)"/>
    </section>
    <br><hr>
    <section>
      <CardContainer :cards="cards.slice(9, 12)"/>
    </section>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import CardContainer from '@/components/CardContainer.vue'
import ButtonContainer from '@/components/ButtonContainer.vue'
import ButtonComp from '@/components/ButtonComp.vue'

export default {
  name: 'ImagenesSatelite',
  components: {
    HeaderComp,
    CardContainer,
    ButtonContainer,
    ButtonComp,
  },
  data() {
    return {
      cards: [
        // Primer bloque 0 - 2
        {
          title: 'Tele Space',
          img: 'imagenes/telespace.png',
          link: 'http://satelite.imn.ac.cr/',
          big: false
        },
        {
          title: 'Ramsdis Visible',
          img: 'imagenes/visible.gif',
          link: 'http://rammb.cira.colostate.edu/ramsdis/online/loop.asp?data_folder=rmtc/rmtccosvis1&width=640&height=480',
          big: false
        },
        {
          title: 'Winds & Analyses',
          img: 'imagenes/wg8wvir.gif',
          link: 'http://tropic.ssec.wisc.edu/real-time/windmain.php?&basin=atlantic&sat=wg8&prod=wvir&zoom=&time',
          big: false
        },
        // Segundo bloque 3 - 8
        {
          title: 'Alta Resolución GOES-16',
          img: 'imagenes/goes16.gif',
          link: 'https://rammb-slider.cira.colostate.edu/?sat=goes-16&z=0&im=12&ts=1&st=0&et=0&speed=130&motion=loop&map=1&lat=0&opacity%5B0%5D=1&hidden%5B0%5D=0&pause=0&slider=-1&hide_controls=0&mouse_draw=0&follow_feature=0&follow_hide=0&s=rammb-slider&sec=full_disk&p%5B0%5D=geocolor&x=10848&y=10848',
          big: false
        },
        {
          title: 'GOES Image Viewer',
          img: 'imagenes/goes-image-viewer.png',
          link: 'https://www.star.nesdis.noaa.gov/GOES/',
          big: false
        },
        {
          title: 'Infrarrojo',
          img: 'imagenes/infrarrojo.gif',
          link: 'http://rammb.cira.colostate.edu/ramsdis/online/loop.asp?data_folder=rmtc/rmtcnhir48&width=640&height=480',
          big: false
        },
        {
          title: 'Vapor de Agua',
          img: 'imagenes/vapor-agua.gif',
          link: 'http://rammb.cira.colostate.edu/ramsdis/online/loop.asp?data_folder=rmtc/rmtcnhir38&width=640&height=480',
          big: false
        },
        {
          title: 'Infrarrojo Costa Rica',
          img: 'imagenes/infrarrojo-cr.gif',
          link: 'http://rammb.cira.colostate.edu/ramsdis/online/loop.asp?data_folder=rmtc/rmtccosir42&width=640&height=480',
          big: false
        },
        {
          title: 'Vapor de Agua Niveles Altos',
          img: 'imagenes/vapor-agua-niveles-altos.png',
          link: 'https://weather.cod.edu/satrad/?parms=global-atlantic-08-6-0-100-1&checked=map&colorbar=undefined',
          big: false
        },
        // Tercer bloque 9 - 11
        {
          title: 'RAMSDIS',
          img: 'imagenes/ramsdis.png',
          link: 'http://rammb.cira.colostate.edu/ramsdis/online/rmtc.asp',
          big: false
        },
        {
          title: 'HOVMOLLER',
          img: 'imagenes/hovmoller.png',
          link: 'http://bmcnoldy.rsmas.miami.edu/tropics/hovmoller/',
          big: false
        },
        {
          title: 'Rayos CIGEFI',
          img: 'imagenes/rayos-cigefi.jpg',
          link: 'http://www.cigefi.ucr.ac.cr/iddcc-ucr/',
          big: false
        },
        // Cuarto bloque 12 - final
        {
          title: 'CIMSS Tropical Cyclones',
          img: 'imagenes/cimms.png',
          link: 'http://tropic.ssec.wisc.edu/',
          big: false
        },
                {
          title: 'Agua Precipitable Sur América',
          img: 'imagenes/agua_precip_cira_SAm.png',
          link: 'http://cat.cira.colostate.edu/sport/layered/advected/LPW_SAm.htm',
          big: false
        },
                {
          title: 'Agua Precipitable Norte América',
          img: 'imagenes/agua_precip_cira_NAm.png',
          link: 'http://cat.cira.colostate.edu/sport/layered/advected/LPW_alt.htm',
          big: false
        },
      ],
      buttons: [
        {
          title: 'Rayos',
          link: 'https://ocean.weather.gov/lightning/index.php?basin=Tropics&geog=Far%20North&sat=IR&loop=On'
        },
        {
          title: 'Rayos Vaisala',
          link: 'https://storm.vaisala.com/thunderstorm/login'
        },
        {
          title: 'Rayos GOES-16',
          link: 'https://rammb-slider.cira.colostate.edu/?sat=goes-16&z=0&im=12&ts=1&st=0&et=0&speed=130&motion=loop&map=1&lat=0&opacity%5B0%5D=1&opacity%5B1%5D=1&hidden%5B0%5D=0&hidden%5B1%5D=0&pause=0&slider=-1&hide_controls=0&mouse_draw=0&follow_feature=0&follow_hide=0&s=rammb-slider&sec=full_disk&p%5B0%5D=geocolor&p%5B1%5D=cira_glm_l2_group_energy&x=10848&y=10848'
        },
        {
          title: 'Rayos Blitzo',
          link: 'https://map.blitzortung.org/#3.89/11.26/-74.86'
        },
        {
          title: 'EWALL',
          link: 'http://mp1.met.psu.edu/~fxg1/ewalltropatl.html'
        },
        {
          title: 'Radar',
          link: 'https://www.ineter.gob.ni/radar.html'
        },
        {
          title: 'Sports-NASA-Imágenes',
          link: 'https://weather.msfc.nasa.gov/cgi-bin/sportPublishData.pl?dataset=goes16abifulldisk&product=11p20um'
        },
        {
          title: 'CIMSS',
          link: 'http://tropic.ssec.wisc.edu/'
        },
      ]
    }
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .img-satelite {
    margin-top: 13vmin;
  }
}
</style>