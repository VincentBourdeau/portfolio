<template>
  <div class="container page-wrapper">
    <div class="row">
      <section class="col-12 content-box">
        <!-- Nav -->
        <nav-bar :home-is-visible="false" />

        <h1>
          Modern Web Expert,<br>
          Development, Consulting & Design <br>
          Ready to <strong>create</strong><span>_</span>
        </h1>
        <h2><span class="tag">Digital Nomad</span> <span class="tag">Freelancer</span> <span class="tag">Web Apps <span class="remove-for-mobile">Developer</span></span> <span class="tag">Websites Developer</span></h2>

        <!-- <a href="https://github.com/VincentBourdeau" rel="noreferer noopener" target="_blank"><svg width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"/></svg></a> -->

        <!-- Floating CTA -->
        <router-link to="/about" class="cta" title="Learn more about me">What I Do&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 31.49 31.49"><path d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z" /></svg></router-link>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar'
// import FLHome from '@/firebase/fl-home-db'

export default {
  head() {
    return {
      title: {
        inner: 'Modern Web Expert | Development, Consulting & Design'
      },
      meta: [
        // Global Metas OG
        { name: 'application-name', content: `${this.appTitle}` },
        {
          name: 'description',
          content: `${
            this.appTitle
          } Digital Nomad, Freelance, Web Apps & Websites Developer.`,
          id: 'desc'
        },
        // Twitter OG
        { name: 'twitter:title', content: `${this.appTitle}` },
        {
          n: 'twitter:description',
          c: `${
            this.appTitle
          } Digital Nomad, Freelance, Web Apps & Websites Developer.`
        },
        // Facebook / Open Graph
        { property: 'og:title', content: `${this.appTitle}` },
        { property: 'og:site_name', content: `${this.appTitle}` },
        {
          property: 'og:description',
          content: `${
            this.appTitle
          } Digital Nomad, Freelance, Web Apps & Websites Developer.`
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
  data() {
    return {
      pageContent: null,
    }
  },
  components: { NavBar },
  computed: {
    ...mapState('app', ['appTitle'])
  }
  // async created() {
  //   const HomePage = new FLHome()
  //   const content = await HomePage.getContent()
  //   this.pageContent = content
  // }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  margin: 0;

  z-index: 9;

  perspective: 600px;
  -webkit-perspective: 600px;

  .content-box {
    position: relative;
    float: none;
    width: 90%;
    padding: 2rem 1rem;
    margin: 0 auto;

    box-shadow: 0 0 45px -15px rgba(0,0,0,0.20);
    background: #fff;
    border-radius: 14px;

    opacity: 0;
    transform-origin: center top;
    transform-style: preserve-3d;
    transform: translateY(100%) rotateX(-80deg);
    transition: opacity 0s cubic-bezier(.215,.61,.355,1),transform 0s cubic-bezier(.215,.61,.355,1);
    transition-duration: 0.8s;
    transition-delay: 1.5s;

    @media only screen and (min-width: $breakpoint-large) {
      width: 100%;
      padding: 2rem 4rem;
      border-radius: 20px;
    }

    h1 {
      font-family: $font-family-regular;
      margin: 0;
      padding: 1.5rem 0 1.5rem 0;
      font-size: 1.60rem;
      line-height: 1.25;
      font-weight: 700;

      @media (min-width: 500px) {
        padding: 1.5rem 0 1.5rem 0;
        font-size: 1.875rem;
        line-height: 1.31;
      }

      @media only screen and (min-width: $breakpoint-large) {
        padding: 3rem 0 2rem 0;
        font-size: 2.5rem;
      }

      strong {
        color: $accent-color;
      }

      span {
        color: rgba(0, 0, 0, .20);
      }
    }

    h2 {
      margin: 0;
      padding: 0 0 1rem 0;
      font-size: 0.975rem;
      color: $light-read;
      line-height: 1.3;
      font-weight: 400;

      @media (min-width: 500px) {
        padding: 0 0 2rem 0;
      }

      @media only screen and (min-width: $breakpoint-large) {
        padding: 0 0 3rem 0;
        font-size: 1rem;
      }
    }

    svg {
      path {
        fill: $dark-grey;
      }
    }

    .cta {
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: $accent-color;

      svg {
        margin-left: 0.5rem;
        fill: $accent-color;
      }

      @media only screen and (min-width: $breakpoint-large) {
        position: absolute;
        right: 4rem;
        bottom: 2rem;
      }
    }
  }
}

.is-loaded {
  .page-wrapper .content-box {
    opacity: 1;
    transform: none;
  }
}
</style>
