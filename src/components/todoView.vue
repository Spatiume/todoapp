<template lang="pug">
.view
  .view-header
    h1 Компонент просмотра задачи
    .button
      router-link.goback(
        tag="button",
        to="/",
        title="Вернуться к списку задач",
        autofocus
      ) ⮵
  .view-content
    div Номер задачи: №{{ todo.id }}
    div Название задачи: {{ todo.name }}
    div Статус задачи: {{ statusCompleted }}
    button.back(@click="goBack", title="Вернуться к списку задач") Вернуться к списку задач
  

</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      data1: [],
      data2: "",
      data: "",
    };
  },
  computed: {
    ...mapGetters(["getTodoById", "doneTodos"]),
    statusCompleted() {
      if (this.todo.checked) {
        return "задача выполнена";
      }
      return "задача не выполнена";
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    this.todo = this.getTodoById(this.$route.params.todoId);
  },
};
</script>

<style lang="scss" scoped>
.view {
  margin-top: 180px;
  background: #fff;
  color: rgba(0, 0, 0, 0.744);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
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

.view-header {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ededed;

  h1 {
    margin-left: 60px;
    font-size: 24px;
    flex: 1;
  }
}


.button {
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 16px;

  .goback {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 50px;
    color: #2a2a2a;

    &:hover {
      color: #000000;
      transition: 0.2s;
    }
  }
}

.view-content {
  word-break: break-all;
  padding: 3% 5%;
  display: flex;
  flex-direction: column;
  color: black;
  position: relative;
  :nth-child(n) {
    padding: 5px;
    border-bottom: 1px solid #ededed;
  }

  :nth-last-child(2) {
    margin-bottom: 20px;
  }

  :last-child {
    border: none;
  }
}

.back {
  color: rgb(36, 36, 36);
  background: transparent;
  font-weight: 300;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }
}
</style>