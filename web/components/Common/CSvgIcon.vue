<template>
  <svg-icon
    :name="icon"
    :fill="fill"
    :width="width"
    :height="height"
  ></svg-icon>
</template>

<script>
export default {
  name: 'CSvgIcon',
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
      default: 25
    },

    height: {
      type: Number,
      default: 25
    },
  }
}
</script>
