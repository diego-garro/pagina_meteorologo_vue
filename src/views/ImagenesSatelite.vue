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
      <ButtonContainer :buttons="goesButtons"/>
    </section>
    <br>
    <section>
      <CardContainer :cards="goesCards"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Imágenes de Satélite Sinópticas</h1>
      <br>
      <CardContainer :cards="sinopticasCards"/>
      <br>
      <h2 class="content-note">Nota: Estas son las imágenes actuales para darle seguimiento al tiempo actual, si desea ver algún registro o imagen satelital más antigua debe ir al histórico</h2>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Agua precipitable advectada</h1>
      <br>
      <CardContainer :cards="precipitableCards"/>
    </section>
    <br>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import CardContainer from '@/components/CardContainer.vue'
import ButtonContainer from '@/components/ButtonContainer.vue'
import ButtonComp from '@/components/ButtonComp.vue'

import jsonGoesCards from "@/assets/json/imagenes_satelite/goesCards.json"
import jsonSinopticasCards from "@/assets/json/imagenes_satelite/sinopticasCards.json"
import jsonPrecipitableCards from "@/assets/json/imagenes_satelite/precipitableCards.json"
import jsonGoesButtons from "@/assets/json/imagenes_satelite/goesButtons.json"

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
      // Cards
      goesCards: jsonGoesCards,
      sinopticasCards: jsonSinopticasCards,
      precipitableCards: jsonPrecipitableCards,
      // Buttons
      goesButtons: jsonGoesButtons,
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