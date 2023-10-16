This is the navigation bar component of the website. Every time a element in the nav bar is clicked, the "setActiveLink" JS method
is called, which sets the current link as the active link. 

<template>
  <div class="navigation-bar">
    <h1>Pratik Pande</h1>
    <div id="nav-links">
      <a :class="{ active: activeLink === 'home' }" @click="setActiveLink('home')" href="#home">Home</a>
      <a :class="{ active: activeLink === 'experience' }" @click="setActiveLink('experience')" href="#experience">Experience</a>
      <a :class="{ active: activeLink === 'interests' }" @click="setActiveLink('interests')" href="#interests">Interests</a>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                activeLink: 'home' // By default, the active link is set to the home page (landing page)
            };  
        },
        methods: {

            /**
             * @param {*} link 
             * We pass the "home", "experience" and "interests" links as arguments when clicked upon and set them active.
             * Upon doing so, the HTML element is assigned the "active" class, which allows for it to be styled accordingly by CSS.
             */

            setActiveLink(link) { 
                this.activeLink = link; 
            }
        }
    };
</script>

<style scoped>
    /* Styling for navigation bar itself */
    .navigation-bar {
        /* margin: 0; 
        padding: 0; */
        overflow: hidden;
        align-content: right;
    }

    .navigation-bar h1 {
        color: #F03A47;
        float: left;
        font-size: 25px; 
        padding-left: 1%;
        padding-right: 1%; 
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
        color: #F03A47;
        background-color: rgb(255, 255, 255);
    }

    /* Active link (determined by event handler in JavaScript) */
    .navigation-bar a.active { 
        background-color: #F03A47;
        color: rgb(249, 249, 249);
    }
</style>
