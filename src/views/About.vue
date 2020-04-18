<template>
  <div class="full-page-wrapper">

    <!-- Nav -->
    <nav-bar class="container is-full" />

    <!-- Hero -->
    <div class="bg-effect">
      <section class="container hero-container">
        <div class="row hero-content-wrapper">
          <article class="col-12">
            <h2 class="small-title">Digital&nbsp;Nomad&nbsp;👨‍💻&nbsp;Freelancer</h2>
            <h1 class="big-title">Web Apps & Websites Developer</h1>
            <p class="regular-text">With more than 10 years in Web developement, I can safely say that my work is a passion. <br> My creations are 100% customs, accessibles, performants & scalables 🚀</p>
            <img
              class="hero-illustration"
              src="@/assets/img/digital-nomad-illustration.svg"
            />
          </article>
        </div>
      </section>
    </div>

    <!-- About Hero SVG separator -->
    <svg class="about-hero-svg" viewBox="0 0 3083 1176" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dd)">
        <path d="M1285.99 983.356C883.852 944.438 644 632 571.086 510.504C384 316 268 164 240 0V1176H900.616H2609.71C2878.73 989.194 3319.04 576.275 2928.07 419.047C2439.36 222.511 2595.75 574.718 2472.87 747.903C2349.99 921.088 1788.67 1032 1285.99 983.356Z" fill="white"/>
      </g>
      <defs>
        <filter id="filter0_dd" x="0" y="0" width="3083" height="1176" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dx="-240"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dx="-110"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>

    <!-- Techs content -->
    <techs-grid />

    <!-- Featured Services -->
    <section class="container is-white">
      <div class="row">
        <article class="col-12 featured-services">
          <div class="featured-img">
            <div>
              <img src="@/assets/img/webapp-development.jpg" alt="Custom Web Apps Development" />
            </div>
          </div>
          <div class="featured-content">
            <h2>Custom <strong>Web Apps</strong> Development - <br> Tailored to your needs</h2>
            <p>Having trouble finding a "Ready-Made" solution out there that fits your needs? Tired of paying monthly fees for software that tries to do more than you really need. That's where a Custom Web App comes to the rescue. Built exactly for what it should do. Transform & Automate any repetitive Business process and enjoy the productivity boost!</p>
            <router-link to="/projects" class="text-link">See projects <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M508.875 248.458l-160-160c-4.167-4.167-10.917-4.167-15.083 0-4.167 4.167-4.167 10.917 0 15.083l141.792 141.792H10.667C4.771 245.333 0 250.104 0 256s4.771 10.667 10.667 10.667h464.917L333.792 408.458c-4.167 4.167-4.167 10.917 0 15.083a10.634 10.634 0 0 0 7.542 3.125c2.729 0 5.458-1.042 7.542-3.125l160-160c4.166-4.166 4.166-10.916-.001-15.083z"/></svg></router-link>
          </div>
        </article>
      </div>
      <div class="row">
        <article class="col-12 featured-services is-reverse">
          <div class="featured-img">
            <div>
              <img src="@/assets/img/website-development.jpg" alt="Custom Websites Development" />
            </div>
          </div>
          <div class="featured-content">
            <h2>Custom <strong>Websites</strong> Development - <br> Tailored to your needs</h2>
            <p>Sure you can use a <span class="strike">Wix</span>, <span class="strike">Wordpress</span> or <small>(insert any comparable)</small>. But if you really want to stand out, be accessible, performant and SEO friendly, let me built something completely custom for you. I start by really understanding your brand and core values to create something that is unique and beautiful.</p>
            <router-link to="/projects" class="text-link is-alternate">See projects <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M508.875 248.458l-160-160c-4.167-4.167-10.917-4.167-15.083 0-4.167 4.167-4.167 10.917 0 15.083l141.792 141.792H10.667C4.771 245.333 0 250.104 0 256s4.771 10.667 10.667 10.667h464.917L333.792 408.458c-4.167 4.167-4.167 10.917 0 15.083a10.634 10.634 0 0 0 7.542 3.125c2.729 0 5.458-1.042 7.542-3.125l160-160c4.166-4.166 4.166-10.916-.001-15.083z"/></svg></router-link>
          </div>
        </article>
      </div>
    </section>

    <!-- Featured Services -->
    <section class="container featured-item-container is-dark">
      <div class="row">
        <article class="col-12 featured-item">
          <div class="featured-img">
            <div>
              <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fvincentbourdeau.com%2F&tab=desktop" target="_blank" title="WebPerf test" class="text-link is-alternate"><img src="@/assets/img/webperf-to-the-core.png" alt="Best Practices + High-performance" /></a>
            </div>
          </div>
          <div class="featured-content">
            <h2>Best Practices & High-performance</h2>
            <p>Because Web performance really matters, all of my creations are tested before going live. I never settle down for something less than 90% on all metrics. <strong class="accent1">Performance</strong> &bull; <strong class="accent2">Accessibility</strong> &bull; <strong class="accent1">Best Practices</strong> &bull; <strong class="accent2">SEO</strong> &bull; <strong class="accent1">Progressive Web App</strong></p>
            <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fvincentbourdeau.com%2F&tab=desktop" target="_blank" title="WebPerf test" class="text-link is-alternate">Test my site <svg width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M508.875 248.458l-160-160c-4.167-4.167-10.917-4.167-15.083 0-4.167 4.167-4.167 10.917 0 15.083l141.792 141.792H10.667C4.771 245.333 0 250.104 0 256s4.771 10.667 10.667 10.667h464.917L333.792 408.458c-4.167 4.167-4.167 10.917 0 15.083a10.634 10.634 0 0 0 7.542 3.125c2.729 0 5.458-1.042 7.542-3.125l160-160c4.166-4.166 4.166-10.916-.001-15.083z"/></svg></a>
          </div>
        </article>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="container block-cta">
      <div class="row">
        <div class="col-12">
          <a @click.prevent="openContactForm" class="button" href="#" title="Contact Me">Contact Me</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar'
