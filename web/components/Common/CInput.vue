<template>
  <div class="input" :class="{ 'input--filled': value }">
    <input
      :id="name"
      class="input__field"
      :type="type"
      :value="value"
      readonly
      onfocus="this.removeAttribute('readonly')"
      @input="$emit('input', $event.target.value)"
    />
    <label :for="name" class="input__label">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  name: 'CInput',

  props: {
    type: {
      type: String,
      default: 'text'
    },

    placeholder: {
      type: String,
      default: ''
    },

    value: {
      type: [String, Number],
      default: ''
    },

    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.input {
  $self: &;
  position: relative;
  padding-top: 20px;
  padding-bottom: 10px;

  &--filled {
    #{$self}__label {
      color: $light-blue;
      bottom: 45px;
    }
  }

  &__label {
    position: absolute;
    bottom: 22px;
    left: 0;
    font-size: 14px;
    color: $grey;
    user-select: none;
    cursor: text;
    transition: 0.2s all;
  }

  &__field {
    box-sizing: border-box;
    width: 100%;
    border: none;
    padding: 10px 0;
    font-size: 14px;
    border-bottom: 2px solid $light-grey;

    &:focus {
      outline: none;
      border-bottom-color: $light-blue;

      & + #{$self}__label {
        color: $light-blue;
        bottom: 45px;
      }
    }
  }
}
</style>
