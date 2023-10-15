This is the landing page for the website. Anytime a user clicks "Home" in the
navigation bar, this is where they will be redirected.

<template>
  <body id="body">

    <div>
      <NavigationBar></NavigationBar>
    </div>

    <div class="about-section">
      <h1>About Me</h1>
      <p>
        My name is Pratik Pande. I am a senior at the University of Nebraska -
        Lincoln, and I am currently pursuing a major in Computer Science along
        with minors in Mathematics and Business Administration. My academic
        journey has not only equipped me with a strong foundation in software
        engineering but also honed my analytical and business acumen. I am
        extremely passionate about programming. My goal is to always seek out
        opportunities in which I can apply my software engineering skills to
        their highest degree and continue to learn new things every single day.
      </p>
      <p>
        In my quest to embrace challenges and expand my knowledge, I am now
        actively seeking full-time entry-level opportunities in software
        engineering and product management. I am eager to contribute my skills,
        creativity, and problem-solving abilities to organizations that foster
        innovation and a dynamic learning environment. I am committed to
        evolving my capabilities and delivering impactful solutions, making a
        positive impact on the projects I undertake.
      </p>
      <p>
        My unwavering passion for programming has driven me to excel in various
        projects, from developing innovative software solutions to collaborating
        with cross-functional teams. I am motivated by a relentless pursuit of
        excellence and the desire to stay at the forefront of technological
        advancements.
      </p>
    </div>

    <div class="tabs">
        <button
          class="tab"
          :class="{ active: activeTab === 'education' }"
          @click="setActiveTab('education')"
        >
          Education
        </button>
        <button
          class="tab"
          :class="{ active: activeTab === 'skills' }"
          @click="setActiveTab('skills')"
        >
          Skills
        </button>
        <button
          class="tab"
          :class="{ active: activeTab === 'download-resume' }"
          @click="setActiveTab('download-resume')"
        >
          Download Resume
        </button>
    </div>

    <!-- <div class="tab-content">
      <div v-if="activeTab == education">
        <p>University of Nebraska - Lincoln</p>
        <p>Bachelor of Science - Computer Science (minors in Mathematics & Business Administration)</p>
      </div> 
    </div> -->

  </body>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
  data() {
    return {
      activeTab: "education", // Default to "Education"
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
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

  .about-section {
    margin-top: 15%;
    align-items: center;
    color: #F03A47;
  }

  .about-section h1 {
    text-align: left;
    padding-left: 10%;
  }

  .about-section p {
    text-align: left;
    padding-left: 15%;
    padding-right: 25%;
    color: white; 
  }

  .tabs {
  display: flex;
  justify-content: center;
}

.tab {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 2% 4%; /* Responsive padding */
  margin: 2%;
  color: #F03A47;
  font-weight: bold;
  font-size: 1.2vw; /* Responsive font size using vw */
}

.tab.active {
  border-bottom: 2px solid #ffffff;
}

.tab:hover:not(.active) {
  transition: border 0.3s;
}

.content {
  padding: 5% 10%; /* Responsive padding */
  font-size: 2vw; /* Responsive font size using vw */
}

.tab-content p {
  color: white; 

}

</style>
