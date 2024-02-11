This is the navigation bar component of the website. Every time a element in the
nav bar is clicked, the "setActiveLink" JS method is called, which sets the
current link as the active link.

<template>
  <div class="name-link">
    <router-link :to="{ name: 'home' }"
      ><h1>Pratik <span>Pande</span></h1></router-link
    >
  </div>
  <div class="navigation-bar">
    <div id="nav-links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'projects'}">Portfolio</router-link>
      <router-link :to="{ name: 'contact'}">Contact Me</router-link>
    </div>
  </div>
</template>



<style scoped>
.name-link {
  margin-left: 2%;
}

.name-link h1 {
  color: #f03a47;
  float: left;
  font-size: 25px;
}

.name-link h1 span {
  color: #4caf50;
  font-size: 25px;
}

.navigation-bar {
  overflow: hidden;
}

.navigation-bar div {
  margin-left: 5%;
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
  .name-link h1 {
    font-size: 18px;
    margin-top: 1.5%;
  }
  .name-link h1 span {
    font-size: 18px;
    margin-top: 1.5%;
  }
}
</style>
