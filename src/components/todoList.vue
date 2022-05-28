<template lang="pug">
.todo-list
  .content
    ul.list
      li.item(v-for="todo in todos")
        todoListItem(:todo="todo")
</template>

<script>
import todoListItem from "./todoListItem.vue";

export default {
  components: {
    todoListItem,
  },
  props: {
    todos: Array,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.list {
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}

.item {
  border-bottom: 1px solid #ededed;

  &:last-child {
    border-bottom: none;
  }
}
</style>
