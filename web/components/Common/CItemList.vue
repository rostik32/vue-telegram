<template>
  <component :is="tag" class="item-list">
    <CSvgIcon :icon="icon" fill="#a0a0a0" :width="20" :height="20" class="item-list__icon"></CSvgIcon>
    <span class="item-list__text">
      <slot></slot>
    </span>
  </component>
</template>

<script>
export default {
  name: 'CIntemList',
  props: {
    tag: {
      type: String,
      default: 'li'
    },

    icon: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss">
  .item-list {
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 0;
    padding-left: 20px;
    font-size: 14px;
    color: #111111;

    &:hover {
      background-color: rgba(172, 172, 172, 0.199);
    }

    &__icon {
      margin-right: 20px;
    }
  }
</style>
