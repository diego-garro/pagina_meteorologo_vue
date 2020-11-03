<template>
    <div class="incendios-forestales">
        <section>
            <HeaderComp title="Incendios Forestales"/>
        </section>
        <br><hr>
        <section>
            <CardContainer :cards="cards"/>
        </section>
        <br>
    </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"

export default {
    name: 'SeriesTiempo',
    components: {
        HeaderComp,
        CardContainer,
    },
    data() {
        return {
            cards: [
                // Primer bloque 0 - final
                {
                    title: "CONABIO",
                    img: "imagenes/conabio.png",
                    link: "http://incendios.conabio.gob.mx/",
                    big: false,
                },
                {
                    title: "CONIFOR",
                    img: "imagenes/conifor.png",
                    link: "http://gestion.incendiosforestales.cr/",
                    big: false,
                },
                {
                    title: "NASA",
                    img: "imagenes/incendios-NASA.jpg",
                    link: "https://earthdata.nasa.gov/earth-observation-data/near-real-time/firms/active-fire-data",
                    big: false,
                },
                {
                    title: "Global Forest Watch Fires",
                    img: "imagenes/global-forest-watch.png",
                    link: "https://fires.globalforestwatch.org/map/#activeLayers=viirsFires%2CactiveFires&activeBasemap=topo&activeImagery=&planetCategory=PLANET-MONTHLY&planetPeriod=null&x=-82.628860&y=10.763970&z=6",
                    big: false,
                }
            ]
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