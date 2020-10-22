<template>
    <div class="reanalisys-resumen">
        <section>
            <HeaderComp title="Datos de Reanálisis e Históricos" subtitle="Modelado y Reanálisis de datos"/>
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
    name: 'ReanalisysResumen',
    components: {
        HeaderComp,
        CardContainer,
    },
    data() {
        return {
            cards: [
                // Primer bloque 0 - 5
                {
                    title: "Reanalysis NCEP/NCAR",
                    img: "imagenes/ncepncar.png",
                    link: "https://psl.noaa.gov/cgi-bin/data/composites/printpage.pl",
                    big: false,
                },
                {
                    title: "Climate Reanalizer",
                    img: "imagenes/climate-reanalizer.png",
                    link: "https://climatereanalyzer.org/",
                    big: false,
                },
                {
                    title: "Reanalysis Nuevo",
                    img: "imagenes/reanalysis-nuevo.png",
                    link: "http://apdrc.soest.hawaii.edu/las/v6/dataset",
                    big: false,
                },
                {
                    title: "Reanalysis Océano",
                    img: "imagenes/reanalysis-oceano.png",
                    link: "https://www.cpc.ncep.noaa.gov/products/GODAS/monthly.shtml",
                    big: false,
                },
                {
                    title: "CPC-ENSO",
                    img: "imagenes/soil-moisture.png",
                    link: "https://www.cpc.ncep.noaa.gov/products/Global_Monsoons/American_Monsoons/soil_olr_monitoring.shtml",
                    big: false,
                },
                {
                    title: "CLIMEX (Reanálisis Holandés)",
                    img: "imagenes/climex.png",
                    link: "http://climexp.knmi.nl/start.cgi?id=someone@somewhere",
                    big: false,
                },
                {
                    title: "ERA-40",
                    img: "imagenes/era-40.png",
                    link: "https://software.ecmwf.int/static/ERA-40_Atlas/docs/index.html",
                    big: false,
                },
                {
                    title: "Resumen mensual (datos)",
                    img: "imagenes/resumen-mensual.png",
                    link: "http://lluvia.imn.ac.cr/boletin/",
                    big: false,
                },
                {
                    title: "Climate Information Toolkit",
                    img: "imagenes/clinfotoolkit.png",
                    link: "http://clik.apcc21.org/",
                    big: false,
                },
                
            ]
        }
    }
}
</script>

<style>
@media (max-width: 768px) {
  .reanalisys-resumen {
    margin-top: 13vmin;
  }
}
</style>