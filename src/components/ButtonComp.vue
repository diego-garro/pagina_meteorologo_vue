<template>
    <a  class="button" :class="{'light': light}" :href="link" target="_blank">{{ title }}</a>
</template>

<script>
export default {
    name: 'ButtonComp',
    props: {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        light: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style>
.button {
    color: var(--color-font-menu);
    background: var(--color-light-fonts);
    font-size: 3vmin;
    border-radius: 1vmin;
    margin: 2vmin;
    padding: 1vmin 2vmin 1vmin 2vmin;
    border: 2px solid var(--color-light-fonts);
    line-height: 5vmin;
    transition: transform 0.15s;
    letter-spacing: 0.5vmin;
    text-decoration: none;
}

.button:hover {
    color: var(--color-light-fonts);
    background: var(--color-font-menu);
    border-radius: 1vmin;
    transform: scale(1.05);
}

.button.light {
    color: var(--color-light-fonts);
    background: var(--color-font-menu);
}

.button.light:hover {
    color: var(--color-font-menu);
    background: var(--color-light-fonts);
    transform: scale(1.05);
}
</style>