<template>
    <div class="huracanes-ondas">
        <section>
            <HeaderComp title="Seguimiento CNH y otros"/>
            <ButtonContainer :buttons="buttons"/>
        </section>
        <br><hr>
        <section>
            <CardContainer :cards="cards.slice(0, 2)"/>
        </section>
        <section>
            <CardContainer :cards="cards.slice(2, 5)"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Pronósticos del CNH</h1>
            <br>
            <CardContainer :cards="cards.slice(5, 8)"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Ciclones Tropicales y Extratropicales</h1>
            <br>
            <CardContainer :cards="cards.slice(8)"/>
        </section>
    </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"
import ButtonContainer from '@/components/ButtonContainer.vue'

export default {
    name: 'HuracanesOndas',
    components: {
        HeaderComp,
        ButtonContainer,
        CardContainer,
    },
    data() {
        return {
            cards: [
                // Primer bloque 0 - 1
                {
                    title: "Ciclones Atlántico",
                    img: "imagenes/TC-atlantico.png",
                    link: "https://www.nhc.noaa.gov/cyclones/?atlc",
                    big: true,
                },
                {
                    title: "Ciclones Pacífico",
                    img: "imagenes/TC-pacifico.png",
                    link: "https://www.nhc.noaa.gov/cyclones/?epac",
                    big: true,
                },
                // Segundo bloque 2 - 4
                {
                    title: "Análisis de superficie Am.",
                    img: "imagenes/sigwx.png",
                    link: "https://www.nhc.noaa.gov/tafb_latest/USA_latest.gif",
                    big: false,
                },
                {
                    title: "Análisis de superficie Atl.",
                    img: "imagenes/sigwx-colors.png",
                    link: "https://www.nhc.noaa.gov/tafb_latest/WATL_latest.gif",
                    big: false,
                },
                {
                    title: "Hovmoller",
                    img: "imagenes/hovmoller.png",
                    link: "http://bmcnoldy.rsmas.miami.edu/tropics/hovmoller/",
                    big: false,
                },
                // Tercer bloque 5 - 7
                {
                    title: "24 Horas",
                    img: "imagenes/cnh-fcst-24h.png",
                    link: "https://www.nhc.noaa.gov/tafb_latest/atlsfc24_latestBW.gif",
                    big: false,
                },
                {
                    title: "48 Horas",
                    img: "imagenes/cnh-fcst-48h.png",
                    link: "https://www.nhc.noaa.gov/tafb_latest/atlsfc48_latestBW.gif",
                    big: false,
                },
                {
                    title: "72 Horas",
                    img: "imagenes/cnh-fcst-72h.png",
                    link: "https://www.nhc.noaa.gov/tafb_latest/atlsfc72_latestBW.gif",
                    big: false,
                },
                // Cuarto bloque 8 - final
                {
                    title: "Fomación de ciclones",
                    img: "imagenes/cyclone-prob.png",
                    link: "https://www.ssd.noaa.gov/PS/TROP/TCFP/atlantic.html",
                    big: false,
                },
                {
                    title: "Tormentas Activas",
                    img: "imagenes/hwrf.png",
                    link: "https://www.emc.ncep.noaa.gov/gc_wmb/vxt/HWRF/index.php",
                    big: false,
                },
                {
                    title: "Trayectoria de Ciclones",
                    img: "imagenes/monterrey.png",
                    link: "https://www.nrlmry.navy.mil/tc-bin/tc_home2.cgi?ACTIVES=20-IO-01B.AMPHAN,20-ATL-01L.ONE,20-WPAC-01W.VONGFONG&SIZE=full&PHOT=yes&NAV=tc&ATCF_BASIN=al&ATCF_YR=2020&ATCF_FILE=/SATPRODUCTS/kauai_data/www/atcf_web/public_html/image_archives/2020/al012020.20051612.gif&CURRENT_ATCF_FILE=/SATPRODUCTS/kauai_data/www/atcf_web/public_html/image_archives/2020/al012020.20051612.gif&CURRENT=20200516.2330.goes17.x.ir1km_bw.01LONE.30kts-1008mb-280N-788W.100pc.jpg&CURRENT_ATCF=al012020.20051612.gif&ATCF_NAME=al012020&ATCF_DIR=/SATPRODUCTS/kauai_data/www/atcf_web/public_html/image_archives/2020&AGE=Latest&MO=MAY&BASIN=ATL&STYLE=tables&YEAR=2020&YR=20&STORM_NAME=01L.ONE&ARCHIVE=active&AREA=pacific/southern_hemisphere&DIR=/SATPRODUCTS/TC/tc20/ATL/01L.ONE/ir/geo/1km_bw&TYPE=ssmi&PROD=gif",
                    big: false,
                },
                {
                    title: "Cyclone phase evolution",
                    img: "imagenes/cyclone-evo.png",
                    link: "http://moe.met.fsu.edu/cyclonephase/",
                    big: false,
                },
                {
                    title: "Trayectoria de Ciclones",
                    img: "imagenes/ibtracs.png",
                    link: "http://www.atms.unca.edu/ibtracs/ibtracs_current/index.php",
                    big: false,
                },
                {
                    title: "Histórico de Ciclones NOAA",
                    img: "imagenes/noaa-historico.png",
                    link: "https://coast.noaa.gov/hurricanes/#map=4/32/-80",
                    big: false,
                },
                {
                    title: "tropicalatlantic.com",
                    img: "imagenes/tropical-atlantic.png",
                    link: "http://tropicalatlantic.com/",
                    big: false,
                },
            ],
            buttons: [
                // Primer bloque 0 - final
                {
                title: 'Centro Nacional de Huracanes',
                link: 'https://www.nhc.noaa.gov/marine/'
                },
                {
                title: 'Ciclones Colorado State University',
                link: 'https://seasonalhurricanepredictions.bsc.es/'
                },
            ]
        }
    }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .huracanes-ondas {
    margin-top: 13vmin;
  }
}
</style>