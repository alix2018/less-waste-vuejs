<template>
  <header :style="{ height: headerHeight + 'px' }">
    <picture>
      <source srcset="../assets/background-header-desktop.png" media="(min-width: 550px)"/>
      <source srcset="../assets/background-header-mobile.png" media="(max-width: 550px)"/>
      <img src="../assets/background-header-desktop.png" alt="{{ $t('home.alt_header_background') }}" :style="{ height: headerBackgroundHeight + 'px' }">
    </picture>
    <LanguageSwitcher @newLanguageSet="setHeaderSize"></LanguageSwitcher>
    <div ref="headerContent">
      <h1>{{ $t('home.title') }}</h1>
      <h2 class="coming-soon">{{ $t('home.subtitle') }}</h2>
    </div>
  </header>

  <!-- Section 1: Explanations -->
  <h2 class="first-article">{{ $t('home.h2_first_section_title') }}</h2>
  <section class="explanations">
    <article class="layout">
      <img class="icon" src="../assets/icon-time.png" alt="{{ $t('home.alt_clock') }}">
      <div class="content">
        <h3 v-html="$t('home.article_title_time')"></h3>
        <p>{{ $t('home.article_text_time') }}</p>
      </div>
    </article>
    <article class="layout">
      <img class="icon" src="../assets/icon-info.png" alt="{{ $t('home.alt_information') }}">
      <div class="content">
        <h3 v-html="$t('home.article_title_info')"></h3>
        <p>{{ $t('home.article_text_info') }}</p>
      </div>
    </article>
    <article class="layout">
      <img class="icon" src="../assets/icon-environment.png" alt="{{ $t('home.alt_planet') }}">
      <div class="content">
        <h3 v-html="$t('home.article_title_environment')"></h3>
        <p>{{ $t('home.article_text_environment') }}</p>
      </div>
    </article>
    <article class="layout">
      <img class="icon" src="../assets/icon-money.png" alt="{{ $t('home.alt_euros') }}">
      <div class="content">
        <h3 v-html="$t('home.article_title_money')"></h3>
        <p>{{ $t('home.article_text_money') }}</p>
      </div>
    </article>
  </section>

  <!-- Section 2: Banner Newletter -->
  <section class="newsletter">
    <div class="banner">
      <img src="../assets/icon-announcement.png" alt="{{ $t('home.alt_announcement') }}" height="70">
      <p v-html="$t('home.newsletter_coming_soon')"></p>
      <p>{{ $t('home.newsletter_inscription') }}</p>
      <button aria-label="{{ $t('home.newsletter_button_subscribe') }}" @click="onClickOpenForm">{{ $t('home.newsletter_button_subscribe') }}</button>
      </div>
  </section>

  <!-- Section 3: About us -->
  <section class="about-us">
      <div class="picture-text">
        <div class="picture">
          <picture>
            <source srcset="@public/assets/photo-us.png" media="(min-width: 550px)"/>
            <source srcset="@public/assets/photo-us-mobile.png" media="(max-width: 550px)"/>
            <img src="@public/assets/photo-us.png" class="us" alt="{{ $t('home.alt_us') }}">
          </picture>
        </div>
        <div class="text">
          <h2>{{ $t('home.about_us_who_we_are') }}</h2>
          <p v-html="$t('home.about_us_description')"></p>
        </div>
      </div>
  </section>

  <!-- Section 4: Banner Social Network -->
  <section class="social">
    <div class="banner">
      <div class="flex">
        <a href="https://www.instagram.com/lesswastefortheplanet/" target="_blank" rel="noopener noreferrer" @click="onClickInstagramLogo">
          <img src="../assets/instagram-color.png" height="50" alt="{{ $t('home.alt_instagram') }}">
        </a>
        <a href="https://www.facebook.com/Less-waste-for-the-planet-107529881767168" target="_blank" rel="noopener noreferrer" @click="onClickFacebookLogo">
          <img src="../assets/facebook-color.png" height="50" alt="{{ $t('home.alt_facebook') }}">
        </a>
      </div>
      <p>{{ $t('home.social_in_the_meantime') }}</p>
      <p v-html="$t('home.social_follow_us')"></p>
      <div class="flex">
        <a href="https://www.instagram.com/lesswastefortheplanet/" class="instagram" target="_blank" rel="noopener noreferrer" @click="onClickInstagram">{{ $t('home.social_instagram') }}</a>
        <a href="https://www.facebook.com/Less-waste-for-the-planet-107529881767168" class="facebook" target="_blank" rel="noopener noreferrer" @click="onClickFacebook">{{ $t('home.social_facebook') }}</a>
      </div>
    </div>
  </section>

  <!-- Section 5: Share -->
  <section class="share">
    <article class="layout">
      <img class="icon" src="../assets/icon-share.png" alt="{{ $t('home.alt_share') }}">
      <div class="content">
        <h3>{{ $t('home.share_title') }}</h3>
          <p>{{ $t('home.share_description') }}</p>
          <Share></Share>
      </div>
    </article>
  </section>

  <Footer privacyPolicy></Footer>
  <NewsletterForm :show="openModal" @onClickCloseModal="onClickCloseModal"/>
