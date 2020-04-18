<template>
  <div id="app">

    <!-- Main App Content -->
    <main role="main">
      <transition-group
        name="fade"
        mode="out-in"
      >
        <router-view key="main" />

        <!-- Overlays SVG for Home page -->
        <div key="overlays" v-if="$route.name === 'home'" class="overlays overlays-under">

          <svg class="left" width="702" height="777" viewBox="0 0 702 777" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M602.5 326.469C492.1 178.857 142.167 49.4459 -9 0.174988V776.945C39.8333 749.964 200.724 667.093 370 684.437C792 727.675 740.5 510.983 602.5 326.469Z" />
          </svg>

          <svg class="right" width="340" height="1122" viewBox="0 0 340 1122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M109.628 425.5C218.428 338.7 321.961 105.667 360.128 0V1121.5C302.528 1035.9 169.128 917.5 109.628 869C-46.3719 717 -26.3719 534 109.628 425.5Z"/>
          </svg>

        </div>
      </transition-group>
    </main>

    <!-- Contact Form Component -->
    <contact-form />

    <!-- Intro animation SVGs -->
    <svg class="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path class="shape-overlays__path"></path>
      <path class="shape-overlays__path"></path>
      <path class="shape-overlays__path"></path>
    </svg>

    <!-- Toaster / Alert -->
    <new-content-available-toastr
      v-if="newContentAvailable"
      class="new-content-available-toastr"
      :refreshing-app="refreshingApp"
      @refresh="serviceWorkerSkipWaiting"
    ></new-content-available-toastr>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import ContactForm from '@/components/ContactForm'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'

// Intro Animation Scripts
require('@/misc/intro-animation')

export default {
  components: { ContactForm, NewContentAvailableToastr },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  methods: mapActions('app', [
    'closeAddToHomeScreenModalForApple',
    'serviceWorkerSkipWaiting'
  ])
}
</script>

<style lang="scss">
@import '@/theme/variables.scss';
@import '@/theme/app-global.scss';
@import '@/theme/global-components.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;

  .new-content-available-toastr {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 99;

    a,
    span {
      color: #fff;
    }
  }

  .apple-add-to-home-screen-modal {
    position: absolute;
    top: 0;
    left: 0;
    height: fit-content;
    width: fit-content;
    margin: auto;
    z-index: 1000;
  }
}

.overlays {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;

  &.overlays-under {
    z-index: 1;
  }

  &.overlays-over {
    z-index: 10;
  }

  svg.left {
    position: absolute;
    top: -5%;
    left: 0;
    opacity: 0.345;
    fill: #fdc526;

    @media (min-width: 500px) {
      position: absolute;
      top: 0;
      left: 0;
      opacity: .80;
      fill: $accent2-color;
    }
  }

  svg.right {
    position: absolute;
    top: 43%;
    right: 0;
    opacity: .789;
    fill: #0066fb;
    -webkit-transform: scale(2.5);
    transform: scale(2.5);

    @media (min-width: 500px) {
      position: absolute;
      top: 0;
      right: 0;
      opacity: .80;
      fill: $accent-color;

      transform: scale(2.5);
    }
  }

  svg.main {
    position: absolute;
    top: 0;
    left: 0;
    opacity: .25;
    fill: rgba(255, 226, 16, 0.54);
  }
}

main {
  position: relative;
  z-index: 5;
  opacity: 0;

  transition: opacity 0.3s ease;

  &.is-loaded {
    opacity: 1;
  }
}

.shape-overlays {
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.shape-overlays.is-opened {
  pointer-events: auto;
}

.shape-overlays__path:nth-of-type(1) {
  opacity: 0.95;
  fill: $accent-color;
}

.shape-overlays__path:nth-of-type(2) {
  opacity: 0.85;
  fill: $accent2-color;
}

.shape-overlays__path:nth-of-type(3) {
  opacity: 0.75;
  fill: $accent2-color;
}
</style>
