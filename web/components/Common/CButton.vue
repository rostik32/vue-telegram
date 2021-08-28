<template>
  <button :disabled="disabled" class="button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CButton',

  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.button {
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  background-color: $light-blue;
  color: $white;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: $light-grey;
    cursor: not-allowed;
  }
}
</style>
