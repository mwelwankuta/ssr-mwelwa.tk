<script lang="ts">
  import { fade } from "svelte/transition";

  let showNavImage: boolean = false;

  const handleScroll = (event: Event | any) => {
    const scrollY = event.path[1].scrollY;
    const windowWidth = window.innerWidth;
    const showNavImageHeight = 125;

    if (scrollY >= showNavImageHeight && windowWidth < 600) {
      showNavImage = true;
    } else showNavImage = false;
  };
</script>

<svelte:window on:scroll={handleScroll} />

<nav>
  <div class="nav-content">
    <div class="left-nav">
      <a href="/" class="nav-item">Home</a>
      <a href="/about" class="nav-item">About</a>
      <a href="/dashboard" class="nav-item">Dashboard</a>
      <a href="/tweets" class="nav-item">Tweets</a>
    </div>
    {#if showNavImage}
      <img src="/mwelwa.png" alt="" transition:fade />
    {/if}
  </div>
</nav>

<style lang="scss">
  @import "./style.scss";
</style>
