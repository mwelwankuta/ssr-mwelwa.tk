<script context="module" lang="ts">
  interface Error {
    message: string | number;
  }

  interface Page {
    status: string;
    error: Error;
  }

  export async function load(page: Page) {
    return {
      props: {
        status: page.status,
        code: page.error.message,
      },
    };
  }
</script>

<script lang="ts">
  export let code: string;
  export let status: number;
</script>

<svelte:head>
  <title>Mwelwa | {status}</title>
  <meta name="description" content={code} />
</svelte:head>

<main>
  <div class="info">
    <h1 class="title">{status}</h1>
    <p class="description">{code}</p>
  </div>
</main>
