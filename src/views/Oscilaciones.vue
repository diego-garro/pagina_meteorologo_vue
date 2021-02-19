<template>
    <div class="oscilaciones">
        <section>
            <HeaderComp title="Oscilaciones de Alta y Baja Frecuencia" subtitle="AMO - PDO - ENSO - ONI - NAO - AO - MJO - KELVIN"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Oscilaciones de alta frecuencia (MJO, Kelvin, AO, NAO)</h1>
            <br>
            <CardContainer :cards="altaFrecuenciaCards"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Oscilaciones de baja frecuencia (ENOS, PDO, AMO)</h1>
            <br>
            <CardContainer :cards="bajaFrecuenciaCards"/>
        </section>
    </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"

import jsonAltaFrecuenciaCards from "@/assets/json/oscilaciones/altaFrecuenciaCards.json"
import jsonBajaFrecuenciaCards from "@/assets/json/oscilaciones/bajaFrecuenciaCards.json"

export default {
    name: 'Oscilaciones',
    components: {
        HeaderComp,
        CardContainer,
    },
    data() {
        return {
            altaFrecuenciaCards: jsonAltaFrecuenciaCards,
            bajaFrecuenciaCards: jsonBajaFrecuenciaCards,
        }
    }
}
</script>

<style>
@media (max-width: 768px) {
  .oscilaciones {
    margin-top: 13vmin;
  }
}
</style>