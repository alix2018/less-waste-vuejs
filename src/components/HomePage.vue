<template>
  <header>
    <picture>
      <source srcset="../assets/background-header-desktop.png" media="(min-width: 550px)"/>
      <source srcset="../assets/background-header-mobile.png" media="(max-width: 550px)"/>
      <img src="../assets/background-header-desktop.png" alt="header background">
    </picture>
    <div>
      <h1>{{ $t('home.title') }}</h1>
      <h2 class="coming-soon">{{ $t('home.subtitle') }}</h2>
    </div>
  </header>

  <!-- Section 1: Explanations -->
  <h2 class="first-article">{{ $t('home.h2_firs_section_title') }}</h2>
  <section class="explanations">
    <article class="layout">
      <img class="icon" src="../assets/icon-time.png" alt="clock">
      <div class="content">
        <h3>{{ $t('home.article_title_time') }}</h3>
        <p>{{ $t('home.article_text_time') }}</p>
      </div>
    </article>
    <article class="layout">
      <img class="icon" src="../assets/icon-info.png" alt="information">
      <div class="content">
        <h3>{{ $t('home.article_title_info') }}</h3>
        <p>{{ $t('home.article_text_info') }}</p>
      </div>
    </article>
    <article class="layout">
      <img class="icon" src="../assets/icon-environment.png" alt="planet">
      <div class="content">
        <h3>{{ $t('home.article_title_environment') }}</h3>
        <p>{{ $t('home.article_text_environment') }}</p>
      </div>
    </article>
    <article class="layout">
      <img class="icon" src="../assets/icon-money.png" alt="euros">
      <div class="content">
        <h3>{{ $t('home.article_title_money') }}</h3>
        <p>{{ $t('home.article_text_money') }}</p>
      </div>
    </article>
  </section>

  <!-- Section 2: Banner Newletter -->
  <section class="newsletter">
    <div class="banner">
      <img src="../assets/icon-announcement.png" alt="announcement" height="70">
      <p>{{ $t('home.newsletter_coming_soon') }}</p>
      <p>{{ $t('home.newsletter_inscription') }}</p>
      <button aria-label="{{ $t('home.newsletter_button_subscribe') }}" @click="onClickOpenForm">{{ $t('home.newsletter_button_subscribe') }}</button>
      </div>
  </section>

  <!-- Section 3: About us -->
  <section class="about-us">
      <div class="picture-text">
        <div class="picture">
          <picture>
            <source srcset="@public/photo-us.png" media="(min-width: 550px)"/>
            <source srcset="@public/photo-us-mobile.png" media="(max-width: 550px)"/>
            <img src="@public/photo-us.png" alt="us">
          </picture>
        </div>
        <div class="text">
          <h2>{{ $t('home.about_us_who_we_are') }}</h2>
          <p>{{ $t('home.about_us_description') }}</p>
        </div>
      </div>
  </section>

  <!-- Section 4: Banner Social Network -->
  <section class="social">
    <div class="banner">
      <div class="flex">
        <img src="../assets/instagram-color.png" alt="instagram" height="50">
        <img src="../assets/facebook-color.png" alt="facebook" height="50">
      </div>
      <p>{{ $t('home.social_in_the_meantime') }}</p>
      <p>{{ $t('home.social_follow_us') }}</p>
      <a href="https://www.instagram.com/lesswastefortheplanet/" class="instagram" target="_blank" rel="noopener noreferrer">{{ $t('home.social_instagram') }}</a>
      <a href="https://www.facebook.com/Less-waste-for-the-planet-107529881767168" class="facebook" target="_blank" rel="noopener noreferrer">{{ $t('home.social_facebook') }}</a>
    </div>
  </section>

  <!-- Section 5: Share -->
  <section class="share">
    <article class="layout">
      <img class="icon" src="../assets/icon-rock-n-roll.png" alt="rock n roll">
      <div class="content">
        <h3>{{ $t('home.share_title') }}</h3>
          <p>{{ shareDescription }}</p>

        <div class="btn flex" v-if="isDesktop">
          <input type="text" ref="copyUrl" aria-label="link to copy" v-model="url" readonly="readonly" />
          <button aria-label="{{ $t('home.share_button_copy') }}" @click="onClickCopyButton">{{ $t('home.share_button_copy') }}</button>
          <div v-if="copySuccess">
            <img src="../assets/checkmark.svg" alt="checkmark" height="12">
          </div>
        </div>

        <div class="btn flex" v-if="showNativeShareButton">
          <button aria-label="{{ $t('home.share_button_native_share') }}" @click="onClickShareButton">{{ $t('home.share_button_native_share') }}</button>
        </div>

      </div>
    </article>
  </section>
  <Footer :privacyPolicy="showPrivacyPolicy"></Footer>
  <NewsletterForm :show="openModal" @onClickCloseModal="onClickCloseModal"/>
</template>

<script>
import Footer from './Footer.vue';
import NewsletterForm from './NewsletterForm.vue';

