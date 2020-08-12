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
  font-size: 30px;
  line-height: 60px;
}

/* .header img {
  margin-top: 10px;
} */

@media (max-width: 768px) {

  .header {
    margin-top: 35px;
  }

  .header h1 {
    font-size: 40px;
    line-height: 40px;
    margin: 0 10px 0 10px;
  }

  .header h3 {
    line-height: 25px;
    margin: 0 10px 0 10px;

  }

  .header img {
      width: 50%;
      height: 25%;
  }
}
</style>
