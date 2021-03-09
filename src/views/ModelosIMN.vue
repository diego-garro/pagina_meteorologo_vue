<template>
  <div class="modelos-imn">
    <section>
      <HeaderComp title="Modelos numéricos regionales"/>
    </section>
    <br><hr>
    <section>
      <CardContainer :cards="modelosCards"/>
    </section>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"

import jsonModelosCards from "@/assets/json/modelos_imn/modelosCards.json"

export default {
  name: 'ModelosIMN',
  components: {
    HeaderComp,
    CardContainer,
  },
  data() {
    return {
      modelosCards: jsonModelosCards,
    }
  }
}
</script>

<style>
@media (max-width: 768px) {
  .modelos-imn {
  margin-top: 13vmin;
  }
}
</style>