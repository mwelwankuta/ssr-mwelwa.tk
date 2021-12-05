<script lang="ts">
  import ProjectCard from "../components/ProjectCard/ProjectCard.svelte";
  import projects from "./project/projects";
</script>

<svelte:head>
  <title>Mwelwa Nkuta - Home</title>
  <meta
    name="description"
    content="Full-end developer, React, Svelte, Nodejs. GraphQL enthusiast."
  />
</svelte:head>

<header>
  <div class="left-home">
    <img src="/mwelwa.png" alt="" />
    <h1>Mwelwa Nkuta</h1>
    <p>
      Full Stack Developer at <span class="company">Locas Technologies</span>
    </p>
    <ul>
      <li><a href="https://reactjs.org" target="_blank">React</a></li>
      <li><a href="https://kit.svete.dev" target="_blank">SvelteKit</a></li>
      <li><a href="https://nodejs.org" target="_blank">Node.js</a></li>
      <li><a href="https://graphql.org" target="_blank">GraphQL</a></li>
      <li><a href="https://typescript.org" target="_blank">TypeScript</a></li>
      <li><a href="https://www.python.org" target="_blank">Python</a></li>
      <li><a href="https://javascript.com" target="_blank">Javascript</a></li>
    </ul>
    <button class="resume-btn">Download Resume</button>
  </div>

  <div class="right-home">
    <img src="/mwelwa.png" alt="" />
  </div>
</header>
<main>
  <div class="projects-header">
    <h2>Projects</h2>
    <p>4 projects</p>
  </div>
  <div class="content">
    {#each projects as project (project.id)}
      <ProjectCard
        name={project.name}
        description={project.description}
        link={project.link}
      />
    {/each}
  </div>
</main>

<style lang="scss">
  @import "./index.scss";
</style>
