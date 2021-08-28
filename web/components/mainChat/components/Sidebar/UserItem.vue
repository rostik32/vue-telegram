<template>
  <div class="user-item">
    <div class="user-item__avatar-wrapper">
      <img
        src="https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg?w=800&quality=85"
        class="user-item__avatar"
      />
    </div>

    <div class="user-item__container">
      <div class="user-item__info">
        <span class="user-item__name">Boris Moiseev</span>

        <span class="user-item__last-message">
          Привет, что делаешь сегодня вечером сегодня вечером сегодня вечером
          сегодня вечером сегодня вечером сегодня вечером сегодня вечером ?
        </span>
      </div>

      <div class="user-item__meta">
        <span class="user-item__datetime">05.15.2021</span>
        <span class="user-item__messages-counter">1</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserItem'
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.user-item {
  $self: &;

  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  background-color: $white;
  cursor: pointer;

  &:not(&__selected):hover {
    background-color: #e8e8e8;
  }

  &__avatar {
    max-width: 100%;

    &-wrapper {
      margin-right: 10px;
      object-fit: cover;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;
    }
  }

  &__container {
    max-width: calc(100% - 60px);
    display: flex;
    justify-content: space-between;
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-right: 5px;
    overflow: hidden;
  }

  &__name {
    font-weight: 500;
    margin-bottom: 5px;
  }

  &__last-message {
    color: $grey;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-shrink: 1;
  }

  &__datetime {
    color: $grey;
    font-size: 14px;
  }

  &__messages-counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 10px;
    min-height: 10px;
    font-size: 10px;
    font-weight: 700;
    line-height: 100%;
    margin-top: auto;
    background-color: $blue;
    color: $white;
    border-radius: 15px;
    padding: 5px;
  }

  &__selected {
    background-color: $blue;
    color: $white;

    #{$self}__last-message,
    #{$self}__datetime {
      color: $white;
    }

    #{$self}__messages-counter {
      display: none;
    }
  }
}
</style>
