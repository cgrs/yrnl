<script>
  import BaseLayout from '$/layouts/BaseLayout.svelte'
  import Footer from '$/components/Footer.svelte'
  import NewsletterForm from '$/components/NewsletterForm.svelte'
</script>

<BaseLayout>
  <slot />
  <Footer slot="footer">
    <NewsletterForm
      subscribeURL={`https://buttondown.email/api/emails/embed-subscribe/yournal`}
    />
  </Footer>
</BaseLayout>
