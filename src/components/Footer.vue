<template>
  <footer>
    <div class="left flex">
      <p v-html="$t('footer.comment_ideas')"></p>
      <a href="mailto:lesswastefortheplanet@gmail.com" class="mail" @click="onClickSendMail">lesswastefortheplanet@gmail.com</a>
      <a href="https://www.instagram.com/lesswastefortheplanet/" class="instagram" target="_blank" rel="noopener noreferrer" @click="onClickInstagram">@lesswastefortheplanet</a>
    </div>

    <div class="right" :class="[privacyPolicy ? 'space-bewteen' : 'flex-end']">
      <div v-if="privacyPolicy">
        <router-link class="content-page" to="/privacy-policy" @click="onClickPrivacyPolicy">{{ $t('footer.privacy_policy') }}</router-link>
      </div>

      <div class="copyright flex">
        <p>{{ $t('footer.copyright', { year: this.copyrightYear }) }}</p>
        <img class="logo" src="../assets/footer-logo-lesswastefortheplanet.png" alt="logo lesswastefortheplanet">
      </div>
    </div>

    <picture>
      <source srcset="../assets/background-footer.png" media="(min-width: 550px)"/>
      <source srcset="../assets/background-footer-mobile.png" media="(max-width: 550px)"/>
      <img class="background" src="../assets/background-footer.png" alt="{{ $t('footer.alt_background') }}">
    </picture>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    privacyPolicy: {
      type: Boolean,
      default: () => false
    },
  },
  created() {
    this.copyrightYear = new Date().getFullYear();
  },
  methods: {
    onClickSendMail() {
      this.$gtag.event('click_send_mail', { location: window.location.pathname });
    },
    onClickInstagram() {
      this.$gtag.event('click_open_instagram', { location: window.location.pathname, component: 'Footer' });
    },
    onClickPrivacyPolicy() {
      this.$gtag.event('click_open_privacy_policy', { location: window.location.pathname });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@scss/_global.scss";

footer {
  position: relative;
  margin: 0;
  color: $color-black;
}

a,
.copyright {
  color: $color-black;

  p {
    min-width: 205px;
  }
}

img.background {
  width: calc(100% + 2 * #{$body-padding-big-screen});
  height: 200px;
  margin-bottom: -20px;
  margin-left: -$body-padding-big-screen;
}

.left {
  position: absolute;
  left: 0;
  top: 55px;
  flex-direction: column;

  p {
    margin: 0;
    @include text-regular;
    font-family: 'Lato Bold';
  }

  a {
    margin-top: 24px;
    text-align: left;
    text-decoration: none;
  }

  a:last-of-type {
    margin-top: 8px;
  }

  a:before {
    width: 30px;
    min-height: 25px;
    height: auto;
    margin-right: 10px;
    vertical-align: bottom;
    @include image-before-after;
  }

  a.mail:before {
    background-image: url(../assets/email.svg);
  }

  a.instagram:before {
    background-image: url(../assets/instagram.svg);
  }
}

.right {
  position: absolute;
  top: 55px;
  right: 0;
  height: 105px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.copyright {
  align-items: center;
  justify-content: flex-end;

  p {
    margin: 0;
  }

  .logo {
    margin-left: 8px;
    height: 40px;
    width: auto;
  }
}

.flex-end {
  justify-content: flex-end;
}

.space-between {
  justify-content: space-between;
}

@media (max-width: 1500px) {
  img.background {
    width: calc(100% + 2 * #{$body-padding-desktop});
    height: 200px;
    margin-bottom: -20px;
    margin-left: -$body-padding-desktop;
  }
}

@media (max-width: 1023px) {
  footer {
    margin: 0 -$body-padding-mobile;
    padding: 50px 40px 30px;
    background-image: url(../assets/background-footer.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  img.background {
    display: none;
  }

  .flex-end,
  .space-between {
    justify-content: unset;
  }

  .left,
  .right {
    position: relative;
    z-index: 1;
    top: initial;
    right: initial;
    left: initial;
    bottom: initial;
    height: auto;
  }

  .left {
    margin-bottom: 22px;
  }

  .right {
    align-items: unset;
    text-align: left;
  }

  p {
    text-align: left;
  }

  a:before {
    width: 20px;
    min-height: 15px;
  }

  a.mail {
    margin-top: 16px;
  }

  a.content-page {
    text-align: left;
    margin-top: 22px;
  }

  .copyright {
    justify-content: flex-end;
    margin-top: 24px;
  }
}
</style>
