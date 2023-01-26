<script>
  import notifications, { dismiss } from '$/stores/notification'
  import Notification from '$/components/Notification.svelte'
  import { flip } from 'svelte/animate'
</script>

<div
  class="absolute notifications bottom-0 md:bottom-unset md:top-2 md:right-3 md:w-sm flex flex-col-reverse md:flex-col items-center justify-center wfull gap2 p2 pt3"
>
  {#each $notifications as notification (notification.id)}
    <div class="w-full" animate:flip>
      <Notification {notification} on:click={() => dismiss(notification)} />
    </div>
  {/each}
</div>
