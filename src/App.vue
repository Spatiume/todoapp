<template lang="pug">
.container
  header.header TODOS
  router-view
  footer.footer-info
    p Двойной клик чтобы редактировать задачу
    p 
    p
</template>

<script>
import todo from "./components/todo.vue";

export default {
  name: "app",
  components: {
    todo,
  },
};
</script>

<style lang="scss" >
.container {
  width: 600px;
  margin: 0 auto;
  position: relative;
}

.header {
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(79, 79, 79, 0.505);
}

.footer-info {
  margin: 65px auto 0;
  position: relative;
  color: #bfbfbf;
  font-size: 12px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;

  p {
    line-height: 1;
  }
}

body {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  font-weight: 300;
  background: #f5f5f5;
}

ul {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
}

* {
  box-sizing: border-box;
}
</style>
