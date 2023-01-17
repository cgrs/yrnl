<script>
  import Header from '$/components/Header.svelte'
  import Footer from '$/components/Footer.svelte'
  import Notifier from '$/components/Notifier.svelte'
</script>

<main class="flex flex-col hfull md:ma">
  <Header />
  <section class="flex-1 md:px15% xl:px25%">
    <slot />
  </section>
  <slot name="footer"><Footer /></slot>
  <Notifier />
</main>
