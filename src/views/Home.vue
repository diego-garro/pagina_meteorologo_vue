<template>
  <div class="home">
    <HeaderComp :title="header.title" :img="header.imgPath"/>
    <section>
      <CardContainer :cards="headerCards"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Rayos actuales e imagen de infrarrojo (loop)</h1>
      <br>
      <CardContainer :cards="rayosInfrarrojoCards"/>
      <ButtonContainer :buttons="rayosInfrarrojoButtons"/> 
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Modelos Numéricos</h1>
      <br>
      <CardContainer :cards="modelosCards"/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import CardContainer from '@/components/CardContainer.vue'
import ButtonContainer from '@/components/ButtonContainer.vue'

import jsonHeaderCards from "@/assets/json/home/headerCards.json"
import jsonRayosInfrarrojoCards from "@/assets/json/home/rayosInfrarrojoCards.json"
import jsonModelosCards from "@/assets/json/home/modelosCards.json"
import jsonRayosInfrarrojoButtons from "@/assets/json/home/rayosInfrarrojoButtons.json"


export default {
  name: 'Home',
  components: {
    HeaderComp,
    CardContainer,
    ButtonContainer,
  },
  data() {
    return {
      header: {
        title: 'Departamento de Meteorología Sinóptica y Aeronáutica',
        imgPath: 'logos/IMN-LogoRedes-RGB.png',
      },
      headerCards: jsonHeaderCards,
      rayosInfrarrojoCards: jsonRayosInfrarrojoCards,
      modelosCards: jsonModelosCards,
      rayosInfrarrojoButtons: jsonRayosInfrarrojoButtons,
    }
  }
}
</script>

<style>

</style>
