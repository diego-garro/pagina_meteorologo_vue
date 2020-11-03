<template>
  <div class="header">
    <a v-if="img"  href="https://www.imn.ac.cr/web/imn/inicio" target="_blank">
      <img class="header__img" :src="getImgURL(img)" alt="Logo IMN">
    </a>
    <h1 class="header__title" v-if="title">{{ title }}</h1>
    <br>
    <h3 class="header__subtitle" v-if="subtitle">{{ subtitle }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: String,
    img: String,
  },
  methods: {
    getImgURL: (url) => require(`../assets/img/${url}`),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
  font-size: 4vmin;
  line-height: 9vmin;
}

.header__title {
  margin: 0 2vmin 0;
  line-height: 10vmin;
}

.header__subtitle {
  line-height: 5vmin;
  margin: 0 1vmin 0 1vmin;
}

.header__img {
  width: 35vmin;
  height: 35vmin;
}

@media (max-width: 768px) {

  .header {
    margin-top: 3.5vmin;
  }

  .header__img {
      width: 50vmin;
      height: 50vmin;
  }
}
</style>
