<script lang="ts">
  import { slide } from "svelte/transition";
  export let name: string = "";
  export let description: string = "";
  export let link: string = "";
</script>

<div class="project-card" in:slide>
  <h2 class="title">{name}</h2>
  <p class="description">{description}</p>
  <div class="actions">
    <a class="visit" href={link}>Visit</a>
    <a class="visit outline" href={`/project/${name}`}>Read more</a>
  </div>
</div>

<style lang="scss">
  @import "./style.scss";
</style>
