<template>
  <footer class="page-footer">
    <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32"><path d="M29.769 3.743l-13.67 27.339a1.09 1.09 0 0 1-.998.628c-.443 0-.813-.222-.998-.628L.433 3.743C.174 3.226.396 2.561.95 2.265c.517-.259 1.182-.037 1.478.517l6.281 12.525L28.142 2.339c.443-.259.998-.222 1.367.111s.48.85.259 1.293zm-3.842 2.77L9.708 17.301l5.394 10.825L25.927 6.513z"/></svg>
    <p class="copy">
      <span>&copy; Vincent Bourdeau - 2020 | WebApps + Websites developer. Montreal, Quebec</span>
      <br>
      <small>💻&nbsp;Built with VueJs & FireBase&nbsp;🔥</small>
    </p>
    <svg class="left" viewBox="0 0 702 777" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M602.5 326.469C492.1 178.857 142.167 49.4459 -9 0.174988V776.945C39.8333 749.964 200.724 667.093 370 684.437C792 727.675 740.5 510.983 602.5 326.469Z" />
    </svg>
    <svg class="right" viewBox="0 0 1340 563" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1863.74 842.654C303.452 453.182 -410.34 891.131 -463.034 1091.51L-470.7 417.371C-131.054 544.231 677.587 507.516 1189.47 227.352C1748.88 -78.8189 2766.58 -15.9035 2967.77 125.431L2976.77 917.21C2615.3 1015.81 2084.14 908.59 1863.74 842.654Z" fill="#EFF5FF"/>
    </svg>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  z-index: 1;

  .logo {
    position: absolute;
    left: 50%;
    bottom: 13rem;
    width: 75px;
    transform: translate3d(-50%, 0, 0);
    fill: $accent-color;

    @media (min-width: 500px) {
      width: 100px;
      bottom: 18rem;
      transform: translate3d(-50%, 0, 0);
    }
  }

  .copy {
    position: absolute;
    left: 0;
    bottom: 100px;
    width: 100%;
    padding: 1rem 2rem;
    z-index: 5;
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.75);
    text-align: center;

    span,
    small {
      display: inline-block;
      background: #fff;
      padding: 3px 0;
      border-radius: 6px;

      @media (min-width: 500px) {
        background: #fef1cf;
        padding: 3px 15px;
      }
    }

    small {
      position: relative;
      top: -6px;
    }

    @media only screen and (min-width: $breakpoint-small) {
      bottom: 0;
      padding: 1rem 5rem;
    }
  }

  svg.left {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate3d(0, 50%, 0);

    width: 50%;

    opacity: 1;

    fill: $accent-color;

    path {
      fill: $accent-color;
    }
  }

  svg.right {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate3d(-50%, 0, 0);
    width: 100%;

    z-index: 2;

    opacity: 1;

    fill: $accent2-color;

    path {
      fill: $accent2-color;
    }
  }
}
</style>
