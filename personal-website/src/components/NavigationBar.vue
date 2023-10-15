<template>
  <div class="navigation-bar">
    <a class="active" href="#home">Home</a>
    <a href="#experience">Experience</a>
    <a href="#interests">Interests</a>
  </div>
</template>

<script>
    export default {
    
    };
</script>

<style>
    /* Styling for navigation bar itself */
    .navigation-bar {
        margin: 0; 
        padding: 0;
        background-color: #333;
        overflow: hidden;
    }

    /* Styling for links within nav bar */
    .navigation-bar a {
        float: left;
        color: #ffffff;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    /* Hover over links */
    .navigation-bar a:hover {
        background-color: #ddd;
        color: rgb(255, 1, 1);
    }

    /* Active link */
    .navigation-bar a.active {
        background-color: #04AA6D;
        color: rgb(249, 249, 249);
    }
</style>
