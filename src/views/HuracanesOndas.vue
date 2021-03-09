<template>
  <div class="huracanes-ondas">
    <section>
      <HeaderComp title="Seguimiento CNH y otros"/>
      <ButtonContainer :buttons="headerButtons"/>
    </section>
    <br><hr>
    <section>
      <CardContainer :cards="ciclonesCards"/>
    </section>
    <section>
      <CardContainer :cards="mapasCards"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Pronósticos del CNH</h1>
      <br>
      <CardContainer :cards="pronosticosCards"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Ciclones Tropicales y Extratropicales</h1>
      <br>
      <CardContainer :cards="extratropicalesCards"/>
    </section>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"
import ButtonContainer from '@/components/ButtonContainer.vue'

import jsonCiclonesCards from "@/assets/json/huracanes_ondas/ciclonesCards.json"
import jsonMapasCards from "@/assets/json/huracanes_ondas/mapasCards.json"
import jsonPronosticosCards from "@/assets/json/huracanes_ondas/pronosticosCards.json"
import jsonExtratropicalesCards from "@/assets/json/huracanes_ondas/extratropicalesCards.json"
import jsonHeaderButtons from "@/assets/json/huracanes_ondas/headerButtons.json"

export default {
  name: 'HuracanesOndas',
  components: {
    HeaderComp,
    ButtonContainer,
    CardContainer,
  },
  data() {
    return {
      ciclonesCards: jsonCiclonesCards,
      mapasCards: jsonMapasCards,
      pronosticosCards: jsonPronosticosCards,
      extratropicalesCards: jsonExtratropicalesCards,
      headerButtons: jsonHeaderButtons,
    }
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .huracanes-ondas {
  margin-top: 13vmin;
  }
}
</style>