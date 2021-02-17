<template>
    <div class="dispersion-ceniza">
        <section>
            <HeaderComp title="Modelos Lagrangianos de Dispersión de Ceniza"/>
            <br>
            <ButtonContainer :buttons="camarasButtons"/>
        </section>
        <br><hr>
        <section>
            <CardContainer :cards="dispersionCards"/>
        </section>
        <br>
    </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"
import ButtonContainer from "@/components/ButtonContainer.vue"

import jsonCamarasButtons from "@/assets/json/dispersion_ceniza/camarasButtons.json"
import jsonDispersionCards from "@/assets/json/dispersion_ceniza/dispersionCards.json"

export default {
    name: 'SeriesTiempo',
    components: {
        HeaderComp,
        CardContainer,
        ButtonContainer,
    },
    data() {
        return {
            dispersionCards: jsonDispersionCards,
            camarasButtons: jsonCamarasButtons,
        }
    }
}
</script>

<style>
@media (max-width: 768px) {
  .dispersion-ceniza {
    margin-top: 13vmin;
  }
}
</style>