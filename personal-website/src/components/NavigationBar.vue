This is the navigation bar component of the website. Every time a element in the
nav bar is clicked, the "setActiveLink" JS method is called, which sets the
current link as the active link.

<template>
  <div class="navigation-bar">
    <h1>Pratik</h1>
    <h1 id="last-name">Pande</h1>
    <div id="nav-links">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'experiences' }">Experience</router-link>
        <router-link :to="{ name: 'interests' }">Interests</router-link>
    </div>
  </div>
</template>

<style scoped>
.navigation-bar {
  overflow: hidden;
}

.navigation-bar h1 {
  color: #f03a47;
  float: left;
  font-size: 25px;
  padding-right: 0.5%;
}

.navigation-bar h1#last-name {
  color: #4caf50;
  float: left;
  font-size: 25px;
}

.navigation-bar div {
  margin-left: 15%;
}

/* Styling for links within nav bar */
.navigation-bar a {
  float: left;
  color: #ffffff;
  text-align: center;
  padding: 1% 1%;
  text-decoration: none;
  font-size: 17px;
  margin-top: 0.7%;
  margin-right: 0.5%;
}

/* Hover over links */
.navigation-bar a:hover {
  background-color: #4caf50;
  color: rgb(249, 249, 249);
}

/* Active link (determined by event handler in JavaScript) */
.navigation-bar .router-link-active {
  background-color: #f03a47;
  color: rgb(255, 255, 255);
}

/* Responsiveness */
@media screen and (max-width: 768px) {
  .navigation-bar .menu-icon {
    display: block;
  }

  .navigation-bar #nav-links.responsive {
    display: block;
  }

  .navigation-bar #nav-links a {
    float: left; 
    display: block;
    text-align: center;
    font-size: 15px;
  }
  .navigation-bar h1 {
    font-size: 18px;
    margin-top: 1.5%;

  }
  .navigation-bar h1#last-name {
    font-size: 18px;
    padding-right: 10%;
    margin-top: 1.5%;
    margin-left: 1%;
  }
}
</style>
