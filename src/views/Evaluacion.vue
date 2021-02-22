<template>
    <div class="evaluacion">
        <section>
            <HeaderComp title="Evaluaciones"/>
        </section>
        <br><hr>
        <section>
            <ButtonComp
                title="Evaluaciones varias"
                link="http://intranet.imn.ac.cr/estaciones/graficos/"
                :light="true"
            />
        </section>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import ButtonComp from '@/components/ButtonComp.vue'

export default {
    name: 'Evaluacion',
    components: {
        HeaderComp,
        ButtonComp,
    },
}
</script>

<style>
@media (max-width: 768px) {
  .evaluacion {
    margin-top: 13vmin;
  }
}
</style>