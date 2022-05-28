<template lang="pug">
.footer
  .footer-content
    .counter(v-if="todosInfo.active >= 5") Осталось {{ todosInfo.active }} задач
    .counter(v-if="todosInfo.active > 1 && todosInfo.active < 5") Осталось {{ todosInfo.active }} задачи
    .counter(v-if="todosInfo.active <= 1") Осталась {{ todosInfo.active }} задача
    .filter
      todoFooterFilter
    button(
      type="button",
      @click="removeCompletedTodos",
      :class="{ active: todosInfo.completed > 0 }"
      title="Очистить завершенные задачи"
    ).clearBtn Очистить завершенные
</template>

<script>
import todoFooterFilter from "./todoFooterFilter.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    todoFooterFilter,
  },
  props: {
    todosInfo: Object,
  },
  methods: {
    ...mapMutations(['removeCompletedTodos']),
  },
};
</script>

<style lang="scss" scoped>
.footer {
  color: #777;
  padding: 10px 15px;
  text-align: center;
  position: relative;
  font-size: 14px;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
}

.footer-content {
  position: relative;
  display: flex;
  align-items: center;
}

.filter {
  flex: 1;
}

.counter {
  border: 1px solid transparent;
  
}
button {
  margin-right: 20px;
  border: none;
  background: transparent;
  font-weight: 300;
  color: inherit;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
  &:last-child {
    margin-right: 0;
  }
}

.clearBtn{
  opacity: 0;
}

.active{
  opacity: 1;
}
</style>