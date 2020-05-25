<template>
  <div class="inner-nav-wrapper">
    <nav class="inner-nav">
      <router-link title="Website Logo" to="/" class="logo"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M29.769 3.743l-13.67 27.339a1.09 1.09 0 0 1-.998.628c-.443 0-.813-.222-.998-.628L.433 3.743C.174 3.226.396 2.561.95 2.265c.517-.259 1.182-.037 1.478.517l6.281 12.525L28.142 2.339c.443-.259.998-.222 1.367.111s.48.85.259 1.293zm-3.842 2.77L9.708 17.301l5.394 10.825L25.927 6.513z"/></svg>&nbsp;<span class="show-sm">VincBour</span>&nbsp;<span class="hidden-sm">Vincent Bourdeau</span></router-link>
      <div class="links">
        <router-link class="remove-for-mobile" title="Home page" v-if="homeIsVisible" to="/">Home</router-link>
        <router-link class="remove-for-mobile" title="About page" to="/about">What I Do</router-link>
        <router-link class="remove-for-mobile" title="Projects listing page" to="/projects">Projects</router-link>
        <a @click.prevent="openContactForm" title="Contact page" href="#">Contact</a>
        <span class="separator" >|</span>
        <!-- <router-link title="Blog listing" class="special" to="/blog">Blog</router-link> -->
        <a class="nav-icon" href="https://github.com/VincentBourdeau" rel="noreferer noopener" target="_blank" title="GitHub"><svg width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"/></svg></a>
        <a class="nav-icon" href="https://www.linkedin.com/in/bourdeauvincent/" rel="noreferer noopener" target="_blank" title="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/></svg></a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    homeIsVisible: {
      type: Boolean, // String, Number, Boolean, Function, Object, Array
      required: false,
      default: false
    }
  },
  methods: {
    openContactForm() {
      this.$eventHub.$emit('open-contact-form')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

nav {
  position: relative;
  z-index: 5;
  display: flex;

  .logo {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.25rem;

      @media only screen and (min-width: $breakpoint-large) {
        margin-right: 0.5rem;
      }

      fill: $accent-color;
    }
  }

  .links {
    align-items: center;
    margin-left: auto;
    line-height: 2;

    @media only screen and (min-width: $breakpoint-large) {
      display: flex;
      line-height: 1.5;
    }

    a,
    span {
      margin-right: 0.65rem;

      @media only screen and (min-width: $breakpoint-large) {
        margin-right: 2rem;
      }

      &:last-child {
        margin-right: 0;
      }

      &.special {
        color: $accent-color;
      }

      &.separator {
        color: rgba(0, 0, 0, .20);
      }
    }

    svg {
      position: relative;
      top: 3px;

      path {
        fill: $dark-grey;
      }
    }
  }
}

.inner-nav-wrapper.container nav {
  padding: 1rem 1rem;
  background: #fff;

  @media only screen and (min-width: $breakpoint-small) {
    padding: 2rem 2rem;
  }

  @media only screen and (min-width: $breakpoint-large) {
    padding: 2rem 4rem;
  }
}

.nav-icon {
  display: inline-block;
  transform: translate(0, 3px) scale(0.8975);

  @media only screen and (min-width: $breakpoint-large) {
    margin: 0 -15px;
    padding: 0;
    transform: scale(1);
  }
}
</style>
