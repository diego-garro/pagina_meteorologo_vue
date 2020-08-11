<template>
  <div class="img-satelite">
    <HeaderComp title="Imágenes de Satélite"/>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  name: 'ImagenesSatelite',
  components: {
    HeaderComp,
  }
}
</script>

<style scoped>
.img-satelite {
  margin-top: 70px;
}
</style>