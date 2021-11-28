<template>
  <footer>
    <div class="left flex">
      <p>Tu as des commentaires ou des idées? Contacte-nous!</p>
      <a href="mailto:lesswastefortheplanet@gmail.com" class="mail">lesswastefortheplanet@gmail.com</a>
      <a href="https://www.instagram.com/lesswastefortheplanet/" class="instagram" target="_blank" rel="noopener noreferrer">@lesswastefortheplanet</a>
    </div>

    <div class="right" :class="[privacyPolicy ? 'space-bewteen' : 'flex-end']">
      <div v-if="privacyPolicy">
        <router-link class="top-right" to="/privacy-policy">{{ $t('footer.privacy_policy') }}</router-link>
      </div>

      <div class="copyright flex">
        <p class="bottom-right">{{ $t('footer.copyright') }}</p>
        <img class="logo" src="../assets/footer-logo.png" alt="footer">
      </div>
    </div>

    <img class="footer" src="../assets/background-footer.png" alt="footer">
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

img.footer {
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
</style>
