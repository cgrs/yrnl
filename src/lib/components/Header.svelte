<script>
  import { link } from 'svelte-spa-router'
  import logo from '@/assets/logo.svg'
  import LoginButton from '$/components/LoginButton.svelte'
</script>

<nav
  class="flex items-center justify-between p2 gap2 bg-primary md:px15% xl:px25%"
>
  <span class="logo">
    <a href="/" use:link>
      <img src={logo} class="wfull hfull" alt="yournal logo" />
    </a>
  </span>
  <ul class="m0 p0 list-none flex gap2">
    <li><LoginButton /></li>
  </ul>
</nav>

<style scoped>
  .logo {
    --at-apply: w14 h14 p2 op75;
  }
</style>
