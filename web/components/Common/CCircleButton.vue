<template>
  <button class="circle-button" @click="$emit('click')">
    <CSvgIcon :icon="icon" :fill="fill" :width="width" :height="height"></CSvgIcon>
  </button>
</template>

<script>
export default {
  name: 'CCircleButton',
  props: {
    icon: {
      type: String,
      default: ''
    },

    fill: {
      type: String,
      default: '#000000'
    },

    width: {
      type: Number,
      default: 17
    },

    height: {
      type: Number,
      default: 17
    },
  },
}
</script>

<style lang="scss">
.circle-button {
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: rgba(53, 53, 53, 0.205);
  cursor: pointer;
  border-radius: 50%;
}
</style>
