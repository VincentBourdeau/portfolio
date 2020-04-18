<template>
  <div class="full-page-wrapper">

    <!-- Nav -->
    <nav-bar class="container" />

    <!-- Article content -->
    <section class="container articles-wrapper">
      <router-link to="/blog/article" class="row">
        <article class="col-12">
          <div class="article-img-wrapper">
            <img class="article-img" src="https://images.pexels.com/photos/1212818/pexels-photo-1212818.jpeg?cs=srgb&dl=white-notebook-beside-blue-laptop-computer-1212818.jpg&fm=jpg" alt="Article Title">
          </div>
          <h1 class="big-title">From Team Lead to Digital Nomad :: Taking my biggest decision yet</h1>
          <h2 class="regular-title"><span class="tag">Digital Nomad</span> <span class="tag">Freelancer</span> <span class="tag">Web Apps Developer</span> <span class="tag">Websites Developer</span></h2>
          <p class="regular-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptates dignissimos totam iste, distinctio quae veniam consequatur doloremque eos! Dolor!</p>
        </article>
      </router-link>
      <div class="row">
        <router-link to="/blog/article" class="col-6">
          <img class="article-img" src="https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?cs=srgb&dl=black-google-smartphone-on-box-1482061.jpg&fm=jpg" alt="Article Title">
          <h1 class="big-title">Why chose a PWA over a native App :: Progressive Web Apps vs Native Apps</h1>
          <h2 class="regular-title"><span class="tag">Digital Nomad</span> <span class="tag">Freelancer</span> <span class="tag">Web Apps Developer</span> <span class="tag">Websites Developer</span></h2>
          <p class="regular-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptates dignissimos totam iste, distinctio quae veniam consequatur doloremque eos! Dolor!</p>
        </router-link>
        <router-link to="/blog/article" class="col-6">
          <img class="article-img" src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?cs=srgb&dl=gray-laptop-computer-showing-html-codes-in-shallow-focus-160107.jpg&fm=jpg" alt="Article Title">
          <h1 class="big-title">Why and How :: Contributing to open source projects</h1>
          <h2 class="regular-title"><span class="tag">Digital Nomad</span> <span class="tag">Freelancer</span> <span class="tag">Web Apps Developer</span> <span class="tag">Websites Developer</span></h2>
          <p class="regular-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptates dignissimos totam iste, distinctio quae veniam consequatur doloremque eos! Dolor!</p>
        </router-link>
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
        inner: 'Modern Web Expert | Development, Consulting & Design'
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
            ''
        }
      ]
    }
  },
  components: { NavBar, Footer },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/app-global.scss';

.full-page-wrapper {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  background: #fff;
  padding-bottom: 25rem;
  border-top: 0.5rem solid $accent2-color;

  @media only screen and (min-width: $breakpoint-small) {
    border-top: 3rem solid $accent2-color;
  }
}

.articles-wrapper {
  position: relative;
  min-height: 100vh;
  padding: 0 1rem;
  background: #fff;

  @media only screen and (min-width: $breakpoint-small) {
    padding: 0 2rem;
  }

  @media only screen and (min-width: $breakpoint-large) {
    padding: 0 4rem;
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
    margin: 0;
    padding: 1rem 0 1rem 0;
    font-size: 1.375rem;
    line-height: 1.3;
    font-weight: 700;

    @media only screen and (min-width: $breakpoint-small) {
      padding: 2rem 0 1rem 0;
      font-size: 1.5rem;
    }

    @media only screen and (min-width: $breakpoint-large) {
      font-size: 1.5rem;
    }

    strong {
      color: $accent-color;
    }

    span {
      color: $light-grey;
    }
  }

  .regular-title {
    font-family: $font-family-regular;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    font-size: 0.85rem;
    line-height: 1;
    font-weight: 400;
    color: $light-grey;

    @media only screen and (min-width: $breakpoint-small) {
      font-size: 0.85rem;
    }

    @media only screen and (min-width: $breakpoint-large) {
      font-size: 0.85rem;
    }

    strong {
      color: $accent-color;
    }

    span {
      color: $light-grey;
    }
  }

  p,
  .regular-text {
    margin: 0 0 2rem 0;
    padding: 0.5rem 0 2rem 0;
    font-size: 1.05rem;
    line-height: 1.5;
    font-weight: 400;
    border-bottom: 0.3rem solid $accent-color;

    @media only screen and (min-width: $breakpoint-small) {
      margin: 0 0 4rem 0;
      font-size: 1.175rem;
    }

    @media only screen and (min-width: $breakpoint-large) {
      font-size: 1.175rem;
    }

    strong {
      color: $accent-color;
    }

    span {
      color: $light-grey;
    }
  }

  img,
  .article-img {
    display: block;
    width: 100%;
    // margin: 2rem 0;

    @media only screen and (min-width: $breakpoint-small) {
      // margin: 4rem 0;
    }
  }

  .tag {
    margin-bottom: 0.5rem;
  }
}
</style>
