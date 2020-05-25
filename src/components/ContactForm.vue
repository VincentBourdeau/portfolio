<template>
  <modal
    name="contact-form"
    height="auto"
    width="100%"
    transition="fade"
    overlayTransition="overlay-fade"
    :pivotY="1"
  >
    <h2>Have a Question? <small>Have an idea for a great project?</small></h2>
    <a class="tag" href="mailto:dev@vincentbourdeau.com" title="mail">dev@vincentbourdeau.com</a>

    <form
      autocomplete="off"
      @submit="sendForm"
    >
      <div class="control">
        <input
          v-model="formData.name"
          type="text"
          class="input-text"
          name="name"
          id="name"
          placeholder="What's your name?"
          required
        >
      </div>

      <div class="control">
        <input
          v-model="formData.email"
          type="email"
          class="input-text"
          name="email"
          id="email"
          placeholder="Which email address should I respond to?"
          required
        >
      </div>

      <input
        ref="stobor"
        v-model="formData.address"
        type="text"
        class="say-no-to-stobor input-text"
        name="address-postal-code-1"
        id="address-postal-code-1"
        placeholder="What address?"
        required
        value=""
        tabIndex="-1"
      >

      <div class="control">
        <textarea
          v-model="formData.body"
          class="textarea"
          name="body"
          data-autosize
          id="body"
          placeholder="Your question(s) / project(s) / or Just Say Hi 👋"
          required
        ></textarea>

        <button class="submit" type="submit" title="Send" :class="{ 'is-loading': isSaving, 'is-success': isSuccess }">
          <div class="bt-text">Get in touch</div>
          <p class="loader">
            <svg
              class="main-loader"
              width="38"
              height="38"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#EFF1F2"
            >
              <g
                transform="translate(1 1)"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              >
                <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </svg>
            &nbsp;
          </p>
          <p class="success">
            <svg stroke="#EFF1F2" fill="#EFF1F2" height="38" width="38" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 98C23.5 98 2 76.5 2 50S23.5 2 50 2s48 21.5 48 48-21.5 48-48 48zm0-90.7C26.5 7.3 7.3 26.5 7.3 50S26.5 92.7 50 92.7 92.7 73.5 92.7 50 73.5 7.3 50 7.3z"/><path d="M44.8 63c-.7 0-1.4-.3-1.9-.8L32.7 52c-1-1-1.2-2.7-.3-3.7 1-1.2 2.8-1.3 3.9-.2l8.5 8.5h.1l18.9-18.9c1-1 2.6-1.2 3.7-.3 1.2 1 1.3 2.8.2 3.9l-21 21c-.5.5-1.2.7-1.9.7z"/></svg>
            &nbsp;
          </p>
        </button>
      </div>

      <div class="control">
        <a @click.prevent="hide" class="link" href="#" title="Cancel">Close</a>
      </div>
    </form>

    <div class="modal-svgs">

      <svg class="left" width="702" height="777" viewBox="0 0 702 777" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M602.5 326.469C492.1 178.857 142.167 49.4459 -9 0.174988V776.945C39.8333 749.964 200.724 667.093 370 684.437C792 727.675 740.5 510.983 602.5 326.469Z" />
      </svg>

      <svg class="right" width="340" height="1122" viewBox="0 0 340 1122" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M109.628 425.5C218.428 338.7 321.961 105.667 360.128 0V1121.5C302.528 1035.9 169.128 917.5 109.628 869C-46.3719 717 -26.3719 534 109.628 425.5Z"/>
      </svg>

    </div>
  </modal>
</template>

<script>
import ContactsDB from '@/firebase/contacts-db'

