<template>
  <div class="footer-group">
    <router-link :to="{path: '/',id: 'h'}">首页</router-link>
    <router-link :to="{path: '/detail',id: 'd'}">详情</router-link>
  </div>
</template>

<script>
export default {
  name: 'bom',
  props: {
    msg: String
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  box-sizing: border-box;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.footer-group {
  width: 100%;
  height: 60px;
  border-top: 1px solid #ddd;
}
</style>
