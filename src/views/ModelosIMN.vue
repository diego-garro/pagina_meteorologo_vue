<template>
    <div class="modelos-imn">
        <section>
            <HeaderComp title="Modelos numéricos regionales"/>
        </section>
        <br><hr>
        <section>
            <CardContainer :cards="cards"/>
        </section>
    </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue"
import CardContainer from "@/components/CardContainer.vue"

export default {
    name: 'ModelosIMN',
    components: {
        HeaderComp,
        CardContainer,
    },
    data() {
        return {
            cards: [
                // Primer bloque 0 - 10
                {
                    title: "WRF-AR (1 KM)",
                    img: "imagenes/wrf-ar.png",
                    link: "http://wrfar.imn.ac.cr/",
                    big: false,
                },
                {
                    title: "WRF 1.5 (1 KM)",
                    img: "imagenes/wrf-15.png",
                    link: "http://wrf1-5.imn.ac.cr/",
                    big: false,
                },
                {
                    title: "WRF 15 (9 KM)",
                    img: "imagenes/wrf15.png",
                    link: "http://wrf15.imn.ac.cr/",
                    big: false,
                },
                {
                    title: "WRF 5 (1.89 KM)",
                    img: "imagenes/wrf5.png",
                    link: "http://wrf5.imn.ac.cr/",
                    big: false,
                },
                {
                    title: "WRF Sarapiquí (1.89 KM)",
                    img: "imagenes/sarapiqui.png",
                    link: "http://sarapiqui.imn.ac.cr/",
                    big: false,
                },
                {
                    title: "WRF 1 (10 KM)",
                    img: "imagenes/wrf1.png",
                    link: "http://wrf.imn.ac.cr/",
                    big: false,
                },
                {
                    title: "WRF 1.5 Backup",
                    img: "imagenes/wrf-15-backup.png",
                    link: "http://wrf1-5.imn.ac.cr/modelo/backup/WRF15/",
                    big: false,
                },
                {
                    title: "CAFFG",
                    img: "imagenes/caffg.png",
                    link: "https://cds.imn.ac.cr/CAFFG/index.php",
                    big: false,
                },
                {
                    title: "WRF 8 (8 KM)",
                    img: "imagenes/wrf8.png",
                    link: "http://wrf8.imn.ac.cr/",
                    big: false,
                },
            ]
        }
    }
}
</script>

<style>
@media (max-width: 768px) {
  .modelos-imn {
    margin-top: 13vmin;
  }
}
</style>