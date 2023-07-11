<script lang="ts">
  import { authModel, client } from "../pocketbase";
  import LoginForm from "./LoginForm.svelte";
  
  let keepAliveInterval: number;
  let activeMessage;

  self.addEventListener('message', async (event) => {
    // Check the origin of the message to ensure it's from your extension
    if (event.origin !== 'https://chat.openai.com') {
        return;
    }

    if(event?.data?.type === 'gptReply') {
      await client.collection('messages').update(activeMessage.id, {reply: event?.data?.data});
    } 
  });

  async function postMessage(message) {
    if(message) {
      // Inside your iframe
      self?.parent?.postMessage({
      type: 'query',
      data: message.content,
      stream: message.stream || false
      }, '*');
    }
  }

  async function startAgent(userId) {
    if(!userId) return;
    if(!keepAliveInterval) {
      // Start sending keepAlive messages every 15 seconds
      keepAliveInterval = setInterval(() => keepAlive(userId), 15000);
      client.collection("messages").subscribe("*", async (e) => {
        console.log({e});
        if(e?.record && e.action === 'create') {
          activeMessage = e.record;
        }
      });
    }
  }

  async function keepAlive(userId) {
    if(!userId) return;
    // Replace this with the actual API call to send the keepAlive message
    console.log('keepAlive message sent to server');
    if(userId) {
      await client.collection('users').update(userId, {status: 'online'});
    }
  }

  async function logout() {
    if(keepAliveInterval)  {
      client.collection("messages").unsubscribe("*");
      // Stop sending keepAlive messages
      clearInterval(keepAliveInterval);
    }
    // Send the disconnected message to the server
    // Replace this with the actual API call to send the disconnected message
    console.log('disconnected message sent to server');    
    if($authModel?.id) {
      await client.collection('users').update($authModel?.id, {status: 'offline'});
    }
    client.authStore.clear();
  }
  $: postMessage(activeMessage);
  $: startAgent($authModel?.id);
</script>

{#if $authModel}
  <div>
    <div class="badge">
      <samp
        >{$authModel?.name ?? $authModel?.username ?? $authModel?.email}</samp
      >
    </div>
    <button on:click={logout}>Sign Out</button>
  </div>
{:else}
  <div>
    <LoginForm />
  </div>
{/if}

<style lang="scss">
  .badge {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px;
    gap: 5px;
    > img {
      height: 2em;
      width: 2em;
      border-radius: 50%;
    }
  }
  .wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
