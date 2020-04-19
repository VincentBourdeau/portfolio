<template>
  <div class="full-page-wrapper is-white">

    <!-- Nav -->
    <nav-bar class="container is-full" />

    <!-- Client Projects -->
    <section class="container articles-wrapper">
      <div class="row">
        <article class="col-12">
          <h2 class="big-title">Client projects</h2>
          <ul class="projects-list">
            <li>
              <h3 class="medium-title">PWA :: Productions Point A - Client Portal</h3>
              <p class="regular-text">Every Events organiser and most of all Wedding planners need to have a good way of communicating with his clients. With this custom Web App, Productions Point A is able to regroup everything he needs into 1 page. Informations, Ressources, instant messages, files, forms, invoices, calendar and more!</p>

              <a class="main-link" href="https://zone-clients.productionspointa.com/connexion" target="_blank" rel="noopener noreferer">https://zone-clients.productionspointa.com/connexion</a>
              <h4 class="regular-title">
                <span class="tag">PWA</span>
                <span class="tag">Desktop App</span>
                <span class="tag">Craft CMS</span>
                <span class="tag">Events Planner</span>
              </h4>
            </li>
            <li>
              <h3 class="medium-title">PWA :: Metonor - Metal Quotes</h3>
              <p class="regular-text">Metonor used to have multiple .xlsx files to calculate every product they had. Having more 1300+ active products, it became a necessity to have something easier and more user friendly to keep track of all the prices. With this custom Web App, Metoror can Administrate every products details and be in "Sync" with the live metals price market. Including live price update every 5mins, quotes, customs settings for every retailer and more!</p>

              <h4 class="regular-title">
                <span class="tag">PWA</span>
                <span class="tag">Automation</span>
                <span class="tag">VueJs / FireBase</span>
                <span class="tag">Live market price</span>
              </h4>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Client Projects -->
    <section class="container articles-wrapper">
      <div class="row">
        <article class="col-12">
          <h2 class="big-title">Open Source projects</h2>
          <ul class="projects-list">
            <li>
              <h3 class="medium-title">PWA :: RPSLS Game (+Android App)</h3>
              <p class="regular-text">🎮 PWA Game :: Rock, Paper, Scissors, Lizard, Spock - <a href="https://rpsls-b4af9.web.app/" target="_blank" rel="noopener noreferer">https://rpsls-b4af9.web.app/</a></p>

              <a class="main-link" href="https://github.com/VincentBourdeau/rpsls-pwa" target="_blank" rel="noopener noreferer">https://github.com/VincentBourdeau/rpsls-pwa</a>
              <h4 class="regular-title">
                <span class="tag">web</span>
                <span class="tag">game</span>
                <span class="tag">pwa</span>
                <span class="tag">javascript</span>
                <span class="tag">vuejs</span>
                <span class="tag">firebase</span>
                <span class="tag">demo</span>
                <span class="tag">best-practices</span>
                <span class="tag">scaffolding</span>
                <span class="tag">progressive-web-app</span>
                <span class="tag">rock-paper-scissors</span>
              </h4>
            </li>
            <li>
              <h3 class="medium-title">💼 PWA/Website :: My Portfolio project</h3>
              <p class="regular-text">I decided to open-source my Portfolio so that I can show/teach others. My Portfolio will always be Playground and a work in progress, and we will build features together!</p>

              <a class="main-link" href="https://github.com/VincentBourdeau/portfolio" target="_blank" rel="noopener noreferer">https://github.com/VincentBourdeau/portfolio</a>
              <h4 class="regular-title">
                <span class="tag">PWA</span>
                <span class="tag">Website</span>
                <span class="tag">Webperf</span>
                <span class="tag">Exemple</span>
                <span class="tag">Offline</span>
                <span class="tag">Service-worker</span>
                <span class="tag">VueJs</span>
                <span class="tag">Firebase</span>
              </h4>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Contributions -->
    <section class="container articles-wrapper">
      <div class="row">
        <article class="col-12">
          <h2 class="big-title">Contributions</h2>
          <ul class="projects-list">
            <li>
              <h3 class="medium-title">VueJs Starter :: Bento Starter</h3>
              <p class="regular-text">🍱 Full-Stack solution to quickly build PWA applications with Vue.js and Firebase - <a href="https://bento-starter.firebaseapp.com" target="_blank" rel="noopener noreferer">https://bento-starter.firebaseapp.com</a></p>

              <a class="main-link" href="https://github.com/kefranabg/bento-starter" target="_blank" rel="noopener noreferer">https://github.com/kefranabg/bento-starter</a>
              <h4 class="regular-title">
                <span class="tag">PWA</span>
                <span class="tag">Offline</span>
                <span class="tag">Service-worker</span>
                <span class="tag">VueJs</span>
                <span class="tag">VueX</span>
                <span class="tag">CiecleCI</span>
                <span class="tag">FireBase</span>
                <span class="tag">Firebase-auth</span>
                <span class="tag">Firebase-firestore</span>
                <span class="tag">Firebase-hosting</span>
                <span class="tag">Prerendering</span>
                <span class="tag">Template</span>
                <span class="tag">Starter</span>
              </h4>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  head() {
    return {
      title: {
        inner: 'WebApps + Websites developer | Projects'
      },
      meta: [
        // Global Metas OG
        { name: 'application-name', content: `${this.appTitle}` },
        {
          name: 'description',
          content: `${
            this.appTitle
          } Digital Nomad, Freelance, Web Apps & Websites Developper.`,
          id: 'desc'
        },
        // Twitter OG
        { name: 'twitter:title', content: `${this.appTitle}` },
        {
          n: 'twitter:description',
          c: `${
            this.appTitle
          } Digital Nomad, Freelance, Web Apps & Websites Developper.`
        },
        // Facebook / Open Graph
        { property: 'og:title', content: `${this.appTitle}` },
        { property: 'og:site_name', content: `${this.appTitle}` },
        {
          property: 'og:description',
          content: `${
            this.appTitle
          } Digital Nomad, Freelance, Web Apps & Websites Developper.`
        },
        // Og Image
        {
          p: 'og:image',
          c:
            'https://vincbour-11d98.web.app/img/vinc-bour-portfolio-social.png'
        }
      ]
    }
  },
  components: { NavBar, Footer },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.articles-wrapper {
  position: relative;
  margin: 2rem auto 1.5rem auto;
  padding: 2rem 1rem 0 1rem;
  background: #fff;

  z-index: 3;

  &:last-of-type {
    margin-bottom: 1rem;

    @media (min-width: 500px) {
      margin-bottom: 5rem;
    }
  }

  @media (min-width: 500px) {
    margin: 2rem auto 3.5rem auto;
  }

  @media only screen and (min-width: $breakpoint-small) {
    padding: 2rem 2rem 0 2rem;
  }

  @media only screen and (min-width: $breakpoint-large) {
    padding: 2rem 4rem 0 4rem;
  }

  // Article Typography + Blocks components

  .col-12 {
    .article-img-wrapper {
      position: relative;
      width: 100%;

      @media only screen and (min-width: $breakpoint-small) {
        min-height: 225px;
        max-height: 10vw;
        overflow: hidden;
      }
    }
  }

  .big-title {
    font-family: $font-family-regular;
    margin: 0 0 2rem 0;
    padding: 1rem 1rem;
    font-size: 1.475rem;
    line-height: 1;
    font-weight: 600;
    background: rgba(#000, 0.035);
    border-radius: 12px;

    strong {
      color: $accent-color;
    }

    span {
      color: $light-grey;
    }
  }

  .medium-title {
    font-size: 1.15rem;
    margin: 2.5rem 0 0 0;
  }

  .regular-title {
    font-family: $font-family-regular;
    margin: 0;
    padding: 0 0 0.5rem 0;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 400;
    color: $light-grey;

    strong {
      color: $accent-color;
    }

    span {
      color: $light-grey;
    }
  }

  p,
  .regular-text {
    margin: 0.25rem 0 2rem 0;
    padding: 0;
    font-size: 0.95rem;
    line-height: 1.5;
    font-weight: 400;

    a,
    strong {
      color: $accent-color;
    }

    span {
      color: $light-grey;
    }
  }
}

.projects-list {
  margin: 0;
  padding-inline-start: 0;
  padding: 0 1rem;
  list-style-type: none;

  @media (min-width: 500px) {
    padding-inline-start: 40px;
  }

  li {
    padding-bottom: 2rem;
    border-bottom: 2px solid $accent-color;
  }

  .main-link {
    color: $accent-color;
    display: block;
    padding-bottom: 1rem;
    font-size: 0.85rem;

    @media (min-width: 500px) {
      font-size: 1rem;
    }
  }
}
</style>
