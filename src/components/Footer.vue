<template>
  <footer>
    <div v-if="privacyPolicy">
      <router-link class="left" to="/privacy-policy">{{ $t('footer.privacy_policy') }}</router-link>
    </div>
    <p class="right">{{ $t('footer.copyright') }}</p>
    <img class="logo" src="../assets/logo-footer.png" alt="footer">
    <img class="footer" src="../assets/footer.png" alt="footer">
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

footer {
  position: relative;
}

img.footer {
  width: calc(100% + 2 * 100px);
  height: 130px;
  margin-bottom: -20px;
  margin-left: -100px;
}

.left,
.right,
.logo {
  position: absolute;
}

.left,
.right {
  top: 55%;
  font-size: 14px;
  margin: 0;
  color: #272D2D;
}

.left {
  left: 0;
}

.right {
  right: 55px;
}

.logo {
  top: 45%;
  right: 0;
  height: 40px;
  width: auto;
}
</style>