export default {
  data() {
    return {
      formData: {},
      isSaving: false,
      isSuccess: false
    }
  },
  methods: {
    async sendForm(e) {
      if (e) { e.preventDefault() }

      if (this.isSaving && this.isSuccess) {
        return
      }

      this.isSaving = true

      if (!this.formData.address) {
        try {
          const ContactsDBRef = new ContactsDB()
          await ContactsDBRef.create(this.formData)

          // Success
          setTimeout(() => {
            this.formData = {}
            this.isSaving = false
            this.isSuccess = true

            setTimeout(() => {
              this.isSuccess = false
            }, 2275)
          }, 1000)
        } catch(err) {
          console.log({err})
        }
      }
    },
    show() {
      this.$modal.show('contact-form')

      setTimeout(() => {
        const { stobor } = this.$refs
        console.log(this.$refs)
        if (stobor) {
          stobor.removeAttribute('required')
        }
      }, 3000)
    },
    hide() {
      this.$modal.hide('contact-form')
    }
  },
  created() {
    this.$eventHub.$on('open-contact-form', this.show)
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.say-no-to-stobor {
  position: absolute;
  top: -5555px;
  left: -5555px;
  z-index: -1;
}

.v--modal-box{

  h1, h2, h3, h4 {
    font-family: $font-family-regular;
    margin: 0;
    padding: 1.5rem 0 0 0;
    text-align: center;
    font-weight: 500;
    line-height: 1.5;

    font-size: 1.55rem;

    small {
      display: block;
      font-size: 1.25rem;
      line-height: 1.2;
      font-weight: 400;
    }

    @media only screen and (min-width: $breakpoint-small) {
      font-size: 1.75rem;
      font-weight: 400;
    }
  }

  .tag {
    display: block;
    margin: 15px auto;
    width: 200px;
    position: relative;
    z-index: 5;
  }

  form {
    position: relative;
    z-index: 5;
    width: 100%;
    max-width: 600px;
    padding: 0.5rem;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (min-width: $breakpoint-small) {
      padding: 1rem;
    }

    .control {
      position: relative;
      width: 100%;
    }

    input,
    textarea {
      width: 100%;
      margin: 1rem 0 1rem 0;
      background: transparent;
      border: none;
      border-bottom: 2px solid $accent-color;
      outline: none;
      font-size: 0.975rem;
      color: $light-grey;
      line-height: 2.5;

      @media only screen and (min-width: $breakpoint-small) {
        font-size: 1rem;
      }
    }

    textarea {
      min-height: 10rem;
      line-height: 1.25;
      margin-bottom: 0;
    }

    .link {
      display: inline-block;
      width: 100%;
      margin: 0.5rem 0 0 0;
      text-align: center;
      color: $light-grey;
      font-size: 0.90rem;
      opacity: .75;
    }

    .submit {
      font-family: $font-family-regular;
      position: absolute;
      right: 1rem;
      bottom: 1.5rem;
      padding: 0.75rem 1.5rem 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1;
      text-align: center;
      border-radius: 50px;
      border: 1px solid $accent-color;
      color: #fff;
      background-color: $accent-color;
      cursor: pointer;
      outline: none;

      transition: opacity 0.45s ease;
      will-change: opacity;

      @media (min-width: 500px) {
        font-size: 1.25rem;
      }

      @media only screen and (min-width: $breakpoint-small) {
        padding: 0.85rem 2rem 0.85rem 2rem;
        font-size: 1.25rem;
      }

      &:hover {
        opacity: .75;
      }

      .bt-text {
        font-family: inherit;
        color: #fff;
      }

      .loader,
      .success {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        padding: 0;
        margin: 0;
        opacity: 0;
      }

      &.is-loading {
        .bt-text {
          opacity: 0;
        }

        .loader {
          opacity: 1;
        }
      }

      &.is-success {
        .bt-text {
          opacity: 0;
        }

        .success {
          opacity: 1;
        }
      }
    }
  }
}

.modal-svgs {
  position: absolute;
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

  svg {
    transform: translate3d(-50%, -35%, 0);
  }

  svg.left {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    fill: $accent2-color;

    @media only screen and (min-width: $breakpoint-small) {
      display: block;
    }
  }

  svg.right {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 1;
    fill: $accent-color;

    transform: translate3d(75%, -35%, 0) scale(2.5);

    @media only screen and (min-width: $breakpoint-small) {
      display: block;
    }
  }
}
</style>
