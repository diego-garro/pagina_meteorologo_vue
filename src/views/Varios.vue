<template>
  <div class="varios">
    <section>
      <HeaderComp title="Cámaras Viales y Datos Varios"/>
    </section>
    <br><hr>
    <section>
      <ButtonContainer :buttons="camarasVialesButtons"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Cámaras IMN Azotea</h1>
      <br>
      <ButtonContainer :buttons="camarasImnButtons"/>
    </section>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import ButtonContainer from '@/components/ButtonContainer.vue'

import jsonCamarasVialesButtons from "@/assets/json/varios/camarasVialesButtons.json"
import jsonCamarasImnButtons from "@/assets/json/varios/camarasImnButtons.json"

export default {
  name: 'Varios',
  components: {
    HeaderComp,
    ButtonContainer,
  },
  data() {
    return {
      camarasVialesButtons: jsonCamarasVialesButtons,
      camarasImnButtons: jsonCamarasImnButtons,
    }
  }
}
</script>

<style>
@media (max-width: 768px) {
  .varios {
  margin-top: 13vmin;
  }
}
</style>
