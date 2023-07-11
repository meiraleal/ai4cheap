<script lang="ts">
  import { authModel } from "../lib/pocketbase";
  import { metadata } from "$lib/app/stores";
  $metadata.title = "Home";

</script>

{#if $authModel} 
  <h2>Connected</h2>
{/if}

<style lang="scss">
  nav {
    a {
      padding: 0.5em 1em;
      margin: 0;
      background: var(--background-alt);
      border-bottom: solid var(--background);
      &.active {
        background: var(--background);
        font-weight: bold;
        border-bottom: solid var(--links);
      }
    }
  }
</style>