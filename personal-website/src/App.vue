This is the landing page for the website. Anytime a user clicks "Home" in the navigation bar, this is where they will be redirected. 

<template>
  <body id="body">
    <div>
      <NavigationBar></NavigationBar>
    </div>
    <div>

    </div>
  </body>
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
  * {
    background: black;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0; 
    padding: 0; 
  }
  

</style>