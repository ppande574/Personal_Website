(function(){"use strict";var e={1644:function(e,n,t){var a=t(9242),o=t(3396);function r(e,n,t,a,r,i){const s=(0,o.up)("NavigationBar"),c=(0,o.up)("router-view"),l=(0,o.up)("FooterBar");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(s),(0,o.Wm)(c),(0,o.Wm)(l)])}const i=e=>((0,o.dD)("data-v-eadea258"),e=e(),(0,o.Cn)(),e),s={class:"name-link"},c=i((()=>(0,o._)("h1",null,[(0,o.Uk)("Pratik "),(0,o._)("span",null,"Pande")],-1))),l={class:"navigation-bar"},u={id:"nav-links"};function p(e,n){const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",s,[(0,o.Wm)(t,{to:{name:"home"}},{default:(0,o.w5)((()=>[c])),_:1})]),(0,o._)("div",l,[(0,o._)("div",u,[(0,o.Wm)(t,{to:{name:"home"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Wm)(t,{to:{name:"projects"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Portfolio")])),_:1}),(0,o.Wm)(t,{to:{name:"contact"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact Me")])),_:1})])])],64)}var d=t(89);const m={},h=(0,d.Z)(m,[["render",p],["__scopeId","data-v-eadea258"]]);var f=h;const g=(0,o.uE)('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"><footer class="footer"><div class="social-icons"><a href="https://www.linkedin.com/in/ppande01/" target="_blank"><i class="fab fa-linkedin"></i></a><a href="https://github.com/ppande574" target="_blank"><i class="fab fa-github"></i></a></div><p><span>©2024 Pratik Pande</span></p></footer>',2);function v(e,n){return g}const b={},w=(0,d.Z)(b,[["render",v]]);var y=w,k={name:"App",components:{NavigationBar:f,FooterBar:y},methods:{}};const P=(0,d.Z)(k,[["render",r]]);var S=P,C=t(2483),_=t.p+"img/homepage-welcome-image.a12ded85.png";const I=(0,o.uE)('<div class="welcome-section"><h1>Welcome to my Personal Website!</h1><img src="'+_+'" alt="Welcome Image"></div><div class="about-section"><h1>About Me</h1><p> My name is Pratik Pande and I am a fourth-year college student <span>currently pursuing a Bachelor&#39;s in Computer Science along with minors in Mathematics and Business Administration.</span> My academic journey has not only equipped me with a strong foundation in software engineering but also honed my analytical and business acumen. I am extremely passionate about programming. My goal is to always seek out opportunities in which I can apply my software engineering skills to their highest degree and continue to learn new things every single day. </p><p> In my quest to embrace challenges and expand my knowledge, <span>I am now actively seeking full-time entry-level opportunities in software engineering and development. I am also open to internships in either field.</span></p><div id="skills-section"><h1>Skills</h1><p><span>Programming Languages/Frameworks:</span> C# (ASP.NET MVC), Python, Java, C/C++, JavaScript (NestJS, VueJS, ReactJS), TypeScript, Ionic, SQL </p><p><span>Technologies:</span> GitHub, Microsoft Azure, Figma, Zenhub, Docker, Firebase, IDE&#39;s (Eclipse, Jetbrains Rider, VS, VSCode), Docker </p><p><span>Other: </span>Communication, Algorithm Analysis/Design, Debugging, Problem-Solving, Teamwork </p></div></div>',2),R={class:"resume-button"};function j(e,n,t,a,r,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[I,(0,o._)("div",R,[(0,o._)("button",{onClick:n[0]||(n[0]=(...e)=>i.downloadResume&&i.downloadResume(...e))},"Download Resume")])],64)}t(6229),t(7330),t(2062);var A={methods:{downloadResume(){const e="Generic_ResumeForWebsite.pdf";fetch(e).then((e=>e.blob())).then((e=>{const n=URL.createObjectURL(e),t=document.createElement("a");t.href=n,t.setAttribute("download","Pratik_Pande_Resume.pdf"),t.click(),URL.revokeObjectURL(n)})).catch((e=>{console.error("Error fetching PDF:",e)}))}}};const J=(0,d.Z)(A,[["render",j]]);var O=J;function D(e,n){return(0,o.wg)(),(0,o.iD)("h1",null,"Contact Me on LinkedIn, and check out my GitHub!")}const W={},E=(0,d.Z)(W,[["render",D]]);var L=E;const M=(0,o.uE)("<h1>Check out all of my projects on Github!</h1><h2>Professional Software Development Project</h2><p> Spearheaded development of a robust API service for a restaurant b2b client using NestJS alongisde a team of student software engineers. Seamlessly established a communication channel to accept requests and transfer data along the client and a 3rd party service to create and invoice processing pipeline while performing rigorous testing with JestJS, managing version control via GitHub, and adhering to agile development methodologies, supplemented with extensive documentation. Additionally, created a dynamic, database-backed web-application with product reports table to allow users to filter, search, and view information about individual products and inventory, as well as track pricing history and trends over time. Leveraged <span>VueJS, NestJS, NodeJS, PostgreSQL and TypeScript</span>. </p><h2>Currency Converter Console Application</h2><p> Created a console-based currency converter in <span>Java</span>. Allows users to enter any two currencies, and the value they would like to convert as a decimal number. It then returns the converted value. </p><h2>Interactive Pong Game</h2><p> Created interactive, GUI-based, two-player game &quot;Pong&quot; game in <span>Python</span>. Leveraged Python&#39;s PyGame library to handle user inputs, event-handling, and logic for dynamically updating screen. </p><h2>IN PROGRESS: Workout Application</h2><p> A project utilizing the <span>MongoDB, ReactJS, Express, and NodeJS</span> to help track workouts. </p><h2>IN PROGRESS: Currency Converter 2.0</h2><p> Leveraging <span>C# (ASP.NET Web API) and ReactJS</span> to build an updated, web-based Currency Converter. </p>",11);function N(e,n){return M}const x={},G=(0,d.Z)(x,[["render",N]]);var U=G;const F=[{path:"/home",name:"home",component:O},{path:"/contact",name:"contact",component:L},{path:"/projects",name:"projects",component:U},{path:"",redirect:{name:"home"}}],T=(0,C.p7)({history:(0,C.r5)(),routes:F});var B=T;(0,a.ri)(S).use(B).mount("#app")}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={exports:{}};return e[a].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,r){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[c])}))?a.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var l=o();void 0!==l&&(n=l)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,o,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/Personal_Website/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,r,i=a[0],s=a[1],c=a[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var u=c(t)}for(n&&n(a);l<i.length;l++)r=i[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},a=self["webpackChunkpersonal_website"]=self["webpackChunkpersonal_website"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(1644)}));a=t.O(a)})();
//# sourceMappingURL=app.c55164e2.js.map