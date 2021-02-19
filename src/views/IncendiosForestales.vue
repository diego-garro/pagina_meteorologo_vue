<template>
    <div class="incendios-forestales">
        <section>
            <HeaderComp title="Incendios Forestales"/>
        </section>
        <br><hr>
        <section>
            <CardContainer :cards="incendiosCards"/>
        </section>
        <br>
    </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"

import jsonIncendiosCards from "@/assets/json/incendios_forestales/incendiosCards.json"

export default {
    name: 'SeriesTiempo',
    components: {
        HeaderComp,
        CardContainer,
    },
    data() {
        return {
            // Cards
            incendiosCards: jsonIncendiosCards,
        }
    }
}
</script>

<style>
@media (max-width: 768px) {
  .incendios-forestales {
    margin-top: 13vmin;
  }
}
</style>