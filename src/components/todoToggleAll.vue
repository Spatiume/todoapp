<template lang="pug">
.toggleAll
  label.toggleAllBtn(
    @change="toggleAllTodos",
    :class="{ active: allTodosCompleted }",
    autofocus
  )
    input(type="checkbox", :checked="allTodosCompleted")
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: { allTodosCompleted: Boolean },
  methods: {
    ...mapMutations(['toggleAllTodosToCompleted']),
    toggleAllTodos(e) {
      this.toggleAllTodosToCompleted(e.target.checked)
    },
  },
};
</script>


<style lang="scss" scoped>
.toggleAll {
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    .toggleAllBtn {
      opacity: 1;
      transition: 0.2s;
    }
  }
  .active {
    opacity: 1;
  }
}

.toggleAllBtn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
  opacity: 0.5;
  height: 40px;
  width: 40px;
  cursor: pointer;

  &::before {
    content: "❯";
    display: flex;
    font-size: 22px;
    color: #636363;
  }

  input {
    display: none;
  }
}
</style>