<template lang="pug">
.todo
  .todo-header
    todoToggleAll(title="Выделить всё", :allTodosCompleted="allTodosCompleted")
    todoInput.todoinput
  .todo-lists(v-if="todos.length > 0")
    todoList(:todos="filteredTodos")
  .todo-footer(v-if="todos.length > 0")
    todoFooter(:todosInfo="todosInfo")
</template>

<script>
import todoList from "./todoList.vue";
import todoInput from "./todoInput.vue";
import todoToggleAll from "./todoToggleAll.vue";
import todoFooter from "./todoFooter.vue";

import { mapState, mapGetters } from "vuex";

export default {
  components: {
    todoToggleAll,
    todoInput,
    todoList,
    todoFooter,
  },
  computed: {
    ...mapState({
      todos: (state) => state.todos.todos,
      filter: (state) => state.todos.filter,
    }),
    ...mapGetters({
      todosInfo: 'todosInfo',
      allTodosCompleted: 'allTodosCompleted',
    }),
    filteredTodos() {
      switch (this.filter) {
        case "Все":
          return this.todos;
        case "Активные":
          return this.todos.filter((item) => item.checked === false);
        case "Завершенные":
          return this.todos.filter((item) => item.checked === true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  margin-top: 180px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todo-header {
  display: flex;
  border-bottom: 2px solid #ededed;
  padding-bottom: 10px;

  .todoinput {
    flex: 1;
    padding: 16px 16px 16px 0px;
  }
}
</style>