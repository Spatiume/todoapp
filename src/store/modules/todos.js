const todos = {
  state: {
    todos: [],
    filter: "Все",
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, todoId) {
      state.todos = state.todos.filter((item) => item.id !== todoId);
    },
    checkTodo(state, todoChecked) {
      state.todos = state.todos.map((item) =>
        item.id === todoChecked.id ? todoChecked : item
      );
    },
    filterTodo(state, filter) {
      state.filter = filter;
    },
    removeCompletedTodos(state) {
      state.todos = state.todos.filter((item) => item.checked === false);
    },
    toggleAllTodosToCompleted(state, toggleAllCompleted) {
      if (toggleAllCompleted) {
        state.todos = state.todos.map((item) => {
          return { ...item, checked: true };
        });
      } else {
        state.todos = state.todos.map((item) => {
          return { ...item, checked: false };
        });
      }
    },
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.todos.find(item => item.id == id)
    },
    todosInfo: function (state) {
      let sumTodos = state.todos.length;
      let completed = state.todos.filter(item => item.checked === true).length;
      let active = sumTodos - completed;
      return {
        sumTodos: sumTodos,
        completed: completed,
        active: active
      }
    },
    allTodosCompleted: function (state, getters) {
      if (getters.todosInfo.sumTodos == getters.todosInfo.completed && getters.todosInfo.sumTodos != 0) {
        return true;
      }
      return false;

    },
  },
  actions: {},
}

export default todos;