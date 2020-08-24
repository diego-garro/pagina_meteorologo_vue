<template>
    <div class="card-container">
        <CardComp
            v-for="(card, index) in cards"
            :key="index"
            :title="card.title"
            :img="card.img"
            :link="card.link"
            :big="card.big"
        />
    </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue'

export default {
    name: 'CardContainer',
    props: {
        cards: {
            type: Array,
            required: true,
        }
    },
    components: {
        CardComp
    }
}
</script>

<style>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>