export default {
  name: 'HomePage',
  components: {
    Footer,
    NewsletterForm
  },
  data() {
    return {
      showPrivacyPolicy: true,
      openModal: false,
      isDesktop: window.innerWidth >= 550,
      copySuccess: false,
      showNativeShareButton: false,
      shareDescription: '',
      url: window.location.origin
    };
  },
  mounted() {
    this.$gtag.event('Home page');
    this.showNativeShareButton = !this.isDesktop && navigator.share;
    const shareDescriptionKey = this.isDesktop ? 'desktop' : 'mobile';
    this.shareDescription = this.$t(`home.share_description_${shareDescriptionKey}`);
  },
  methods: {
    onClickOpenForm() {
      if (this.isDesktop) {
        this.openModal = true;
        document.body.setAttribute('style', 'overflow-y: hidden;');
      } else {
        this.$router.push({ name: 'Newsletter' });
      }
    },
    onClickCloseModal() {
      this.openModal = false;
      document.body.setAttribute('style', 'overflow-y: auto;');
    },
    closeModal() {
      this.openModal = false;
    },
    onClickCopyButton() {
      const linkToCopy = this.$refs.copyUrl;
      linkToCopy.select();
      linkToCopy.setSelectionRange(0, 99999);

      try {
        const successCopy = document.execCommand('copy');
        if (successCopy) {
          console.log('Success!');
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
  },
};
</script>

<style lang="scss" scoped>
@import "@scss/_global.scss";

section:not(section.explanations, section.about-us) {
  margin-top: 100px;
}

header {
  height: 300px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: -1;
  }

  h1 {
    margin-top: 100px;
  }

  h1,
  h2 {
    color: $color-dark-green;
    padding: 0 40px;
  }

  .coming-soon {
    font-family: 'Lato Regular';
    margin-top: 50px;
    font-size: 40px;
    font-style: italic;
  }

  h2:after {
    height: 40px;
    width: 40px;
    vertical-align: top;
    margin-left: 15px;
    background-image: url(../assets/icon-celebration.png);
    @include image-before-after;
  }
}

/* Section 1: Explanations */
h2.first-article {
  margin: 70px 0 20px;
  text-align: center;
}

section.explanations {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  // TODO: big screens justify-content: center?

  article {
    padding: 30px 0 0;
  }
}

/* Section 2: Banner Newletter */
section.newsletter {
  div.banner {
    background-image: url(../assets/banner-orange.png);

    p:first-of-type {
      margin: 25px 0 6px;
    }

    p:last-of-type {
      margin: 6px 0 30px;
    }
  }
}

/* Section 3: About us */
section.about-us {
  margin-top: 50px;

  h2 {
    margin: 12px 0;
  }

  .picture-text {
    position: relative;
    height: 40vw;
    max-height: 650px;
    min-height: 450px;

    img[alt='us'] {
      position: absolute;
      top: 0;
      right: -200px;
      height: 100%;
    }

    div.text {
      position: absolute;
      top: 50%;
      left: 0px;
      transform: translate(0, -50%);
      margin: 0;
      max-width: calc(100% + 90px - 40vw);
      text-align: left;

      h2 {
        margin: 0;
      }

      p {
        margin-top: 40px;
        @include paragraph-text-light;
      }
    }
  }
}

/* Section 4: Banner Social Network */
section.social {
  div.banner {
    background-image: url(../assets/banner-yellow.png);

    .flex {
      flex-direction: row;
      justify-content: center;
      align-items: center;

      img:last-of-type {
        margin-left: 15px;
      }
    }

    p:first-of-type {
      margin: 25px 0 6px;
    }

    p:last-of-type {
      margin: 6px 0 25px;
    }

    a {
      color: $color-black;
      font-size: 16px;
    }

    a:last-of-type {
      margin-top: 8px;
    }

    a.facebook::after,
    a.instagram::after {
      height: 15px;
      width: 15px;
      margin-left: 6px;
      vertical-align: text-bottom;
      background-image: url(../assets/arrow-circle.png);
      @include image-before-after;
    }
  }
}

/* Section 5: Share */
section.share {
  display: block;
  margin: 0 auto;

  article.layout div.content {
    max-width: 50%;
  }

  .btn {
    align-items: center;
    justify-content: flex-start;

    button {
      margin-top: 4px;
    }

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
}

Footer {
  margin-top: 150px;
}

@media (max-width: 768px) {
  /* Section 3: About us */
  section.about-us {
    .picture-text {
      position: relative;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      height: auto;
      max-height: initial;
      min-height: initial;

      div.picture {
        position: relative;
        height: 70vw;
        width: 70vw;
        margin: 50px auto 0;

        img[alt='us'] {
          position: absolute;
          top: initial;
          right: initial;
          display: block;
          margin: 0 auto;
          height: 100%;
          width: 100%;
        }
      }

      div.text {
        position: relative;
        top: initial;
        left: initial;
        transform: none;
        max-width: initial;
      }
    }
  }
}

@media (max-width: 550px) {
  section:not(section.explanations) {
    margin-top: 40px;
  }

  header {
    text-align: left;
    height: 350px;

    h1 {
      margin-top: 50px;
      padding: 0;
    }

    .coming-soon {
      margin-top: 24px;
      padding: 0;
      font-size: 26px;
    }

    h2:after {
      height: 30px;
      width: 30px;
    }
  }

  /* Section 1: Explanations */
  h2.first-article {
    margin-top: 40px;
    text-align: left;
  }

  /* Section 3: About us */
  section.about-us {
    $picture-size-mobile: calc(100vw + 4 * #{$body-padding-mobile});

    .picture-text {
      div.picture {
        position: relative;
        height: $picture-size-mobile;
        width: 100vw;
        margin-top: 30px;
        margin-left: -1 * $body-padding-mobile;
        overflow-x: hidden;

        img[alt='us'] {
          width: $picture-size-mobile;
          height: $picture-size-mobile;
          left: -2 * $body-padding-mobile;
        }
      }

      div.text {
        p {
          @include paragraph-text-light-mobile;
        }
      }
    }
  }

  /* Section 5: Share */
  section.share {
    article.layout div.content {
      max-width: 100%;
    }
  }

  Footer {
    margin-top: 100px;
  }
}
</style>
