<script>
  import { fly } from 'svelte/transition'
  export let notification
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="notification-container text-sm leading-6 wfull p2 flex cursor-pointer rounded-sm border-solid b-1 {notification.type}"
  transition:fly={{ y: 10 }}
>
  <i class="i-tabler-x self-start order-last min-w3.5" on:click />
  <span class="grow notification-text">{notification.message}</span>
</div>

<style scoped>
  .success {
    --at-apply: bg-emerald6 border-emerald8 text-neutral1;
  }
  .error {
    --at-apply: bg-red6 border-red8 text-neutral1;
  }
  .info {
    --at-apply: bg-sky5 border-sky6 text-neutral1;
  }
  .notification-text {
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
</style>
