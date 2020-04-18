<template>
  <div class="full-page-wrapper">

    <!-- Nav -->
    <nav-bar class="container" />

    <!-- Hero -->
    <section class="outer-container">
      <div class="hero-img-wrapper">
        <img class="hero-img" src="https://images.unsplash.com/photo-1551026920-2873d5b97c26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIzNTA3fQ&auto=format&fit=crop&w=1489&q=80" alt="Article Title">
      </div>
    </section>

    <!-- Article content -->
    <section class="container article-wrapper">
      <div class="row">
        <article class="col-12 article-content">
          <h1 class="big-title">How to evaluate HR software With implementation expert Margaux Myers</h1>

          <h2 class="regular-title">Customer Stories 7 February 2019 #free download #how to #HR solutions</h2>

          <p class="regular-text">As the HR software sector becomes more crowded, it’s getting harder to evaluate which HR platform—or platforms—will bring the most value to your organization.</p>

          <p class="regular-text">Even if you know what you want, the researching, sorting, and demos can take weeks and leave you more stressed and confused than when you started.</p>

          <p class="regular-text">So how do you evaluate HR software to make the best decision for your company? We asked Margaux Myers, an HR professional with several years of experience evaluating and implementing software solutions.</p>

          <blockquote>
            <p class="regular-text">Establish a clear vision of what you want to accomplish then find an HR technology partner who can help you get there.</p>
          </blockquote>

          <p class="regular-text">Even if you know what you want, the researching, sorting, and demos can take weeks and leave you more stressed and confused than when you started.</p>

          <img class="article-img" src="https://images.unsplash.com/photo-1551026920-2873d5b97c26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIzNTA3fQ&auto=format&fit=crop&h=831&q=80" alt="Article Title">

          <p class="regular-text">So how do you evaluate HR software to make the best decision for your company? We asked Margaux Myers, an HR professional with several years of experience evaluating and implementing software solutions.</p>

          <aside>
            <h4 class="medium-title">Key considerations:</h4>
            <p class="regular-text">Think of HR software as a second step. First, you need a strategy. Identify your stakeholders, then determine your budget, timeline, and the overarching problem you’re trying to solve. For example, you might need an HRIS to:</p>
            <ul class="regular-list">
              <li>Consolidate all employee documents and data in one place</li>
              <li>Make it easier to access info from anywhere</li>
              <li>Give employees self-serve access to check time off balances</li>
              <li>Enhance the integrity and security of sensitive data</li>
              <li>Get a pulse on employee engagement with surveys</li>
              <li>Replace multiple processes and vendors with a single platform</li>
              <li>Solve benefits administration errors and late enrolments</li>
            </ul>
            <p class="regular-text">With a clear strategy, you’ll be in a much better position to evaluate the best HRIS for your business.</p>
          </aside>

          <h3 class="medium-title">3 key questions to ask when evaluating HR software</h3>
          <ol class="regular-list">
            <li><strong>How long will it take to implement from the minute we sign the contract to the minute we go live?</strong>
            “I wasn’t given the luxury of a leisurely implementation,” says Margaux. Ask your vendor what kind of data they will require, if they have clear implementation processes, and how they’ll make this part as easy as possible so you can go live.</li>
            <li><strong>What exactly will my employees see?</strong>
            “I watched a few videos to make sure I was fully prepared for any questions from my employees,” said Margaux. If the HR software isn’t easy and intuitive for your employees, you’ll spend just as much time answering questions as you did managing paper forms.</li>
            <li><strong>What makes you feel confident in your ability to protect my data?</strong>
            “Who hosts your cloud database? What is the backup and redundancy process? I’ve asked for references in the past. In some companies, this would need to be vetted by IT.”</li>
          </ol>

          <img class="article-img" src="https://images.unsplash.com/photo-1551026920-2873d5b97c26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIzNTA3fQ&auto=format&fit=crop&h=831&q=80" alt="Article Title">
        </article>
      </div>
    </section>

    <!-- Comments -->
    <!-- <div class="container comments-wrapper">
      <div class="row">
        <div class="col-12 comments">
          <vue-disqus title="Article Title" shortname="vincbour" :identifier="'article'" :url="'http://localhost:8081/blog/article'"></vue-disqus>
        </div>
      </div>
    </div> -->

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
  padding-bottom: 9rem;
  background: #fff;
  border-top: 0.5rem solid $accent2-color;

  @media only screen and (min-width: $breakpoint-small) {
    padding-bottom: 25rem;
    border-top: 3rem solid $accent2-color;
  }

  .outer-container {
    position: relative;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    .hero-img {
      display: block;
      width: 100%;
    }
  }

  .hero-img-wrapper {
    position: relative;
    width: 100%;
    min-height: 250px;
    max-height: 30vw;
    overflow: hidden;
  }
}