</template>

<script>
import Footer from './Footer.vue';
import NewsletterForm from './NewsletterForm.vue';
import Share from './Share.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
  name: 'PageHome',
  components: {
    Footer,
    NewsletterForm,
    Share,
    LanguageSwitcher
  },
  data() {
    return {
      openModal: false,
      // TODO: make is generic value (helper)
      isDesktop: window.innerWidth >= 550,
      headerHeight: 0,
      headerBackgroundHeight: 0,
      constants: {
        DESKTOP_HEADER_SPACING: 130,
        DESKTOP_BACKGROUND_SPACING: 25,
        MOBILE_HEADER_SPACING: 50,
        MOBILE_BACKGROUND_SPACING: 15,
      }
    };
  },
  created() {
    window.addEventListener('resize', this.setHeaderSize);
  },
  unmounted() {
    window.removeEventListener('resize', this.setHeaderSize);
  },
  mounted() {
    this.$gtag.event('display_home_page');
    this.setHeaderSize();
  },
  methods: {
    setHeaderSize() {
      this.isDesktop = window.innerWidth >= 550;
      const header = this.$refs.headerContent;
      const headerSpacing = this.isDesktop ? this.constants.DESKTOP_HEADER_SPACING : this.constants.MOBILE_HEADER_SPACING;
      const backgroundSpacing = this.isDesktop ? this.constants.DESKTOP_BACKGROUND_SPACING : this.constants.MOBILE_BACKGROUND_SPACING;
      this.headerHeight = header.offsetHeight + headerSpacing;
      this.headerBackgroundHeight = this.headerHeight + headerSpacing - backgroundSpacing;
    },
    onClickOpenForm() {
      this.$gtag.event('click_subscribe_to_newsletter');
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
    onClickInstagram() {
      this.$gtag.event('click_open_instagram', { component: 'Home', location: 'link' });
    },
    onClickFacebook() {
      this.$gtag.event('click_open_facebook', { location: 'link' });
    },
    onClickInstagramLogo() {
      this.$gtag.event('click_open_instagram', { component: 'Home', location: 'logo' });
    },
    onClickFacebookLogo() {
      this.$gtag.event('click_open_facebook', { location: 'logo' });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@scss/_global.scss";

section:not(section.explanations, section.about-us) {
  margin-top: 100px;
}

header {
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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
  padding-top: 50px;
  overflow-x: hidden;
  width: calc(100% + #{$body-padding-big-screen});

  h2 {
    margin: 12px 0;
  }

  .picture-text {
    position: relative;
    height: 40vw;
    max-height: 650px;
    min-height: 450px;

    img.us {
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

    a.facebook {
      margin-left: 15px;
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
}

Footer {
  margin-top: 150px;
}

@media (max-width: 1500px) {
  section.about-us {
    width: calc(100% + #{$body-padding-desktop});

    .picture-text {
      img.us {
        right: -150px;
      }

      div.text {
        max-width: calc(100% + 25px - 40vw);
      }
    }
  }
}

@media (max-width: 1023px) {
  section.about-us {
    width: calc(100% + #{$body-padding-mobile});
  }
}

@media (max-width: 767px) {
  /* Section 3: About us */
  section.about-us {
    overflow: initial;
    width: 100%;

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

        img.us {
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
  section:not(section.explanations, section.about-us) {
    margin-top: 40px;
  }

  header {
    text-align: left;

    h1 {
      margin-top: 35px;
      margin-right: 40px;
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

  section.explanations {
    article {
      div.content {
        max-width: none;
      }
    }
  }

  /* Section 3: About us */
  section.about-us {
    $picture-size-mobile: calc(100vw + 4 * #{$body-padding-mobile});
    margin-top: 0;

    .picture-text {
      div.picture {
        position: relative;
        height: $picture-size-mobile;
        width: 100vw;
        margin-top: 30px;
        margin-left: -1 * $body-padding-mobile;
        overflow-x: hidden;

        img.us {
          width: $picture-size-mobile;
          height: $picture-size-mobile;
          left: -2 * $body-padding-mobile;
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
