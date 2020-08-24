<template>
  <div class="header">
    <a v-if="img"  href="https://www.imn.ac.cr/web/imn/inicio" target="_blank">
      <img :src="getImgURL(img)" alt="Logo IMN">
    </a>
    <h1>{{ title }}</h1>
    <br>
    <h3>{{ subtitle }}</h3>
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
  line-height: 8vmin;
}

.header img {
  width: 50vmin;
  height: 50vmin;
}

@media (max-width: 768px) {

  .header {
    margin-top: 3.5vmin;
  }

  .header h1 {
    margin: 0 1vmin 0 1vmin;
  }

  .header h3 {
    line-height: 2.5vmin;
    margin: 0 1vmin 0 1vmin;

  }

  .header img {
      width: 50vmin;
      height: 50vmin;
  }
}
</style>
