<template>
    <div class="modelos-globales">
        <section>
            <HeaderComp title="Modelos Numéricos Globales y de Mesoescala" subtitle="GFS y Europeo"/>
        </section>
        <br><hr>
        <section>
            <CardContainer :cards="cards.slice(0, 8)"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Modelos de Fretes, Mediano Plazo y Químicos</h1>
            <br>
            <CardContainer :cards="cards.slice(8, 19)"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Modelos Numéricos Especiales</h1>
            <br>
            <h2 class="content-note">Modelos numéricos para el pronóstico de huracanes y polvo del Sahara</h2>
            <br>
            <CardContainer :cards="cards.slice(19)"/>
        </section>
    </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"

export default {
    name: 'ModelosGlobales',
    components: {
        HeaderComp,
        CardContainer,
    },
    data() {
        return {
            cards: [
                // Primer bloque 0 - 7
                {
                    title: "GFS América Central y Caribe",
                    img: "imagenes/gfs-anim.png",
                    link: "https://mag.ncep.noaa.gov/model-guidance-model-parameter.php?group=Model%20Guidance&model=GFS&area=WEST-ATL&ps=area#",
                    big: false,
                },
                {
                    title: "Tropical Tidbits GEFS",
                    img: "imagenes/tropical-tidbits-gefs.png",
                    link: "https://www.tropicaltidbits.com/analysis/models/?model=gfs-ens&region=watl&pkg=mslp_pwata&runtime=2015101312&fh=48&xpos=0&ypos=158",
                    big: false,
                },
                {
                    title: "TC Genesis Potential Fields",
                    img: "imagenes/tropical-cyclones.png",
                    link: "http://moe.met.fsu.edu/tcgengifs/",
                    big: false,
                },
                {
                    title: "WPC Model Analyses and Forecasts",
                    img: "imagenes/gfs-total-precip.gif",
                    link: "https://www.wpc.ncep.noaa.gov/mike/crb_gfs00.shtml",
                    big: false,
                },
                {
                    title: "Windy.com",
                    img: "imagenes/windy.png",
                    link: "https://www.windy.com/?9.534,-80.068,4",
                    big: false,
                },
                {
                    title: "GFS Alicia M. Bentley Page",
                    img: "imagenes/gfs-alicia.png",
                    link: "http://www.atmos.albany.edu/student/abentley/realtime.html",
                    big: false,
                },
                {
                    title: "WPC Forecasting Algorithms",
                    img: "imagenes/wpc-forecasting-algorithms.png",
                    link: "https://www.wpc.ncep.noaa.gov/international/wng/",
                    big: false,
                },
                {
                    title: "Ventusky",
                    img: "imagenes/ventusky.png",
                    link: "https://www.ventusky.com/?p=9.9;-84.1;5&l=wind-10m&t=20191101/0000&m=icon",
                    big: false,
                },
                // Segundo bloque 8 - 18
                {
                    title: "Frentes",
                    img: "imagenes/wpc-frentes.gif",
                    link: "https://www.wpc.ncep.noaa.gov/medr/nav_conus_pmsl.php?fday=6&fcolor=ter",
                    big: false,
                },
                {
                    title: "Meteostar Weather Forecast",
                    img: "imagenes/meteostar.gif",
                    link: "http://wxweb.meteostar.com/models/list_model.php?aoi=AON&model=GFS",
                    big: false,
                },
                {
                    title: "Atmos Albany",
                    img: "imagenes/atmos-albany.png",
                    link: "http://www.atmos.albany.edu/facstaff/abrammer/",
                    big: false,
                },
                {
                    title: "CPC Monsones",
                    img: "imagenes/monsones.png",
                    link: "https://www.cpc.ncep.noaa.gov/products/Global_Monsoons/Global-Monsoon.shtml",
                    big: false,
                },
                {
                    title: "Earth Nullschool",
                    img: "imagenes/earth-nullschool.png",
                    link: "https://earth.nullschool.net/#current/particulates/surface/level/overlay=pm10/orthographic=-77.41,12.86,843",
                    big: false,
                },
                {
                    title: "Storm",
                    img: "imagenes/storm-aoml.png",
                    link: "http://storm.aoml.noaa.gov/basin/?projectName=BASIN",
                    big: false,
                },
                {
                    title: "Weather.us",
                    img: "imagenes/weather-us.png",
                    link: "https://weather.us/",
                    big: false,
                },
                {
                    title: "Modelo Europeo",
                    img: "imagenes/europeo.png",
                    link: "https://www.ecmwf.int/en/forecasts/charts/catalogue/?facets=Range,Medium%20(15%20days)%3BType,Forecasts",
                    big: false,
                },
                {
                    title: "Nextlab - Vorticidad y Chorros",
                    img: "imagenes/nextlab-vorticidad.png",
                    link: "https://weather.cod.edu/forecast/",
                    big: false,
                },
                {
                    title: "College of DuPage",
                    img: "imagenes/college-dupage.gif",
                    link: "https://weather.cod.edu/analysis/",
                    big: false,
                },
                {
                    title: "Giro Ciclónico",
                    img: "imagenes/giro-ciclonico.png",
                    link: "http://www.atmos.albany.edu/student/ppapin/gyre.php",
                    big: false,
                },
                // Tercer bloque 19 - final
                {
                    title: "HWRF Seguimiento de Tormentas Activas",
                    img: "imagenes/hwrf.png",
                    link: "https://www.emc.ncep.noaa.gov/gc_wmb/vxt/HWRF/index.php",
                    big: false,
                },
                {
                    title: "Weatherbell - Polvo del Sahara",
                    img: "imagenes/weatherbell.jpg",
                    link: "https://maps.weatherbell.com/view/model/nasa-geos-all?d=conus&p=dust",
                    big: false,
                },
                {
                    title: "Polvo y Aerosoles",
                    img: "imagenes/polvo-aerosoles.png",
                    link: "https://www.nrlmry.navy.mil/aerosol_web/globaer/ops_01/carib/201706/2017060100_globaer_ops_carib.gif",
                    big: false,
                },
                {
                    title: "Probabilidad de fomación de ciclones",
                    img: "imagenes/cyclone-prob.png",
                    link: "https://www.ssd.noaa.gov/PS/TROP/TCFP/atlantic.html",
                    big: false,
                },
                {
                    title: "Conectración de Polvo",
                    img: "imagenes/polvo-athens.png",
                    link: "https://forecast.uoa.gr/en/forecast-maps/dust/north-atlantic",
                    big: false,
                },
                {
                    title: "Pronóstico de aerosoles",
                    img: "imagenes/aerosoles-pronos.png",
                    link: "https://acd-ext.gsfc.nasa.gov/People/Colarco/Mission_Support/",
                    big: false,
                },
                {
                    title: "ENOS Modelo Japonés",
                    img: "imagenes/japones-ENOS.png",
                    link: "http://ds.data.jma.go.jp/tcc/tcc/products/elnino/elmonout.html#fig1",
                    big: false,
                },
                
            ]
        }
    }
}
</script>

<style>
@media (max-width: 768px) {
  .modelos-globales {
    margin-top: 13vmin;
  }
}
</style>