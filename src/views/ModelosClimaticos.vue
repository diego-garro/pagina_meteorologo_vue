<template>
    <div class="modelos-climaticos">
        <section>
            <HeaderComp title="Modelos Estacionales CFS, NMME"/>
        </section><hr>
        <section>
            <h1 class="content-title">Pronóstico Estacional</h1>
            <br>
            <CardContainer :cards="estacionalCards"/>
        </section>
        <br><hr>
        <section>
            <ButtonContainer :buttons="buttons"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Largo Plazo</h1>
            <br>
            <CardContainer :cards="largoPlazoCards"/>
        </section>
    </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"
import ButtonContainer from "@/components/ButtonContainer.vue"

import jsonEstacionalCards from "@/assets/json/modelos_climaticos/estacionalCards.json"
import jsonLargoPlazoCards from "@/assets/json/modelos_climaticos/largoPlazoCards.json"
import jsonClimaticosButtons from "@/assets/json/modelos_climaticos/climaticosButtons.json"

export default {
    name: 'ModelosClimaticos',
    components: {
        HeaderComp,
        CardContainer,
        ButtonContainer,
    },
    data() {
        return {
            estacionalCards: jsonEstacionalCards,
            largoPlazoCards: jsonLargoPlazoCards,
            buttons: jsonClimaticosButtons,
        }
    }
}
</script>

<style>
@media (max-width: 768px) {
  .modelos-climaticos {
    margin-top: 13vmin;
  }
}
</style>