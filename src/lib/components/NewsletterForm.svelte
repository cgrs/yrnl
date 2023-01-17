<script>
  import { info, error } from '$/stores/notification'
  export let subscribeURL = ''
  let form
  let email
  let disabled = false
  async function subscribe() {
    disabled = true
    try {
      const response = await fetch(subscribeURL, {
        method: 'POST',
        body: new FormData(form),
        mode: 'cors',
      })
      if (response.status >= 400 && response.status <= 500) {
        const body = await response.text()
        throw body
      }
      info('Check your inbox to confirm the subscription.')
    } catch (err) {
      console.error(err)
      error(
        `Something unexpected happened when trying to subscribe ¯\\_(ツ)_/¯`
      )
    } finally {
      disabled = false
      email = ''
    }
  }
</script>

<div>
  <h1 class="text-lg">Subscribe to receive updates:</h1>
  <form
    bind:this={form}
    class="pt3 flex gap2"
    action={subscribeURL}
    method="post"
    target="_blank"
    on:submit|preventDefault={subscribe}
    class:cursor-wait={disabled}
  >
    <input
      type="email"
      name="email"
      placeholder="youremail@example.com"
      class="text-sm px2 bg-neutral1 b-none font-sans placeholder:c-primary9 c-primary9 focus:outline-none focus:ring focus:ring-primary4 rounded-sm"
      required
      {disabled}
      bind:value={email}
    />
    <button
      type="submit"
      class="text-sm tracking-wide b-none px2 py2 font-sans fwbold rounded-sm bg-primary7 c-neutral1"
      class:cursor-pointer={!disabled}
      {disabled}>Subscribe</button
    >
  </form>
</div>
