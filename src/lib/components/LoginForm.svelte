<script lang="ts">
  export let authCollection = "users";
  import { client, providerLogin } from "../pocketbase";
  const coll = client.collection(authCollection);

  let email: string;
  let name: string;
  let password: string;
  let passwordConfirm: string;
  let create = false;
  let tab:string = "SignIn";
  async function submit() {
    if (create) {
      await coll.create({ email, name, password, passwordConfirm });
    }
    await coll.authWithPassword(email, password);
  }
  function selectTab(selectedTab: string) {
    tab = selectedTab;
  }
</script>
<style>
  .active {
    background-color: #333;
    color: #fff;
  }
</style>
<form on:submit|preventDefault={submit}>
  <div>
    <div>         
      <button class:active={tab === 'SignIn'} on:click|preventDefault={()=> selectTab('SignIn')}>Sign In</button>
      <button class:active={tab === 'SignUp'} on:click|preventDefault={()=> selectTab('SignUp')}>Sign Up</button>
    </div>
    {#if tab === 'SignIn'}    
      <div>
        <input bind:value={email} required type="text" placeholder="email" />
        <input
          bind:value={password}
          required
          type="password"
          placeholder="password"
        />
        <button type="submit" on:click={() => (create = false)}
          >Sign In</button
        >
      </div>
    {/if}

    {#if tab === 'SignUp'}
      <div>
        <input bind:value={email} required type="text" placeholder="email" />
        <input
          bind:value={password}
          required
          type="password"
          placeholder="password"
        />
        <input
          bind:value={passwordConfirm}
          required
          type="password"
          placeholder="confirm password"
        />
        <input
          bind:value={name}
          required
          type="text"
          placeholder="name / label"
        />
        <input type="hidden" name="register" value={true} />
        <button type="submit" on:click={() => (create = true)}>Sign Up</button
        >
      </div>
    {/if}    
  </div>
  {#await coll.listAuthMethods({ $autoCancel: false }) then methods}
    {#each methods.authProviders as p}
      <button type="button" on:click={() => providerLogin(p, coll)}
        >Sign-in with {p.name}</button
      >
    {/each}
  {:catch}
    <!-- pocketbase not working -->
  {/await}
</form>
