This is the navigation bar component of the website. Every time a element in the nav bar is clicked, the "setActiveLink" JS method
is called, which sets the current link as the active link. 

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
    /* Styling for navigation bar itself */
    .navigation-bar {
        /* margin: 0; 
        padding: 0; */
        overflow: hidden;
        align-content: right;
    }

    .navigation-bar h1 {
        color:  #F03A47;
        float: left;
        font-size: 25px; 
        padding-right: 0.5%;
    }

    .navigation-bar h1#last-name {
        color:  #4CAF50;
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
        margin-top: .7%;
        margin-right: 0.5%;
        /* border-radius: 105%; */
    }

    /* Hover over links */
    .navigation-bar a:hover {
        background-color:  #4CAF50;
        color: rgb(249, 249, 249);
    }

    /* Active link (determined by event handler in JavaScript) */
    .navigation-bar .router-link-active { 
        background-color: #F03A47;
        color: rgb(255, 255, 255);
    }
</style>
