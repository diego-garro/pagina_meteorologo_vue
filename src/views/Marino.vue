<template>
    <div class="marino">
        <section>
            <HeaderComp title="Modelos Numéricos para el Pronóstico de Oleaje y Mareas"/>
        </section>
        <br><hr>
        <section>
            <CardContainer :cards="cards"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Datos de Boyas Buoyweather</h1>
            <br>
            <ButtonContainer :buttons="buttons"/>
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
                    title: "Windy",
                    img: "imagenes/windy-marino.png",
                    link: "https://www.windy.com/es/-Olas-waves?waves,13.368,-82.529,5",
                    big: false,
                },
                {
                    title: "Wave Watch III",
                    img: "imagenes/wave-watch-III.png",
                    link: "https://polar.ncep.noaa.gov/waves/",
                    big: false,
                },
                {
                    title: "MIO-CIMAR",
                    img: "imagenes/mio-cimar.png",
                    link: "http://www.miocimar.ucr.ac.cr/",
                    big: false,
                },
                {
                    title: "Meteorología Marina - Brasil",
                    img: "imagenes/wave-dir.png",
                    link: "http://ondas.cptec.inpe.br/",
                    big: false,
                },
                {
                    title: "Surfline Costa Rica",
                    img: "imagenes/surfline-costa-rica.png",
                    link: "https://www.surfline.com/surf-reports-forecasts-cams/costa-rica/3624060",
                    big: false,
                },
                {
                    title: "Surf Forecast",
                    img: "imagenes/surf-forecast.png",
                    link: "https://es.surf-forecast.com/weather_maps",
                    big: false,
                },
                {
                    title: "Tides Forecast",
                    img: "imagenes/tides-forecast.png",
                    link: "https://www.tide-forecast.com/",
                    big: false,
                }
                
            ],
            buttons: [
                {
                    title: 'Boya Guanacaste',
                    link: 'http://www.buoyweather.com/wxnav6.jsp?region=CR&program=nww3BW1&grb=enp&latitude=10.2&longitude=-86.3&zone=-6&units=e',
                },
                {
                    title: 'Boya Limón',
                    link: 'http://www.buoyweather.com/wxnav6.jsp?region=CR&program=nww3BW1&grb=wna&latitude=10.5&longitude=-82.0&zone=-6&units=e',
                },
                {
                    title: "Boya Pacífico Sur",
                    link: 'http://www.buoyweather.com/wxnav6.jsp?region=CR&program=nww3BW1&grb=enp&latitude=8.3&longitude=-85.0&zone=-6&units=e',
                },
                {
                    title: "Boya Isla del Coco",
                    link: 'http://www.buoyweather.com/wxnav6.jsp?region=CR&program=nww3BW1&grb=enp&latitude=5.32&longitude=-87.05&zone=-6&units=e',
                }
            ]
        }
    }
}
</script>

<style>
@media (max-width: 768px) {
  .marino {
    margin-top: 13vmin;
  }
}
</style>