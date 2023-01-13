import { wrap } from 'svelte-spa-router/wrap'
import LandingPage from '@/pages/LandingPage.svelte'

const routes = {
  '*': wrap({
    component: LandingPage,
  }),
}

export default routes
