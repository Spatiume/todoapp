<template lang="pug">
.todo-input(
  :class="{ 'validate-error': this.validation.hasError('todo.name') }"
)
  .error {{ validation.firstError('todo.name') }}
  input.input(
    type="text",
    placeholder="Новая задача",
    autofocus,
    v-model="todo.name",
    @keydown.enter="addNewTodo"
  )
</template>

<script>
import { Validator } from "simple-vue-validator";
import { mapMutations } from "vuex";

let uniqId = 0;
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "todo.name"(value) {
      return Validator.value(value).required("Поле не может быть пустым");
    },
  },
  data() {
    return {
      todo: {
        id: 0,
        name: "",
        checked: false,
      },
    };
  },
  methods: {
    ...mapMutations(['addTodo']),
    addNewTodo() {
      this.$validate().then((success) => {
        if (!success) return;

        uniqId++;
        this.todo.id = uniqId;

        this.addTodo({...this.todo});

        this.todo.name = "";
        this.validation.reset();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  position: absolute;
  bottom: -10px;
  left: 0;
  color: firebrick;
}

.todo-input {
  position: relative;
}

.input {
  font-size: 24px;
  border: none;

  line-height: 1.4em;
  outline: none;
  color: inherit;
  width: 100%;
  &::placeholder {
    font-style: italic;
    opacity: 0.4;
  }
}

.validate-error {
  input {
    &::placeholder {
      color: firebrick;
    }
  }
}
</style>