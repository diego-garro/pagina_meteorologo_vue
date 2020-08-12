<template>
  <div class="home">
    <HeaderComp :title="header.title" :img="header.imgPath"/>
    <section>
      <CardComp v-for="(card, index) in cards" :key="index" :title="card.title" :img="card.img" :link="card.link" :big="card.big"/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import CardComp from '@/components/CardComp.vue'

export default {
  name: 'Home',
  components: {
    HeaderComp,
    CardComp,
  },
  data() {
    return {
      header: {
        title: 'Departamento de Meteorología Sinóptica y Aeronáutica',
        imgPath: 'logos/IMN-LogoRedes-RGB.png',
      },
      cards: [
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
        }
      ]
    }
  }
}
</script>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


</style>
