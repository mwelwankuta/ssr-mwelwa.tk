<script lang="ts">
  import axios from "axios";

  import { onMount } from "svelte";

  let playing: boolean | undefined;
  let currentlyPlayingSong: string;
  let currentlyPlayingLink: string;

  onMount(async () => {
    const response = await axios.get("/api/currently-playing");

    const status = response.status;
    const currentlyPlaying = response.data;

    if (status > 200 || !currentlyPlaying.playing) {
      return (playing = false);
    } else {
      playing = currentlyPlaying.is_playing;
      currentlyPlayingSong = currentlyPlaying.item.name;
      currentlyPlayingLink = currentlyPlaying.item.external_urls.spotify;
    }
  });
</script>

<svelte:window />

<footer>
  <a href={currentlyPlayingLink} target="_blank" class="listening">
    <img
      src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg"
      alt="spotify logo"
    />
    <p class:playing>
      {typeof playing === "boolean"
        ? playing === true
          ? currentlyPlayingSong
          : "Not Playing"
        : "Loading..."} - Spotify
    </p>
  </a>
  <div class="footer-content">
    <div class="first-col">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
    <div class="second-col">
      <a href="https://twittter.com/Merlee4t" target="_blank">Twitter</a>
      <a href="https://github.com/mwelwankuta" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/mwelwa" target="_blank">LinkedIn</a>
    </div>
    <div class="third-col">
      <a href="/" target="_blank">Twitter</a>
      <a href="/" target="_blank">GitHub</a>
      <a href="/" target="_blank">LinkedIn</a>
    </div>
  </div>
  <p class="copyright">Copyright &copy; 2021 Mwelwa Nkuta</p>
</footer>

<style lang="scss">
  @import "./style.scss";
</style>
