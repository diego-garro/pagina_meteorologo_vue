<template>
    <div class="varios">
        <section>
            <HeaderComp title="Cámaras Viales y Datos Varios"/>
        </section>
        <br><hr>
        <section>
            <ButtonContainer :buttons="buttons"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Cámaras IMN Azotea</h1>
            <br>
            <ButtonContainer :buttons="camarasAzotea"/>
        </section>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import ButtonContainer from '@/components/ButtonContainer.vue'

export default {
    name: 'Varios',
    components: {
        HeaderComp,
        ButtonContainer,
    },
    data() {
        return {
            buttons: [
                {
                    title: 'Cámaras Viales Nacionales',
                    link: 'https://www.camarasvialescr.com/'
                },
                {
                    title: 'Northern Vermont University',
                    link: 'http://atmos.northernvermont.edu/'
                },
                {
                    title: 'Estadísticas Huracanes',
                    link: 'https://www.aoml.noaa.gov/hrd/tcfaq/tcfaqE_esp.html'
                },
                {
                    title: 'SATCAWEB.org',
                    link: 'http://www.satcaweb.org/'
                },
            ],
            camarasAzotea: [
                {
                    title: 'Cámara Oeste',
                    link: 'http://192.168.0.240'
                },
                {
                    title: 'Cámara Este',
                    link: 'http://192.168.0.239'
                },
            ]
        }
    }
}
</script>

<style>
@media (max-width: 768px) {
  .varios {
    margin-top: 13vmin;
  }
}
</style>
