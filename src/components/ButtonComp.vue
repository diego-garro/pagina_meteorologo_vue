<template>
  <div class="button-container">
    <a  class="button" :class="{'light': light}" :href="link" target="_blank">
      <span v-html="title"></span>
    </a>
  </div>
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
.button-container {
  display: flex;
  justify-content: center;
}

.button {
  color: var(--color-cream);
  background: var(--color-dark-blue);
  font-size: 3vmin;
  border-radius: 1vmin;
  margin: 2vmin;
  padding: 1vmin 2vmin 1vmin 2vmin;
  border: 2px solid var(--color-dark-blue);
  line-height: 5vmin;
  transition: transform 0.15s;
  letter-spacing: 0.5vmin;
  text-decoration: none;
}

.button:hover {
  color: var(--color-dark-blue);
  background: var(--color-cream);
  border-radius: 1vmin;
  transform: scale(1.05);
}

.button.light {
  color: var(--color-dark-blue);
  background: var(--color-cream);
}

.button.light:hover {
  color: var(--color-cream);
  background: var(--color-dark-blue);
  transform: scale(1.05);
}
</style>