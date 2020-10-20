<template>
    <div class="oscilaciones">
        <section>
            <HeaderComp title="Oscilaciones de Alta y Baja Frecuencia" subtitle="AMO - PDO - ENSO - ONI - NAO - AO - MJO - KELVIN"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Oscilaciones de alta frecuencia (MJO, Kelvin, AO, NAO)</h1>
            <br>
            <CardContainer :cards="cards.slice(0, 11)"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Oscilaciones de baja frecuencia (ENOS, PDO, AMO)</h1>
            <br>
            <CardContainer :cards="cards.slice(11)"/>
        </section>
    </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"

export default {
    name: 'Oscilaciones',
    components: {
        HeaderComp,
        CardContainer,
    },
    data() {
        return {
            cards: [
                // Primer bloque 0 - 10
                {
                    title: "MJO Análisis Semanal",
                    img: "imagenes/mjo-analisis-semanal.png",
                    link: "https://www.cpc.ncep.noaa.gov/products/precip/CWlink/MJO/mjoupdate.pdf",
                    big: false,
                },
                {
                    title: "MJO Michael J. Ventrice",
                    img: "imagenes/mjo-ventrice.png",
                    link: "http://mikeventrice.weebly.com/mjo.html",
                    big: false,
                },
                {
                    title: "MJO-VP-Kelvin",
                    img: "imagenes/mjo-vp-kelvin.png",
                    link: "http://www.atmos.albany.edu/student/ventrice/real_time/maps/waves/westHem/28.gif",
                    big: false,
                },
                {
                    title: "MJO Index Forecast",
                    img: "imagenes/mjo-index.png",
                    link: "https://www.cpc.ncep.noaa.gov/products/precip/CWlink/MJO/CLIVAR/ALL_emean_phase_full.gif",
                    big: false,
                },
                {
                    title: "MJO con ENOS",
                    img: "imagenes/mjo-enso.png",
                    link: "http://www.atmos.albany.edu/student/ventrice/real_time/last.90d.RMMPhase.png",
                    big: false,
                },
                {
                    title: "RMM Phase",
                    img: "imagenes/rmm1-rmm2.png",
                    link: "http://www.bom.gov.au/climate/mjo/graphics/rmm.phase.Last40days.gif",
                    big: false,
                },
                {
                    title: "Tropical Monitoring (MJO)",
                    img: "imagenes/tropical-monitoring.png",
                    link: "https://ncics.org/portfolio/monitor/mjo/",
                    big: false,
                },
                {
                    title: "Onda Kelvin",
                    img: "imagenes/onda-kelvin.png",
                    link: "http://www.atmos.albany.edu/student/ventrice/real_time/maps/kelvin/total/vp/global_analyses.html",
                    big: false,
                },
                {
                    title: "ENOS - Modelo Japonés",
                    img: "imagenes/japones-ENOS.png",
                    link: "http://ds.data.jma.go.jp/tcc/tcc/products/elnino/elmonout.html#fig1",
                    big: false,
                },
                {
                    title: "Osc. del Atlántico Norte (NAO)",
                    img: "imagenes/nao-sprd2.gif",
                    link: "https://www.cpc.ncep.noaa.gov/products/precip/CWlink/pna/nao.sprd2.gif",
                    big: false,
                },
                {
                    title: "Oscilación Ártica (AO)",
                    img: "imagenes/ao-sprd2.gif",
                    link: "https://www.cpc.ncep.noaa.gov/products/precip/CWlink/daily_ao_index/ao.sprd2.gif",
                    big: false,
                },
                // Segundo bloque 11 - final
                {
                    title: "AMO",
                    img: "imagenes/amo-data.png",
                    link: "https://psl.noaa.gov/data/correlation/amon.us.long.mean.data",
                    big: false,
                },
                {
                    title: "ENOS Current Status",
                    img: "imagenes/enos-current.png",
                    link: "https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/lanina/enso_evolution-status-fcsts-web.pdf",
                    big: false,
                },
                {
                    title: "PDO",
                    img: "imagenes/pdo.png",
                    link: "https://www.ncdc.noaa.gov/teleconnections/pdo/",
                    big: false,
                },
                {
                    title: "ENOS-Modoki",
                    img: "imagenes/enos-modoki.png",
                    link: "http://www.jamstec.go.jp/aplinfo/sintexf/index.html",
                    big: false,
                },
                {
                    title: "Datos Boyas",
                    img: "imagenes/datos-boyas.png",
                    link: "https://www.pmel.noaa.gov/tao/drupal/disdel/",
                    big: false,
                },
                {
                    title: "SST Caribe",
                    img: "imagenes/sst-caribe.png",
                    link: "https://www.tropicaltidbits.com/analysis/ocean/carssta.png",
                    big: false,
                },
                {
                    title: "IOS Mensual",
                    img: "imagenes/ios-mensual.png",
                    link: "https://www.ncdc.noaa.gov/teleconnections/enso/indicators/soi/",
                    big: false,
                },
                {
                    title: "Índice ONI",
                    img: "imagenes/indice-oni.png",
                    link: "https://origin.cpc.ncep.noaa.gov/products/analysis_monitoring/ensostuff/ONI_v5.php",
                    big: false,
                },
                {
                    title: "IOS NOAA",
                    img: "imagenes/ios-noaa.png",
                    link: "https://www.cpc.ncep.noaa.gov/products/CDB/Tropics/table1.shtml",
                    big: false,
                }
            ]
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