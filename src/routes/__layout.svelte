<script>
  import NavBar from "../components/NavBar/NavBar.svelte";
  import Footer from "../components/Footer/Footer.svelte";
</script>

<NavBar />
<div class="container">
  <slot />
</div>
<Footer />
