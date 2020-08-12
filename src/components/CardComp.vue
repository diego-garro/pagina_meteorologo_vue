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
    width: 400px;
    height: 330px;
    border-radius: 8px;
    box-shadow: 0 2px 2px var(--color-light-fonts);
    overflow: hidden;
    margin: 20px;
    text-align: center;
    transition: transform 0.25s;
    letter-spacing: 1px;
}

.container:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px var(--color-box-shadow);
}

.container.big-card {
    width: 600px;
    height: 450px;
}

.container img {
    width: 95%;
    height: 95%;
    margin-left: auto;
    margin-right: auto;
}

.container h2 {
    padding: 0 1rem;
    font-size: 20px;
}

@media (max-width: 768px) {

    .container,
    .container.big-card {
        width: 300px;
        height: 200px;
    }

    .container img {
        width: 85%;
        height: 85%;
    }
}
</style>