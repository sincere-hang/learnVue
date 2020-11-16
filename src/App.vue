<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import Footer from './components/footer'
export default {
  name: "aaa",
  components: {
    // Footer,
  },
  data () {
    return {

    }
  },
  methods: {
    link (name) {
      this.$router.push({ name: name })
    }
  }


}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
