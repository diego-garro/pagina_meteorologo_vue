<template>
    <div class="series-tiempo">
        <section>
            <HeaderComp title="Series de Tiempo" subtitle="Productos puntuales del IMN"/>
            <br>
            <ButtonContainer :buttons="buttons.slice(0, 2)"/>
        </section>
        <br><hr>
        <section>
            <CardContainer :cards="cards.slice(0, 3)"/>
            <br><hr>
            <h1 class="content-title">Meteogramas WXCaster para los Aeropuertos</h1>
            <ButtonContainer :buttons="buttons.slice(2)"/>
        </section>
        <br>
    </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"
import ButtonContainer from "@/components/ButtonContainer.vue"

export default {
    name: 'SeriesTiempo',
    components: {
        HeaderComp,
        CardContainer,
        ButtonContainer,
    },
    data() {
        return {
            cards: [
                // Primer bloque 0 - final
                {
                    title: "Ready",
                    img: "imagenes/ready.jpg",
                    link: "https://ready.arl.noaa.gov/READYcmet.php",
                    big: false,
                },
                {
                    title: "Meteograma WXCaster",
                    img: "imagenes/meteograma-charlie.png",
                    link: "http://charlie.wxcaster.com/cgi-bin/GFSCrosssectionsWxCaster.cgi?model=GFS&raster=2&vector=0&clouds=0&STATIONID=mroc",
                    big: false,
                },
                {
                    title: "Meteograma WRF5",
                    img: "imagenes/meteograma-wrf5.png",
                    link: "http://wrf5.imn.ac.cr/meteogramas.html",
                    big: false,
                }
            ],
            buttons: [
                {
                    title: 'WRF8',
                    link: 'http://wrf8.imn.ac.cr/series.html',
                },
                {
                    title: 'Varias Series y Meteogramas',
                    link: 'http://intranet.imn.ac.cr/estaciones/graficos/',
                },
                {
                    title: 'MROC',
                    link: 'http://charlie.wxcaster.com/cgi-bin/GFSCrosssectionsWxCaster.cgi?model=GFS&raster=2&vector=0&clouds=0&STATIONID=mroc',
                },
                {
                    title: 'MRLB',
                    link: 'http://charlie.wxcaster.com/cgi-bin/GFSCrosssectionsWxCaster.cgi?model=GFS&raster=2&vector=0&clouds=0&STATIONID=mrlb',
                },
                {
                    title: 'MRPV',
                    link: 'http://charlie.wxcaster.com/cgi-bin/GFSCrosssectionsWxCaster.cgi?model=GFS&raster=2&vector=0&clouds=0&STATIONID=mrpv',
                },
                {
                    title: 'MRLM',
                    link: 'http://charlie.wxcaster.com/cgi-bin/GFSCrosssectionsWxCaster.cgi?model=GFS&raster=2&vector=0&clouds=0&STATIONID=mrlm',
                },
                
            ]
        }
    }
}
</script>

<style>
@media (max-width: 768px) {
  .series-tiempo {
    margin-top: 13vmin;
  }
}
</style>