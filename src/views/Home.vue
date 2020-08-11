<template>
  <div class="home">
    <HeaderComp :title="encabezado.title" :img="encabezado.imgPath"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  name: 'Home',
  components: {
    HeaderComp,
  },
  data() {
    return {
      encabezado: {
        title: 'Departamento de Meteorología Sinóptica y Aeronáutica',
        imgPath: 'logos/IMN-LogoRedes-RGB.png',
      }
    }
  }
}
</script>

<style scoped>

</style>
