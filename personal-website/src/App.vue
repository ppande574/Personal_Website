<template>
  <div>
    <NavigationBar></NavigationBar>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue"

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d5298;
  margin-top: 60px;
}

#placeholder {
  color: red; 
}

</style>
