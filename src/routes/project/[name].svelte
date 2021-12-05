<script context="module" lang="ts">
  import projects from "./projects";
  import type { Project } from "../../types/Project";
  import type { LoadReturn } from "../../types/LoadReturn";

  interface Error {
    status: number;
    error: string;
  }

  interface ReturnProject {
    project: Project;
  }

  export async function load({
    page,
  }): Promise<Error | LoadReturn<ReturnProject>> {
    const name = page.params.name;

    const project = projects.filter((project) => project.name === name);

    if (project.length === 0)
      return {
        status: 404,
        error: `Can not find project: ${name}`,
      };

    return {
      props: {
        project: project[0],
      },
    };
  }
</script>

<script lang="ts">
  import { blur } from "svelte/transition";

  export let project: Project;
  const { name, description, link, image, technologies } = project;
</script>

<svelte:head>
  <title>Mwelwa Nkuta - {name}</title>
  <meta name="description" content={description} />
</svelte:head>

<main in:blur>
  <div class="info">
    <h1 class="title">{name}</h1>
    <p class="description">{description}</p>
    <a href={link} target="_blank" class="link">{link}</a>
  </div>

  <img src={`/projects/${image}`} alt="" class="image" />

  <div class="about-project-info">
    <h2 class="title">Technologies Used</h2>
    <ul>
      {#each technologies as technology (technology)}
        <li><p>{technology}</p></li>
      {/each}
    </ul>
  </div>
</main>

<style lang="scss">
  @import "./style.scss";
</style>
