<script>
  import './styles/main.scss'
  import Router from 'svelte-spa-router'
  import routes from '$/routes'
</script>

<Router {routes} />

<style uno:preflights global></style>
