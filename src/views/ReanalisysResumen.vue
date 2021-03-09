<template>
  <div class="reanalisys-resumen">
    <section>
      <HeaderComp title="Datos de Reanálisis e Históricos"/>
    </section>
    <hr>
    <section>
      <h1 class="content-title">Modelado y Reanálisis de datos</h1>
      <br>
      <CardContainer :cards="resumenCards"/>
    </section>
    <br>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"

import jsonResumenCards from "@/assets/json/reanalisys_resumen/resumenCards.json"

export default {
  name: 'ReanalisysResumen',
  components: {
    HeaderComp,
    CardContainer,
  },
  data() {
    return {
      resumenCards: jsonResumenCards,
    }
  }
}
</script>

<style>
@media (max-width: 768px) {
  .reanalisys-resumen {
  margin-top: 13vmin;
  }
}
</style>