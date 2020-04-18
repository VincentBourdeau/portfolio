<template>
  <div class="full-page-wrapper">

    <!-- Nav -->
    <nav-bar class="container" />

    <!-- Hero -->
    <section class="outer-container">
      <div class="hero-img-wrapper">
        <img class="hero-img" src="https://images.unsplash.com/photo-1472740378865-80aab8e73251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="Choices">
      </div>
    </section>

    <!-- Article content -->
    <section class="container article-wrapper">
      <div class="row">
        <article class="col-12 article-content">
          <h1 class="big-title">From Team Lead to Digital Nomad :: Taking my biggest decision yet.</h1>

          <h2 class="regular-title"><div class="tag">Digital Nomad</div> <div class="tag">Career</div> <div class="tag">Goals</div> <div class="tag">Dreams</div></h2>

          <p class="regular-text">January 2020 : 30 y/o Web developper. I was starting my 4th year in a Montréal, Qc, Web Agency - <a href="#">byhoffman.com</a> and my 2nd year as the Director Of Technology. I was in charge of the R&D and P.O.C. I was leading a team of 4 developpers and in charge of their personal growth "Roadmap". I was living the dream. But yet, something was missing.</p>

          <img class="article-img" src="https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="Thailand">

          <p class="regular-text">I was just getting back from a 1 month trip to Thailand where I had the chance to meet awesome people, fellow programmers / Digital Nomads and enjoy a lifestyle that was just 100% [Fun].</p>

          <p class="regular-text">When I came back, the routine hit me hard. I was enjoying everything I had, don't get me wrong. But I was slowly getting stuck into my comfort-zone. My mind was constantly going back to the Temples, coffee shop & Coworking Spaces of Chiang Mai.</p>

          <blockquote>
            <p class="regular-text">Sometimes, even if you really know what you want, choices aren't always easy to make.</p>
          </blockquote>

          <img class="article-img" src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="Workspace">

          <p class="regular-text">Leaving beahind so much. The best [Superiors] you could think of, a Team of 4 friends more than employee, a role that is super [gratifiant]. All those ingredients made that decision super hard.</p>

          <aside>
            <h4 class="medium-title">So how do you make that kind of decision?</h4>
            <p class="regular-text">Think of HR software as a second step. First, you need a strategy. Identify your stakeholders, then determine your budget, timeline, and the overarching problem you’re trying to solve. For example, you might need an HRIS to:</p>
            <ul class="regular-list">
              <li>Writing down your thoughts</li>
              <li>Making a recap of your last 10 years</li>
              <li>Makeing a list of people you know that can help you with that transition</li>
              <li>Taking a leap of faith</li>
              <li>Calling you parents just to get their approval 😂</li>
            </ul>
            <p class="regular-text">But seriously, those were the steps that helped me have the courage to make that final decision</p>
          </aside>

          <p class="regular-text">So here I was now, departing for a Digital Nomad life style and filled with passion, joy ...and fears. (But in a good way 💪)</p>

          <!-- <h3 class="medium-title">3 key questions to ask when evaluating HR software</h3>
          <ol class="regular-list">
            <li><strong>How long will it take to implement from the minute we sign the contract to the minute we go live?</strong>
            “I wasn’t given the luxury of a leisurely implementation,” says Margaux. Ask your vendor what kind of data they will require, if they have clear implementation processes, and how they’ll make this part as easy as possible so you can go live.</li>
            <li><strong>What exactly will my employees see?</strong>
            “I watched a few videos to make sure I was fully prepared for any questions from my employees,” said Margaux. If the HR software isn’t easy and intuitive for your employees, you’ll spend just as much time answering questions as you did managing paper forms.</li>
            <li><strong>What makes you feel confident in your ability to protect my data?</strong>
            “Who hosts your cloud database? What is the backup and redundancy process? I’ve asked for references in the past. In some companies, this would need to be vetted by IT.”</li>
          </ol> -->

          <img class="article-img" src="https://images.unsplash.com/photo-1549414279-d6799fcf2279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="Digital Nomad, Follow that dream">
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
