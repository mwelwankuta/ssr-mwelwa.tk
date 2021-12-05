<script context="module" lang="ts">
  import axios from "axios";
  import type { LoadReturn } from "src/types/LoadReturn";

  interface Followers {
    githubFollowers: number;
    githubUrl: string;
  }

  export async function load(): Promise<LoadReturn<Followers>> {
    try {
      const response = await axios.get("/api/github-followers");
      const github = response.data;
      return {
        props: {
          githubFollowers: github.followers,
          githubUrl: github.html_url,
        },
      };
    } catch (error) {
      return {
        props: {
          githubFollowers: 0,
          githubUrl: "/",
        },
      };
    }
  }
</script>

<script lang="ts">
  // component imports
  import DashboardCard from "../../components/DashboardCard/DashboardCard.svelte";
  import TrackItem from "../../components/TrackItem/TrackItem.svelte";

  // favorite tracks
  import favoriteTracks from "./tracks";

  export let githubFollowers: number;
  export let githubUrl: string;
</script>

<svelte:head>
  <title>Mwelwa Nkuta - Dashboard</title>
  <meta
    name="description"
    content="this is my personal dashboard to track all my metrics across platforms like twitter & github, here are some of my favourite tracks as well."
  />
</svelte:head>

<main>
  <h1>Dashboard</h1>
  <p>
    This is my personal dashboard to track my metrics across platforms like
    Twitter & GitHub
  </p>

  <div class="dashboard-content">
    <DashboardCard
      title="GitHub Followers"
      count={githubFollowers}
      link={githubUrl}
    />
    <DashboardCard title="Twitter Followers" count={0} link="" />
    <DashboardCard title="GitHub Repos" count={0} link="" />
    <DashboardCard title="Start Repo Downloads" count={0} link="" />
  </div>

  <h2>Music</h2>
  <p>Here are some of my favorite tracks</p>

  <div class="track-list">
    {#each favoriteTracks as track (track.id)}
      <TrackItem
        title={track.title}
        artist={track.artist}
        link={track.link}
        index={track.id}
      />
    {/each}
  </div>
</main>

<style lang="scss">
  @import "./style.scss";
</style>
