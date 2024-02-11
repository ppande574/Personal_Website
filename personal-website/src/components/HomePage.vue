<template>
  <div class="welcome-section">
    <h1>Welcome to my Personal Website!</h1>
    <img src="@/assets/homepage-welcome-image.png" alt="Welcome Image" />
  </div>
  <div class="about-section">
    <h1>About Me</h1>
    <p>
      My name is Pratik Pande and I am a fourth-year college student
      <span
        >currently pursuing a Bachelor's in Computer Science along with minors
        in Mathematics and Business Administration.</span
      >
      My academic journey has not only equipped me with a strong foundation in
      software engineering but also honed my analytical and business acumen. I
      am extremely passionate about programming. My goal is to always seek out
      opportunities in which I can apply my software engineering skills to their
      highest degree and continue to learn new things every single day.
    </p>
    <p>
      In my quest to embrace challenges and expand my knowledge,
      <span
        >I am now actively seeking full-time entry-level opportunities in
        software engineering and development. I am also open to internships in
        either field.</span
      >
    </p>
    <div id="skills-section">
      <h1>Skills</h1>
      <p>
        <span>Programming Languages/Frameworks:</span> C# (ASP.NET MVC), Python,
        Java, C/C++, JavaScript (NestJS, VueJS, ReactJS), TypeScript, Ionic, SQL
      </p>
      <p>
        <span>Technologies:</span> GitHub, Microsoft Azure, Figma, Zenhub,
        Docker, Firebase, IDE's (Eclipse, Jetbrains Rider, VS, VSCode), Docker
      </p>
      <p>
        <span>Other: </span>Communication, Algorithm Analysis/Design, Debugging,
        Problem-Solving, Teamwork
      </p>
    </div>
  </div>
  <div class="resume-button">
    <!-- <a href="@/public/Generic_ResumeForWebsite.pdf" download="PandeResume.pdf">Download My Resume!</a> -->
    <button @click="downloadResume">Download Resume</button>
  </div>
</template>

<script>
export default {
  methods: {
    downloadResume() {
      // Replace 'path_to_your_resume.pdf' with the actual path to your PDF resume
      const resumePath = '/Generic_ResumeForWebsite.pdf';

      // Fetch the PDF file as a blob
      fetch(resumePath)
        .then(response => response.blob())
        .then(blob => {
          // Create a blob URL for the blob
          const url = URL.createObjectURL(blob);
          
          // Create a temporary anchor element
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'Pratik_Pande_Resume.pdf');
          
          // Programmatically trigger a click event on the anchor element to initiate the download
          link.click();
          
          // Cleanup: Revoke the blob URL after the download
          URL.revokeObjectURL(url);
        })
        .catch(error => {
          console.error('Error fetching PDF:', error);
        });
    }
  }
}
</script>

<style>
.welcome-section {
  margin-top: 1%;
  align-items: center;
  text-align: center;
}

.welcome-section h1 {
  color: #f03a47;
}

.welcome-section img {
  max-width: 100%;
  height: auto;
  display: block; /* Center the image */
  margin: 0 auto; /* Center the image horizontally */
}

.about-section {
  margin-top: none;
  align-items: center;
}

.about-section h1 {
  color: #f03a47;
  text-align: left;
  padding-left: 20%;
  text-decoration: underline;
}

.about-section p {
  text-align: left;
  padding-left: 25%;
  padding-right: 25%;
  color: white;
}

.about-section p span {
  color: #4caf50;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.tab {
  margin-top: 3%;
  color: #f03a47;
  cursor: pointer;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px white;
  outline: white;
  font-size: 18px;
}

.tab.active {
  color: #4caf50;
  border-bottom: 2px solid #4caf50;
}

.tab-content {
  text-align: center;
}

.resume-button button {
  margin-top: 2%;
  background-color: #4caf50; /* Background color */
  color: #ffffff; /* Text color */
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s; /* Smooth background color transition */
  text-decoration: none;
}

.resume-button button:hover {
  background-color: #f03a47; /* Hover color */
}
.social-icons {
  text-align: center;
  margin-top: 2%;
}

.social-icons a {
  display: inline-block;
  margin: 0 10px; /* Adjust the margin to control the space between icons */
  font-size: 32px;
  color: #ffffff;
}

.social-icons a i {
  transition: color 0.3s; /* Smooth color transition on hover */
}

.social-icons a i:hover {
  color: #f03a47; /* Hover color */
}
</style>
