This is the landing page for the website.

<template>
  <div>
    <NavigationBar></NavigationBar>
  </div>
  <div>
    <router-view></router-view>
  </div>
  <footer class="footer">
    <p>&copy; 2023 Pratik Pande</p>
  </footer>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
  methods: {},
};
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

/* For Google Chrome and Safari */
::-webkit-scrollbar {
  width: 10px; /* Set the width of the scrollbar */
}

/* Handle (the draggable part of the scrollbar) */
::-webkit-scrollbar-thumb {
  background: #4CAF50; /* Set the background color of the handle */
  border-radius: 6px; /* Set the border radius for a rounded handle */
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #F03A47; /* Change the handle color on hover */
}

.footer {
  margin-top: 5%;
}

.footer p {
  color: white; 
}
</style>
