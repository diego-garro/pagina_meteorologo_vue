<template>
  <div class="marino">
    <section>
      <HeaderComp title="Modelos Numéricos para el Pronóstico de Oleaje y Mareas"/>
    </section>
    <br><hr>
    <section>
      <CardContainer :cards="marinoCards"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Datos de Boyas Buoyweather</h1>
      <br>
      <ButtonContainer :buttons="boyasButtons"/>
    </section>
    <br>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"
import ButtonContainer from "@/components/ButtonContainer.vue"

import jsonMarinoCards from "@/assets/json/marino/marinoCards.json"
import jsonBoyasButtons from "@/assets/json/marino/boyasButtons.json"

export default {
  name: 'SeriesTiempo',
  components: {
    HeaderComp,
    CardContainer,
    ButtonContainer,
  },
  data() {
    return {
      // Cards
      marinoCards: jsonMarinoCards,
      // Buttons
      boyasButtons: jsonBoyasButtons,
    }
  }
}
</script>

<style>
@media (max-width: 768px) {
  .marino {
  margin-top: 13vmin;
  }
}
</style>