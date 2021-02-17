<template>
  <div class="datos-seguimiento">
    <section>
      <HeaderComp title="Datos de Seguimiento" />
    </section>
    <br />
    <hr />
    <section>
        <CardContainer :cards="imnEstacionesCards"/>
    </section>
    <br><hr>
    <section>
        <ButtonContainer :buttons="estacionesVariasButtons"/>
    </section>
    <br><hr>
    <section>
        <CardContainer :cards="otrosDatosCards"/>
    </section>
    <br><hr>
    <section>
        <h1 class="content-title">Compendio de estaciones</h1>
        <br>
        <ButtonContainer :buttons="compendioEstacionesButtons"/>
    </section>
    <br><hr>
    <section>
        <h1 class="content-title">Hidroestimadores</h1>
        <br>
        <ButtonContainer :buttons="hidroestimadoresButtons"/>
    </section>
    <br>
    <br>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"
import ButtonContainer from '@/components/ButtonContainer.vue'

import jsonimnEstacionesCards from "@/assets/json/datos_seguimiento/imnEstaciones.json"
import jsonOtrosDatosCards from "@/assets/json/datos_seguimiento/otrosDatos.json"
import jsonEstacionesVariasButtons from "@/assets/json/datos_seguimiento/otrosDatos.json"
import jsonCompendioEstacionesButtons from "@/assets/json/datos_seguimiento/compendioEstaciones.json"
import jsonHidroestimadoresButtons from "@/assets/json/datos_seguimiento/hidroestimadores.json"

export default {
  name: "DatosSeguimiento",
  components: {
    HeaderComp,
    CardContainer,
    ButtonContainer,
  },
  data() {
    return {
      // Cards
      imnEstacionesCards: jsonimnEstacionesCards,
      otrosDatosCards: jsonOtrosDatosCards,
      // Buttons
      estacionesVariasButtons: jsonEstacionesVariasButtons,
      compendioEstacionesButtons: jsonCompendioEstacionesButtons,
      hidroestimadoresButtons: jsonHidroestimadoresButtons,
    };
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .datos-seguimiento {
    margin-top: 13vmin;
  }
}
</style>
