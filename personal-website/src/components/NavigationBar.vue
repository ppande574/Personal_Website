This is the navigation bar component of the website.

<template>
  <div class="navigation-bar">
    <h1>Pratik Pande</h1>
    <div id="nav-links">
        <a class="active" href="#home">Home</a>
        <a href="#experience">Experience</a>
        <a href="#interests">Interests</a>
    </div>
  </div>
</template>

<script>
    export default {
    
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
        font-size: 17px; 
        padding: .3% 1%
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
    }

    /* Hover over links */
    .navigation-bar a:hover {
        background-color: #F03A47;
        color: rgb(255, 255, 255);
    }

    /* Active link */
    .navigation-bar a.active {
        background-color: #F03A47;
        color: rgb(249, 249, 249);
    }
</style>