import TechsGrid from '@/components/TechsGrid'
import Footer from '@/components/Footer'

export default {
  head(){
    return {
      title: {
        inner: 'Web Apps & Websites Developer | Digital Nomad 👨‍💻 Freelancer'
      },
      meta: [
        // Global Metas OG
        { name: 'application-name', content: `${this.appTitle}` },
        {
          name: 'description',
          content: `${
            this.appTitle
          } With more than 10 years in Web developement, I can safely say that my work is a passion. My creations are 100% customs, accessibles, performants & scalables 🚀`,
          id: 'desc'
        },
        // Twitter OG
        { name: 'twitter:title', content: `${this.appTitle}` },
        {
          n: 'twitter:description',
          c: `${
            this.appTitle
          } With more than 10 years in Web developement, I can safely say that my work is a passion. My creations are 100% customs, accessibles, performants & scalables 🚀`
        },
        // Facebook / Open Graph
        { property: 'og:title', content: `${this.appTitle}` },
        { property: 'og:site_name', content: `${this.appTitle}` },
        {
          property: 'og:description',
          content: `${
            this.appTitle
          } With more than 10 years in Web developement, I can safely say that my work is a passion. My creations are 100% customs, accessibles, performants & scalables 🚀`
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
  components: { NavBar, TechsGrid, Footer },
  computed: mapState('app', ['appTitle']),
  methods: {
    openContactForm() {
      this.$eventHub.$emit('open-contact-form')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.bg-effect {
  position: relative;
  background: url('https://images.unsplash.com/photo-1446229117710-2e5dd691ab55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background: rgba(255, 255, 255, .90);
  }
}

.hero-container {
  position: relative;
  width: 100%;
  padding: 3.5rem 0 4rem 0;
  margin: 0 auto;

  overflow: hidden;

  z-index: 3;

  @media only screen and (min-width: 900px) {
    padding: 5rem 0 10rem 0;
  }

  p,
  .regular-text {
    max-width: 90%;
    margin: 0 auto;

    font-size: 1rem;

    @media (min-width: 500px) {
      font-size: 1.35rem;
    }
  }
}

.about-hero-svg {
  position: relative;
  top: 0;
  transform: scale(2) translate(1%, -70%);
  margin-bottom: -40%;
  display: block;
  width: 100%;
  z-index: 2;
}

.hero-content-wrapper {
  position: relative;
  text-align: center;

  .hero-illustration {
    display: block;
    width: 100%;
    height: auto;
    margin-top: 0;
    margin-bottom: -1.5rem;

    @media (min-width: 500px) {
      margin-top: 2.5rem;
      margin-bottom: -2rem;
    }
  }
}

.big-title {
  font-family: $font-family-regular;
  margin: 0 0 0 0;
  padding: 1rem 1rem 0.5rem 1rem;
  font-size: 1.375rem;
  line-height: 1.3;
  font-weight: 700;

  @media only screen and (min-width: 900px) {
    // padding: 2rem 0 1rem 0;
    font-size: 3rem;
  }

  @media only screen and (min-width: $breakpoint-large) {
    font-size: 3rem;
  }

  strong {

  }

  span {
    color: $light-read;
  }
}

.small-title {
  font-family: $font-family;
  margin: 0;
  // padding: 0 0 0.5rem 0;
  font-size: 0.85rem;
  line-height: 1;
  font-weight: 400;
  color: $light-read;

  @media only screen and (min-width: 900px) {
    font-size: 1.275rem;
  }

  @media only screen and (min-width: $breakpoint-large) {
    font-size: 1.275rem;
  }

  strong {
    color: $accent-color;
  }

  span {
    color: $light-read;
  }
}

p,
.regular-text {
  margin: 0 0 2rem 0;
  padding: 0.5rem 0 2rem 0;
  font-size: 1.05rem;
  line-height: 1.5;
  font-weight: 400;
  color: $light-read;

  @media only screen and (min-width: 900px) {
    margin: 0 0 4rem 0;
    font-size: 1.275rem;
  }

  @media only screen and (min-width: $breakpoint-large) {
    font-size: 1.275rem;
  }

  strong {
    color: $light-read;
    font-weight: 800;
  }

  span {
    color: $light-read;
  }

  small {
    color: inherit;
  }
}

.strike {
  text-decoration: line-through;
}

img,
.article-img {
  display: block;
  width: 100%;
  // margin: 2rem 0;

  @media only screen and (min-width: 900px) {
    // margin: 4rem 0;
  }
}

.featured-services {
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: $accent-color;
  }

  @media only screen and (min-width: 900px) {
    flex-direction: row;
    padding-top: 2em;
    padding-bottom: 2em;
  }

  &.is-reverse {
    flex-direction: column;

    strong {
      color: $accent2-color
    }

    @media only screen and (min-width: 900px) {
      flex-direction: row-reverse;
    }

    .featured-img {

      @media only screen and (min-width: 900px) {
        padding-left: 2em;
        padding-right: 0;

        > div {
          background: $accent2-color;
        }
      }
    }
  }

  .featured-img {
    position: relative;
    display: inline-block;
    width: 100%;

    @media only screen and (min-width: 900px) {
      padding-right: 2em;
      width: 55%;
    }

    > div {
      position: relative;
      background: #fff;
      border-radius: 6px;
      overflow: hidden;

      @media (min-width: 900px) {
        background: $accent-color;
      }

      img {
        position: relative;
        width: 100%;
        padding: 2.5rem;
        margin: -5rem 0;
        overflow: hidden;

        @media (min-width: 900px) {
          width: 100%;
          margin: 0;
          border-radius: 3rem;
        }
      }
    }
  }

  .featured-content {
    display: inline-block;
    width: 100%;
    padding: 2rem;

    @media only screen and (min-width: 900px) {
      width: 45%;
      padding: 0;
    }

    h2 {
      font-family: $font-family-heavy;
      margin: 0;
      padding: 0;
      font-size: 1.45rem;
      line-height: 1.2;
      color: $dark-gray;

      @media (min-width: 500px) {
        font-size: 2.35rem;
      }
    }

    p {
      padding: 0;
      margin: 0;
      margin-top: 0.75rem;
      color: $light-grey;
      font-size: 1rem;
      line-height: 2;

      @media (min-width: 500px) {
        font-size: 1.15rem;
      }
    }

    .text-link {
      display: flex;
      align-items: center;
      padding-top: 1rem;
      line-height: 1;
      font-size: 0.95rem;
      font-weight: 400;
      color: $accent-color;

      @media (min-width: 500px) {
        padding-top: 2rem;
      }

      svg {
        margin-left: 0.5rem;
      }

      &.is-alternate {
        color: $accent2-color;
      }
    }
  }
}

.featured-item-container {
  margin-top: 3rem;
  z-index: 3;
  padding: 3.5rem 2rem;
  border-radius: 0;

  @media only screen and (min-width: 900px) {
    padding: 2rem 3rem;
    border-radius: 8px;
  }
}

.featured-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: $accent-color;
  }

  @media only screen and (min-width: 900px) {
    flex-direction: row;
    padding-top: 2em;
    padding-bottom: 2em;
  }

  .featured-img {
    position: relative;
    display: inline-block;
    width: 100%;

    @media only screen and (min-width: 900px) {
      padding-right: 2em;
      width: 55%;
    }
  }

  .featured-content {
    display: inline-block;
    width: 100%;
    padding: 2rem 0;

    @media only screen and (min-width: 900px) {
      width: 45%;
      padding: 0;
    }

    h2 {
      font-family: $font-family-heavy;
      margin: 0;
      padding: 0;
      font-size: 1.45rem;
      line-height: 1.2;
      color: #fff;

      @media (min-width: 500px) {
        font-size: 2.35rem;
      }
    }

    p {
      padding: 0;
      margin: 0;
      margin-top: 0.75rem;
      color: rgba(#fff, 0.85);
      font-size: 1rem;
      line-height: 2;

      strong {
        font-family: inherit;
        font-weight: inherit;

        &.accent1 {
          color: $accent2-color;
        }

        &.accent2 {
          color: $accent-color;
        }
      }
    }

    .text-link {
      display: flex;
      align-items: center;
      padding-top: 1rem;
      line-height: 1;
      font-size: 0.95rem;
      font-weight: 400;
      color: #41cd6a;

      @media (min-width: 500px) {
        padding-top: 2rem;
      }

      svg {
        margin-left: 0.5rem;

        path {
          fill: #41cd6a;
        }
      }
    }
  }
}

.block-cta {
  padding-top: 2rem;
  padding-bottom: 0;
  text-align: center;
  z-index: 3;

  @media (min-width: 500px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}
</style>
