<template>
  <div class="modelos-globales">
    <section>
      <HeaderComp title="Modelos Numéricos Globales y de Mesoescala"/>
    </section>
    <hr>
    <section>
      <h1 class="content-title">GFS y Europeo</h1>
      <br>
      <CardContainer :cards="gfsEuropeoCards"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Modelos de Fretes, Mediano Plazo y Químicos</h1>
      <br>
      <CardContainer :cards="medianoPlazoCards"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Modelos Numéricos Especiales</h1>
      <br>
      <h2 class="content-note">Modelos numéricos para el pronóstico de huracanes y polvo del Sahara</h2>
      <br>
      <CardContainer :cards="especialesCards"/>
    </section>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"

import jsonGfsEuropeoCards from "@/assets/json/modelos_globales/gfsEuropeoCards.json"
import jsonMedianoPlazoCards from "@/assets/json/modelos_globales/medianoPlazoCards.json"
import jsonEspecialesCards from "@/assets/json/modelos_globales/especialesCards.json"

export default {
  name: 'ModelosGlobales',
  components: {
    HeaderComp,
    CardContainer,
  },
  data() {
    return {
      gfsEuropeoCards: jsonGfsEuropeoCards,
      medianoPlazoCards: jsonMedianoPlazoCards,
      especialesCards: jsonEspecialesCards,
    }
  }
}
</script>

<style>
@media (max-width: 768px) {
  .modelos-globales {
  margin-top: 13vmin;
  }
}
</style>