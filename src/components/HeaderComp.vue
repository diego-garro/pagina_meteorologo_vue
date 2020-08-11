<template>
  <div class="header">
    <img v-if="img" :src="getImgURL(img)" alt="Logo IMN">
    <h1>{{ title }}</h1>
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
    img: String
  },
  methods: {
    getImgURL: (name) => require(`../assets/img/${name}`),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
  font-size: 20px;
  line-height: 40px;
}

/* .header img {
  margin-top: 10px;
} */

@media (max-width: 768px) {

  .header {
    line-height: 40px;
  }

  .header img {
      width: 50%;
      height: 25%;
  }
}
</style>
