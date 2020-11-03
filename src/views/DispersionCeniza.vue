<template>
    <div class="dispersion-ceniza">
        <section>
            <HeaderComp title="Modelos Lagrangianos de Dispersión de Ceniza"/>
            <br>
            <ButtonContainer :buttons="buttons"/>
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
                    title: "NOAA HYSPLIT Trajectory Model",
                    img: "imagenes/dispersion01.png",
                    link: "https://ready.arl.noaa.gov/hypub-bin/trajsrc.pl?trjtype=4",
                    big: false,
                },
                {
                    title: "Trayectoria Volcanes Activos",
                    img: "imagenes/ash-trajectory-forecast.png",
                    link: "https://ready.arl.noaa.gov/READY_traj_volcanoes.php",
                    big: false,
                },
                {
                    title: "Dispersión de Ceniza",
                    img: "imagenes/dispersion02.png",
                    link: "https://ready.arl.noaa.gov/READYVolcAsh.php",
                    big: false,
                },
                {
                    title: "Volcanic Ash Advisory Center",
                    img: "imagenes/volcanic.png",
                    link: "https://www.ssd.noaa.gov/VAAC/washington.html",
                    big: false,
                }
            ],
            buttons: [
                {
                    title: 'Cámaras Volcanes OVSICORI',
                    link: 'http://www.ovsicori.una.ac.cr/index.php/camaras'
                },
                {
                    title: 'Canal YouTube RSN',
                    link: 'https://www.youtube.com/channel/UCTTCHhwM0G51hquX55CEMFw'
                }
            ]
        }
    }
}
</script>

<style>
@media (max-width: 768px) {
  .dispersion-ceniza {
    margin-top: 13vmin;
  }
}
</style>