<template>
  <footer>
    <div class="left flex">
      <p>{{ $t('footer.comment_ideas') }}</p>
      <a href="mailto:lesswastefortheplanet@gmail.com" class="mail">lesswastefortheplanet@gmail.com</a>
      <a href="https://www.instagram.com/lesswastefortheplanet/" class="instagram" target="_blank" rel="noopener noreferrer">@lesswastefortheplanet</a>
    </div>

    <div class="right" :class="[privacyPolicy ? 'space-bewteen' : 'flex-end']">
      <div v-if="privacyPolicy">
        <router-link class="top-right content-page" to="/privacy-policy">{{ $t('footer.privacy_policy') }}</router-link>
      </div>

      <div class="copyright flex">
        <p class="bottom-right">{{ $t('footer.copyright', { year: this.copyrightYear }) }}</p>
        <img class="logo" src="../assets/footer-logo.png" alt="logo">
      </div>
    </div>

    <img class="background" src="../assets/background-footer.png" alt="footer background">
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
    margin-top: 16px;
  }
}
</style>
