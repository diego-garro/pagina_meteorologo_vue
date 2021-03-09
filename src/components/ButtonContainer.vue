<template>
  <div class="container">
    <ButtonComp
      v-for="(button, index) in buttons"
      :key="index"
      :link="button.link"
      :title="button.title"
      :light="isLightButton(index)"
    />
  </div>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'

export default {
  name: 'ButtonContainer',
  props: {
    buttons: {
      type: Array,
      required: true
    }
  },
  components: {
    ButtonComp,
  },
  methods: {
    isLightButton: function(index) {
      if (index % 2 == 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>