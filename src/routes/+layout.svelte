<script context="module">
  import { beforeNavigate } from "$app/navigation";
  import { metadata } from "$lib/app/stores";
  import { site } from "$lib/config";
</script>

<script lang="ts">
  import LoginBadge from "$lib/components/LoginBadge.svelte";

  $: title = $metadata.title ? $metadata.title + " | " + site.name : site.name;
  $: description = $metadata.description ?? site.description;
  // reset metadata on navigation so that the new page inherits nothing from the old page
  beforeNavigate(() => {
    $metadata = {};
  });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<header>
  <LoginBadge />
</header>
<main>
  <slot />
</main>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;    
  }
</style>
