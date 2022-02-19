<template>
  <div class="btn-share flex" v-if="isDesktop">
    <input type="text" ref="copyUrl" aria-label="link to copy" v-model="url" readonly="readonly" />
    <button aria-label="{{ $t('share.button_copy') }}" @click="onClickCopyButton">{{ $t('share.button_copy') }}</button>
    <div v-if="copySuccess">
      <img src="../assets/checkmark.svg" alt="checkmark" height="12">
    </div>
  </div>

  <div class="btn-share flex" v-if="showNativeShareButton">
    <button aria-label="{{ $t('share.button_native_share') }}" @click="onClickShareButton">{{ $t('share.button_native_share') }}</button>
  </div>
</template>

<script>
export default {
  name: 'Share',

  data() {
    return {
      copySuccess: false,
      isDesktop: window.innerWidth >= 550,
      showNativeShareButton: false,
      url: window.location.origin
    };
  },
  mounted() {
    this.showNativeShareButton = !this.isDesktop && navigator.share;
  },
  methods: {
    onClickCopyButton() {
      this.$gtag.event('click_copy_url', { location: window.location.pathname });
      const linkToCopy = this.$refs.copyUrl;
      linkToCopy.select();
      linkToCopy.setSelectionRange(0, 99999);

      try {
        const successCopy = document.execCommand('copy');
        if (successCopy) {
          this.copySuccess = true;

          setTimeout(() => {
            this.copySuccess = false;
          }, 4000);
        }
      } catch (err) {
        console.warn('copy error');
      }
    },
    onClickShareButton() {
      this.$gtag.event('click_share_url', { location: window.location.pathname });
      if (navigator.share) {
        const { title } = document;
        const description = document.querySelector('meta[name=\'Description\']');
        navigator.share({
          title,
          description,
          url: this.url
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@scss/_global.scss";

.btn-share {
  align-items: center;
  justify-content: flex-start;

  input {
    opacity: 0;
    position: absolute;
    z-index: 0;
    pointer-events: none;
  }

  img {
    margin-left: 16px;
  }
}
</style>
