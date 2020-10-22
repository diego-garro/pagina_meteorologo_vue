<template>
    <div class="aeronautica">
        <section>
            <HeaderComp title="Meteorología Aeronática"/>
            <br>
            <ButtonContainer :buttons="buttons.slice(0, 5)"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Archivos para el BUFKIT</h1>
            <br>
            <ButtonContainer :buttons="buttons.slice(5, 9)"/>
        </section>
        <br><hr>
        <section>
            <h1 class="content-title">Mapas de Tiempo Significante por Hora de Validez</h1>
            <br>
            <div class="uplink-button-container">
                <button class="uplink-button" @click="updateSigWXLinks">Actualizar enlaces</button>
            </div>
            <br>
            <h2 class="content-note"><strong>NOTA:</strong> Para poder acceder a los mapas de tiempo significante presione antes el boton "Actualizar Enlaces" aquí arriba, esto actualizará los enlaces a cada mapa, ya que cada día cambian con la fecha</h2>
            <br>
            <ButtonContainer :buttons="sigWXButtons"/>
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
import moment from 'moment'

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
                    title: "Análisis de superficie América",
                    img: "imagenes/sigwx.png",
                    link: "https://www.nhc.noaa.gov/tafb_latest/USA_latest.gif",
                    big: false,
                },
                {
                    title: "Volcanic Ash Advisory Center",
                    img: "imagenes/volcanic.png",
                    link: "https://www.ssd.noaa.gov/VAAC/washington.html",
                    big: false,
                },
                {
                    title: "Mapas Tiempo Significante Niveles Altos",
                    img: "imagenes/high-level-charts.png",
                    link: "https://www.aviationweather.gov/progchart?gis=off",
                    big: false,
                },
                {
                    title: "Mapas Tiempo Significante por Regiones",
                    img: "imagenes/high-level-charts-regiones.png",
                    link: "https://www.aviationweather.gov/flightfolder/products?type=sigwx",
                    big: false,
                },
                {
                    title: "Pronóstico de Turbulencia",
                    img: "imagenes/turbulencia.png",
                    link: "https://www.aviationweather.gov/wafs",
                    big: false,
                },
                {
                    title: "Carpetas Aeronáuticas",
                    img: "imagenes/carpetas-aeronauticas.png",
                    link: "https://www.aviationweather.gov/flightfolder",
                    big: false,
                },
                {
                    title: "Informe Aeronáutico",
                    img: "imagenes/informe-aero.png",
                    link: "https://www.imn.ac.cr/informe-de-meteorologia-aeronautica",
                    big: false,
                },
                {
                    title: "Mapa de METAR's",
                    img: "imagenes/mapa-metares.png",
                    link: "https://www.tropicaltidbits.com/analysis/sfcplots/",
                    big: false,
                },
                
            ],
            buttons: [
                {
                    title: 'Sondeos MROC (Wyoming)',
                    link: 'http://weather.uwyo.edu/upperair/sounding.html',
                },
                {
                    title: 'OGIMET',
                    link: 'https://www.ogimet.com/',
                },
                {
                    title: "METAR's 12 horas",
                    link: 'https://www.aviationweather.gov/metar/data?ids=MROC%20MRPV%20MRLM%20MRLB&format=raw&hours=18&taf=off&layout=on',
                },
                {
                    title: "TAF's Actuales",
                    link: 'https://www.aviationweather.gov/taf/data?ids=MROC+MRLB+MRLM+MRPV&format=raw&date=&submit=Get+TAF+data',
                },
                {
                    title: "METAR's y TAF's 24 horas",
                    link: 'https://www.aviationweather.gov/metar/data?ids=MROC+MRPV+MRLM+MRLB&format=raw&date=&hours=24&taf=on',
                },
                {
                    title: 'MROC',
                    link: 'ftp://ftp.meteo.psu.edu/pub/bufkit/nam_mroc.buf',
                },
                {
                    title: 'MRLB',
                    link: 'ftp://ftp.meteo.psu.edu/pub/bufkit/nam_mrlb.buf',
                },
                {
                    title: 'MRPV',
                    link: 'ftp://ftp.meteo.psu.edu/pub/bufkit/nam_mrpv.buf',
                },
                {
                    title: 'MRLM',
                    link: 'ftp://ftp.meteo.psu.edu/pub/bufkit/nam_mrlm.buf',
                },
            ],
            sigWXButtons: [
                {
                    title: '0000Z',
                    link: '#'
                },
                {
                    title: '0600Z',
                    link: '#'
                },
                {
                    title: '1200Z',
                    link: '#'
                },
                {
                    title: '1800Z',
                    link: '#'
                }
                
            ],
            today: moment(),
            yesterday: moment().subtract(1, 'days'),
            hours: ['00', '06', '12', '18'],
        }
    },
    methods: {
        updateSigWXLinks: function() {
            let todayHour = parseInt(this.today.format('HH'))
            let todayText = ''
            for (let i = 0; i < 4; i++) {
                if (todayHour < 6 && i > 0) {
                    todayText = this.yesterday.format('YYYYMMDD')
                } else if (todayHour < 12 && i > 1) {
                    todayText = this.yesterday.format('YYYYMMDD')
                } else if (todayHour < 18 && i > 2) {
                    todayText = this.yesterday.format('YYYYMMDD')
                } else {
                    todayText = this.today.format('YYYYMMDD')
                }
                this.sigWXButtons[i].link = `https://aviationweather.gov/data/products/fax/${todayText}/${todayText}_${this.hours[i]}00_F24_sigwx_hi_a.gif`
            }
        },
        print: () => console.log('se presionó el botón'),
    }
}
</script>

<style>
.uplink-button-container {
    display: flex;
    justify-content: center;
}

.uplink-button {
    color: var(--color-cream);
    background: var(--color-dark-blue);
    font-size: 3vmin;
    border-radius: 1vmin;
    margin: 2vmin;
    padding: 1vmin 2vmin 1vmin 2vmin;
    border: 2px solid var(--color-dark-blue);
    line-height: 5vmin;
    transition: transform 0.15s;
    letter-spacing: 0.5vmin;
    font-family: var(--fonts);
}

.uplink-button:hover {
    color: var(--color-dark-blue);
    background: var(--color-cream);
    border-radius: 1vmin;
    transform: scale(1.05);
    cursor: pointer;
}

.uplink-button.light {
    color: var(--color-dark-blue);
    background: var(--color-cream);
}

.uplink-button.light:hover {
    color: var(--color-cream);
    background: var(--color-dark-blue);
    transform: scale(1.05);
}

@media (max-width: 768px) {
  .aeronautica {
    margin-top: 13vmin;
  }
}
</style>