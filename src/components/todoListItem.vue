<template lang="pug">
.todo-item(:class="{ checked: todo.checked, edited: editMod }")
  .todo-view
    label.input-block(:title="markForTitle", autofocus)
      input.input(
        type="checkbox",
        @change="checkTodoAsChange",
        :checked="todo.checked"
      )
    .title(@dblclick="editModeOn") {{ todo.name }}
    .button
      router-link.view(
        tag="button",
        :to="`/viewtodo/id=${todo.id}`",
        title="Просмотреть задачу"
      ) 🡒
    .button
      button.remove(
        type="button",
        @click="removeExistedTodo",
        title="Удалить задачу"
      ) ×

  .todo-edit
    input(
      type="text",
      ref="inputEdit",
      v-model="todo.name",
      @blur="viewMode",
      @keydown.enter="viewMode"
    )
</template>



<script>
import { mapMutations } from "vuex";

export default {
  props: {
    todo: Object,
  },
  data() {
    return {
      editMod: false,
      markForTitle: "Отметить",
    };
  },
  methods: {
    ...mapMutations(["removeTodo", "checkTodo"]),
    removeExistedTodo() {
      this.removeTodo(this.todo.id);
    },
    checkTodoAsChange(e) {
      const todoAsChecked = {
        ...this.todo,
        checked: e.target.checked,
      };
      this.editMarkForTitle(this.todo.checked);

      this.checkTodo(todoAsChecked);
    },

    editMarkForTitle(checked) {
      if (checked) {
        this.markForTitle = "Отметить";
      } else {
        this.markForTitle = "Снять отметку";
      }
    },

    viewMode() {
      this.editMod = false;
      if (this.todo.name.length == 0) {
        this.removeExistedTodo();
      }
    },
    editModeOn() {
      this.editMod = true;
      this.focusInput();
    },
    focusInput() {
      this.$nextTick(function () {
        this.$refs.inputEdit.focus();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.edited {
  .todo-view {
    display: none;
  }

  .todo-edit {
    display: flex;
  }
}
.title{
  word-break: break-all;
}
.checked {
  .title {
    text-decoration: line-through;
  }

  .title {
    opacity: 0.5;
    
  }
  .input-block {
    &::before {
      opacity: 0;
    }
    &::after {
      opacity: 1;
    }
  }
}

.todo-view {
  display: flex;
  align-items: center;

  &:hover {
    .remove {
      visibility: visible;
    }

    .view {
      visibility: visible;
    }
  }
}

.todo-edit {
  display: none;
  align-items: center;

  input {
    margin-left: 45px;
    margin-right: 5px;
    padding: 15px 15px;
    line-height: 1.2;
    flex: 1;
    font-size: 24px;
    outline: none;
    border: 1px solid rgba(184, 182, 182, 0.5);
    color: inherit;
    width: 100%;

    box-shadow: inset 0 -1px 5px 0 rgba(68, 64, 64, 0.2);
  }
}

.input {
  display: none;
}

.input-block {
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    display: block;
    position: absolute;
    opacity: 0.3;
  }

  &::after {
    content: "\2713";
    width: 30px;
    height: 30px;
    border: 1px solid rgba(55, 199, 16, 0.3);
    color: rgba(55, 199, 16, 0.6);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0;
  }
}

.title {
  padding: 15px 0;
  display: block;
  line-height: 1.2;
  flex: 1;
}

.button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
}

.remove {
  background: transparent;
  border: none;
  cursor: pointer;
  visibility: hidden;
  font-size: 30px;
  color: #cc9a9a;
  padding-top: 6px;

  &:hover {
    color: #ab6262;
    transition: 0.2s;
  }
}

.view {
  background: transparent;
  border: none;
  cursor: pointer;
  visibility: hidden;
  font-size: 26px;
  color: #949090;

  &:hover {
    color: #333333;
    transition: 0.2s;
  }
}
</style>