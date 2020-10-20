<template>
    <div class="modelos-climaticos">
        <section>
            <HeaderComp title="Modelos Estacionales CFS, NMME" subtitle="Pronóstico Estacional"/>
        </section>
        <br><hr>
        <section>
            <CardContainer :cards="cards.slice(0, 4)"/>
        </section>
        <br><hr>
        <section>
            <ButtonContainer :buttons="buttons"/>
        </section>
        <br><hr>
        <section>
            <CardContainer :cards="cards.slice(4)"/>
        </section>
    </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"
import ButtonContainer from "@/components/ButtonContainer.vue"

export default {
    name: 'ModelosClimaticos',
    components: {
        HeaderComp,
        CardContainer,
        ButtonContainer,
    },
    data() {
        return {
            cards: [
                // Primer bloque 0 - 3
                {
                    title: "CFS v2 (varios)",
                    img: "imagenes/cfs-model.png",
                    link: "https://www.cpc.ncep.noaa.gov/products/CFSv2/CFSv2seasonal.shtml",
                    big: false,
                },
                {
                    title: "SST-Global",
                    img: "imagenes/sst-global.png",
                    link: "https://www.tropicaltidbits.com/analysis/ocean/cdas-sflux_ssta_global_1.png",
                    big: false,
                },
                {
                    title: "NMME",
                    img: "imagenes/nmme-model.png",
                    link: "https://www.tropicaltidbits.com/analysis/models/?model=nmme&region=us&pkg=T2ma&runtime=2017080800&fh=1&xpos=0&ypos=4",
                    big: false,
                },
                {
                    title: "CPTEC Brasil",
                    img: "imagenes/cptec-brasil.png",
                    link: "http://clima1.cptec.inpe.br/",
                    big: false,
                },
                // Segundo bloque 4 - final
                {
                    title: "Climate Prediction Center - International Desks",
                    img: "imagenes/cpc-id.png",
                    link: "https://www.cpc.ncep.noaa.gov/products/international/index.shtml",
                    big: true,
                },
                {
                    title: "Modelo Europeo",
                    img: "imagenes/europeo.png",
                    link: "https://www.ecmwf.int/en/forecasts/charts/catalogue/?facets=Range,Medium%20(15%20days)%3BType,Forecasts",
                    big: true,
                },
                {
                    title: "Long Range Forecast Multi-Model Ensemble",
                    img: "imagenes/wmolc.png",
                    link: "https://www.wmolc.org/",
                    big: true,
                },
            ],
            buttons: [
                {
                    title: 'CPT (Datos)',
                    link: 'ftp://ftp.cpc.ncep.noaa.gov/International/nmme/',
                },
                {
                    title: 'CWRF (Costa Rica)',
                    link: 'http://centroclima.org/modelo-de-precipitacion-acumulada-para-costa-rica-samre3/',
                },
                {
                    title: 'WRF Clima (IDEAM)',
                    link: 'http://bart.ideam.gov.co/wrfideam/',
                },
                
            ]
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