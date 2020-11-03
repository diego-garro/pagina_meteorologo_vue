<template>
    <div class="contacto">
        <section>
            <HeaderComp title="Contacto"/>
            <h1 class="content-title">Sitio Web y Redes Sociales del IMN</h1>
            <ButtonContainer :buttons="buttons.slice(3)"/>
        </section>
        <br><hr>
        <section>
            <h2 class="content-note">Para cualquier sugerencia o problema con este sitio web, favor contactar por correo o redes sociales con:</h2>
            <h3>Diego Garro</h3>
            <h3 class="email">dgarro@imn.ac.cr</h3>
            <ButtonContainer :buttons="buttons.slice(0, 3)"/>
        </section>
        <br><br>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import ButtonContainer from '@/components/ButtonContainer.vue'

export default {
    name: 'Contacto',
    components: {
        HeaderComp,
        ButtonContainer,
    },
    data() {
        return {
            buttons: [
                {
                    title: `Facebook`,
                    link: 'https://www.facebook.com/dgarromolina'
                },
                {
                    title: 'Twitter',
                    link: 'https://twitter.com/dgarromolina'
                },
                {
                    title: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/diego-garro-molina-b5a91960/'
                },
                {
                    title: 'Sitio Web Oficial',
                    link: 'https://www.imn.ac.cr/'
                },
                {
                    title: 'Facebook',
                    link: 'https://www.facebook.com/IMNCostaRica/'
                },
                {
                    title: 'Twitter',
                    link: 'https://twitter.com/IMNCR'
                }
            ]
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