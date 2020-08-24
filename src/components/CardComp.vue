<template>
    <div class="container" :class="{'big-card': big}">
        <a v-if="link" :href="link" target="_blank">
            <img :src="getImgURL(img)" alt="">
        </a>
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Card',
    data() {
        return {
            isBigCard: false
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        big: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        getImgURL: (url) => require(`../assets/img/${url}`),

    }
}
</script>

<style scoped>
.container {
    width: 40vmin;
    height: 30vmin;
    border-radius: 0.5vmin;
    box-shadow: 0 0.2vmin 0.2vmin var(--color-light-fonts);
    text-align: center;
    transition: transform 0.25s;
    letter-spacing: 0.1vmin;
    margin: 0 5vmin 5vmin 0;
}

.container:hover {
    transform: translateY(-0.9vmin);
    box-shadow: 0 1.2vmin var(--color-box-shadow);
}

.container.big-card {
    width: 50vmin;
    height: 40vmin;
}

.container img {
    width: 95%;
    height: 95%;
    margin-left: auto;
    margin-right: auto;
}

.container h2 {
    padding: 0 1vmin;
    font-size: 3vmin;
}

@media (max-width: 768px) {
    .container img {
        width: 85%;
        height: 85%;
    }
}
</style>