<template>
  <div id="app">
    <img src="./assets/logo.png">
    <first></first>
    <second></second>
  </div>
</template>

<script>
import First from '@/components/first/first.vue'
import Second from '@/components/second/second.vue'

export default {
  name: 'app',
  components: {
    First,
    Second
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  margin-top: 60px;
}
</style>
