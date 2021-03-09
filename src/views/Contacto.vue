<template>
  <div class="contacto">
    <section>
      <HeaderComp title="Contacto"/>
      <h1 class="content-title">Sitio Web y Redes Sociales del IMN</h1>
      <ButtonContainer :buttons="socialIMNButtons"/>
    </section>
    <br><hr>
    <section>
      <h2 class="content-note">Para cualquier sugerencia o problema con este sitio web, favor contactar por correo o redes sociales con:</h2>
      <h3>Diego Garro</h3>
      <h3 class="email">dgarro@imn.ac.cr</h3>
      <ButtonContainer :buttons="socialButtons"/>
    </section>
    <br><br>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import ButtonContainer from '@/components/ButtonContainer.vue'

import jsonSocialButtons from "@/assets/json/contacto/socialButtons.json"
import jsonSocialIMNButtons from "@/assets/json/contacto/socialIMNButtons.json"

export default {
  name: 'Contacto',
  components: {
    HeaderComp,
    ButtonContainer,
  },
  data() {
    return {
      socialButtons: jsonSocialButtons,
      socialIMNButtons: jsonSocialIMNButtons,
    }
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
}
.email {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-transform: lowercase;
}

@media (max-width: 768px) {
  .contacto {
  margin-top: 13vmin;
  }
}
</style>