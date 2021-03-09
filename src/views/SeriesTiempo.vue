<template>
  <div class="series-tiempo">
    <section>
      <HeaderComp title="Series de Tiempo" subtitle="Productos puntuales del IMN"/>
      <br>
      <ButtonContainer :buttons="headerButtons"/>
    </section>
    <br><hr>
    <section>
      <CardContainer :cards="seriesCards"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Meteogramas WXCaster para los Aeropuertos</h1>
      <ButtonContainer :buttons="meteogramasButtons"/>
    </section>
    <br>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"
import ButtonContainer from "@/components/ButtonContainer.vue"

import jsonSeriesCards from "@/assets/json/series_tiempo/seriesCards.json"
import jsonHeaderButtons from "@/assets/json/series_tiempo/headerButtons.json"
import jsonMeteogramasButtons from "@/assets/json/series_tiempo/meteogramasButtons.json"

export default {
  name: 'SeriesTiempo',
  components: {
    HeaderComp,
    CardContainer,
    ButtonContainer,
  },
  data() {
    return {
      seriesCards: jsonSeriesCards,
      headerButtons: jsonHeaderButtons,
      meteogramasButtons: jsonMeteogramasButtons,
    }
  }
}
</script>

<style>
@media (max-width: 768px) {
  .series-tiempo {
  margin-top: 13vmin;
  }
}
</style>