.article-wrapper {
  min-height: 100vh;
  padding: 1rem 1rem;
  background: #fff;
  transform: translate3d(0, -5rem, 0);

  @media only screen and (min-width: $breakpoint-small) {
    padding: 2rem 2rem;
  }

  @media only screen and (min-width: $breakpoint-large) {
    padding: 2rem 4rem;
  }

  // Article Typography + Blocks components

  .big-title {
    font-family: $font-family-regular;
    margin: 0;
    padding: 1rem 0 1rem 0;
    font-size: 1.345rem;
    line-height: 1.3;
    font-weight: 700;

    @media only screen and (min-width: $breakpoint-small) {
      padding: 3rem 0 2rem 0;
      font-size: 1.65rem;
    }

    @media only screen and (min-width: $breakpoint-large) {
      font-size: 2.5rem;
    }

    strong {
      color: $accent-color;
    }

    span {
      color: $light-grey;
    }
  }

  .medium-title {
    font-family: $font-family-regular;
    margin: 0;
    padding: 3rem 0 2rem 0;
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 700;

    @media only screen and (min-width: $breakpoint-small) {
      padding: 3rem 0 2rem 0;
      font-size: 1.65rem;
    }

    @media only screen and (min-width: $breakpoint-large) {
      font-size: 2rem;
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
    margin: 0;
    padding: 0 0 2rem 0;
    font-size: 1rem;
    line-height: 1;
    font-weight: 400;
    color: $light-read;

    @media only screen and (min-width: $breakpoint-small) {
      font-size: 1.35rem;
    }

    @media only screen and (min-width: $breakpoint-large) {
      font-size: 1.35rem;
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
    margin: 0;
    padding: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;

    @media only screen and (min-width: $breakpoint-small) {
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

  ul,
  .regular-list {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2rem;
    font-size: 1rem;
    line-height: 1;
    font-weight: 400;

    @media only screen and (min-width: $breakpoint-small) {
      padding-left: 5rem;
      font-size: 1.175rem;
    }

    @media only screen and (min-width: $breakpoint-large) {
      padding-left: 5rem;
    }

    li {
      padding: 0.5rem 0;
    }

    strong {
      display: block;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
  }

  blockquote {
    margin: 2rem 0;
    max-width: 570px;

    @media only screen and (min-width: $breakpoint-small) {
      margin: 4rem 0;
    }

    p,
    .regular-text {
      color: $accent-color;
      font-size: 1.245rem;
      font-family: $font-family-heavy;
      font-weight: 400;

      @media only screen and (min-width: $breakpoint-small) {
        font-size: 1.65rem;
      }

      @media only screen and (min-width: $breakpoint-large) {
        font-size: 2rem;
      }

      &:before {
        content: "";
        background-color: $accent-color;
        display: block;
        height: 2px;
        margin-bottom: 1.8rem;
        width: 60px;
      }
    }
  }

  aside {
    background-color: #F0F4FF;
    border-left: 0.25rem solid #3E69E9;
    margin: 2rem 0;
    padding: 1rem 1rem;

    @media only screen and (min-width: $breakpoint-small) {
      margin: 4rem 0;
      padding: 2rem 4rem;
      border-left: 0.5rem solid #3E69E9;
    }

    @media only screen and (min-width: $breakpoint-large) {
      margin: 4rem 0;
      padding: 2rem 4rem;
    }
  }

  img,
  .article-img {
    display: block;
    width: 100%;
    margin: 2rem 0;

    @media only screen and (min-width: $breakpoint-small) {
      margin: 4rem 0;
    }
  }
}

.comments-wrapper {
  padding: 0 2rem 4rem 2rem;
  background: #fff;

  @media only screen and (min-width: $breakpoint-small) {
    padding: 0 2rem 4rem 2rem;
  }

  @media only screen and (min-width: $breakpoint-large) {
    padding: 0 4rem 4rem 4rem;
  }
}
</style>
