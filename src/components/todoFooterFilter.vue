<template lang="pug">
div
  button(
    v-for="filter in filters",
    @click="changeFilterTodo(filter)",
    :class="{ active: currentFilter === filter }",
    type="button",
    :title="`Показать ${filter} задачи`",
    autofocus
  ) {{ filter }}
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      filters: ["Все", "Активные", "Завершенные"],
      currentFilter: "Все",
    };
  },
  methods: {
    ...mapMutations(['filterTodo']),
    changeFilterTodo(filter) {
      this.currentFilter = filter;

      this.filterTodo(filter);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-right: 20px;
  border: none;
  background: transparent;
  font-weight: 300;
  color: inherit;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3px;

  &.active {
    border-color: rgba(175, 47, 47, 0.2);

    &:hover {
      text-decoration: none;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
}
</style>