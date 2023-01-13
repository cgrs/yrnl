<script>
  import BaseLayout from '$/layouts/BaseLayout.svelte'
  import Footer from '$/components/Footer.svelte'
  import NewsletterForm from '$/components/NewsletterForm.svelte'
</script>

<BaseLayout>
  <slot />
  <Footer slot="footer">
    <NewsletterForm />
  </Footer>
</BaseLayout>
