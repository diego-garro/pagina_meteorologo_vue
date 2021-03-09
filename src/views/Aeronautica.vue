<template>
  <div class="aeronautica">
    <section>
      <HeaderComp title="Meteorología Aeronática"/>
      <br>
      <ButtonContainer :buttons="headerButtons"/>
    </section>
    <br><hr>
    <section>
      <h1 class="content-title">Archivos para el BUFKIT</h1>
      <br>
      <ButtonContainer :buttons="bufkitButtons"/>
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

import jsonCards from "@/assets/json/aeronautica/cards.json"
import jsonHeaderButtons from "@/assets/json/aeronautica/headerButtons.json"
import jsonBufkitButtons from "@/assets/json/aeronautica/bufkitButtons.json"
import jsonSigWXButtons from "@/assets/json/aeronautica/sigWXButtons.json"

export default {
  name: 'SeriesTiempo',
  components: {
    HeaderComp,
    CardContainer,
    ButtonContainer,
  },
  data() {
    return {
      // Cards
      cards: jsonCards,
      // Buttons
      headerButtons: jsonHeaderButtons,
      bufkitButtons: jsonBufkitButtons,
      sigWXButtons: jsonSigWXButtons,
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