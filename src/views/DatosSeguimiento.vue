<template>
  <div class="datos-seguimiento">
    <section>
      <HeaderComp title="Datos de Seguimiento" />
    </section>
    <br />
    <hr />
    <section>
        <CardContainer :cards="cards.slice(0, 8)"/>
    </section>
    <br><hr>
    <section>
        <ButtonContainer :buttons="buttons.slice(0, 5)"/>
    </section>
    <br><hr>
    <section>
        <CardContainer :cards="cards.slice(8)"/>
    </section>
    <br><hr>
    <section>
        <h1 class="content-title">Compendio de estaciones</h1>
        <br>
        <ButtonContainer :buttons="buttons.slice(5, 16)"/>
    </section>
    <br><hr>
    <section>
        <h1 class="content-title">Hidroestimadores</h1>
        <br>
        <ButtonContainer :buttons="buttons.slice(16)"/>
    </section>
    <br>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"
import ButtonContainer from '@/components/ButtonContainer.vue'

export default {
  name: "DatosSeguimiento",
  components: {
    HeaderComp,
    CardContainer,
    ButtonContainer,
  },
  data() {
    return {
      cards: [
        // Primer bloque 0 - 7
        {
          title: "Valle Central",
          img: "imagenes/VC_este.png",
          link: "https://www.imn.ac.cr/especial/gam.html",
          big: false,
        },
        {
          title: "Valle Central Montañas",
          img: "imagenes/VC_montanas.png",
          link: "https://www.imn.ac.cr/especial/vcmonta.html",
          big: false,
        },
        {
          title: "Cartago",
          img: "imagenes/cartago.png",
          link: "https://www.imn.ac.cr/especial/cartago.html",
          big: false,
        },
        {
          title: "Valle Central Oeste",
          img: "imagenes/VC_oeste.png",
          link: "https://www.imn.ac.cr/especial/gam2.html",
          big: false,
        },
        {
          title: "Guanacaste",
          img: "imagenes/guanacaste.png",
          link: "https://www.imn.ac.cr/especial/guanacaste.html",
          big: false,
        },
        {
          title: "Pacífico",
          img: "imagenes/pacifico.png",
          link: "https://www.imn.ac.cr/especial/pacifico.html",
          big: false,
        },
        {
          title: "Caribe y Zona Norte",
          img: "imagenes/caribe-zn.png",
          link: "https://www.imn.ac.cr/especial/caribe-zn.html",
          big: false,
        },
        {
          title: "Cambio Climático",
          img: "imagenes/cambio_climatico.png",
          link: "https://www.imn.ac.cr/especial/desarrollocc.html",
          big: false,
        },
        // Segundo bloque 8 - final
        {
          title: "CAFFG",
          img: "imagenes/caffg.png",
          link: "https://cds.imn.ac.cr/CAFFG/index.php",
          big: false,
        },
        {
          title: "Intensidad de lluvia",
          img: "imagenes/intensidad-lluvia.png",
          link: "http://intranet.imn.ac.cr/estaciones/graficos/datos5minutos/mapaIntensidadLluvia.png",
          big: false,
        },
        {
          title: "Gráficos de las estaciones",
          img: "imagenes/graficos-estaciones.png",
          link: "http://intranet.imn.ac.cr/estaciones/graficos/graficos7a7/",
          big: false,
        },
        {
          title: "Radiosondeos WRF",
          img: "imagenes/radiosondeosWRF.png",
          link: "http://intranet.imn.ac.cr/estaciones/graficos/radioSondeosWRF/",
          big: false,
        },
        {
          title: "Cyclone phase evolution",
          img: "imagenes/cyclone-evo.png",
          link: "http://moe.met.fsu.edu/cyclonephase/",
          big: false,
        },
        {
          title: "Anomalías de luvia diaria",
          img: "imagenes/anomalias-lluvia.png",
          link: "http://intranet.imn.ac.cr/estaciones/graficos/anomalias_lluvia/",
          big: false,
        },
      ],
      buttons: [
        // Primer bloque 0 - 4
        {
          title: 'Lista de Estaciones (todas)',
          link: 'http://intranet.imn.ac.cr/lista-estaciones.html'
        },
        {
          title: 'Activador ICE',
          link: 'https://vpngw.ice.go.cr/'
        },
        {
          title: 'Desplegador ICE',
          link: 'http://10.3.104.29/Hidromet/plantas.html'
        },
        {
          title: 'Mapa de Estaciones Wundergound',
          link: 'https://www.wunderground.com/?lat=10.000000&lon=-84.000000&zoom=10&wxsn=1'
        },
        {
          title: 'Datos IMN (horarios, diarios, mensuales)',
          link: 'http://intranet.imn.ac.cr/datos.html'
        },
        // Segundo bloque 5 - 15
        {
          title: 'Datos observados (Davis, UCR, IMN)',
          link: 'http://intranet.imn.ac.cr/datos.html'
        },
        {
          title: 'Isoyetas',
          link: 'https://www.imn.ac.cr/isoyetas'
        },
        {
          title: 'Davis',
          link: 'https://www.weatherlink.com/map.php?station=jacobeach'
        },
        {
          title: 'Datos UCR',
          link: 'http://meteoro.ucr.ac.cr/'
        },
        {
          title: 'La Selva',
          link: 'https://archive.tropicalstudies.org/meteoro/datosimn/69697/'
        },
        {
          title: 'Datos y Gráficos (anomalías)',
          link: 'http://intranet.imn.ac.cr/estaciones/graficos/'
        },
        {
          title: 'Cotobrús',
          link: 'https://archive.tropicalstudies.org/meteoro/datosimn/98103/'
        },
        {
          title: 'Palo Verde',
          link: 'https://archive.tropicalstudies.org/meteoro/datosimn/76057/'
        },
        {
          title: 'Wundergound',
          link: 'https://www.wunderground.com/?lat=10.000000&lon=-84.000000&zoom=10&wxsn=1'
        },
        {
          title: 'Davis-estaciones',
          link: 'https://www.weatherlink.com/map.php?station=jacobeach'
        },
        {
          title: 'ICAFE-estaciones',
          link: 'http://www.icafe.cr/sector-cafetalero/clima/'
        },
        // Tercer bloque 16 - final
        {
          title: 'Hidroestimador de Naval EEUU',
          link: 'https://www.nrlmry.navy.mil/archdat/atlantic/central_america/accumulations/geo/'
        },
        {
          title: 'Seguimiento de Tormentas',
          link: 'http://sigma.cptec.inpe.br/fortracc/'
        },
        {
          title: 'CHMORPH',
          link: 'https://www.cpc.ncep.noaa.gov/products/international/camerica/camerica.shtml'
        },
      ]
    };
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .datos-seguimiento {
    margin-top: 13vmin;
  }
}
</style>
