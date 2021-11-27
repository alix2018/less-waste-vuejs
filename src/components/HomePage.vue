<template>
  <header>
    <img src="../assets/background-header.png" alt="green background">
    <div>
      <h1>{{ $t('home.title') }}</h1>
      <h2>{{ $t('home.subtitle') }}</h2>
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
      <button @click="openForm">{{ $t('home.newsletter_button_subscribe') }}</button>
    </div>
  </section>

  <!-- Section 3: About us -->
  <section class="about-us">
      <div class="picture-text">
        <img src="../assets/photo-us.png" alt="us">
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
      <a href="https://facebook.com/lesswastefortheplanet" class="facebook" target="_blank" rel="noopener noreferrer">facebook.com/lesswastefortheplanet</a>
      <a href="https://www.instagram.com/lesswastefortheplanet/" class="instagram" target="_blank" rel="noopener noreferrer">@lesswastefortheplanet</a>
    </div>
  </section>

  <!-- Section 5: Share -->
  <section class="share">
    <article class="layout">
      <img class="icon" src="../assets/icon-rock-n-roll.png" alt="rock n roll">
      <div class="content">
        <h3>{{ $t('home.share_title') }}</h3>
        <p>{{ $t('home.share_description') }}</p>
        <div class="channels flex">
          <img src="../assets/icon-messenger.png" alt="messenger" height="25">
          <img src="../assets/icon-whatsapp.png" alt="whatsapp" height="25">
          <img src="../assets/icon-instagram.png" alt="instagram" height="25">
          <img src="../assets/icon-mail.png" alt="mail" height="25">
          <img src="../assets/icon-copy.png" alt="copy" height="25">
      </div>
      </div>
    </article>
  </section>
  <Footer :privacyPolicy="showPrivacyPolicy"></Footer>
  <NewsletterForm :show="openModal" @onClickCloseModal="closeModal"/>
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
      openModal: false
    };
  },
  mounted() {
    this.$gtag.event('Home page');
  },
  methods: {
    openForm() {
      this.openModal = true;
      document.body.setAttribute('style', 'overflow-y: hidden;');
    },
    onClickCloseModal() {
      this.openModal = false;
      document.body.setAttribute('style', 'overflow-y: auto;');
    },
    closeModal() {
      this.openModal = false;
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
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: -1;
  }

  h1,
  h2 {
    color: $color-dark-green;
    padding: 0 40px;
  }

  h2 {
    font-family: 'Lato Regular';
    font-weight: 300;
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
  margin-top: 250px;
  text-align: center;
}

section.explanations {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  article {
    padding: 30px 0 0;
  }
}

/* Section 2: Banner Newletter */
section.newsletter {
  div.banner {
    background-image: url(../assets/banner-orange.png);

    p {
      @include text-banner;
    }

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
      max-width: calc(100% - 0px - 40vw);
      text-align: left;

      h2 {
        margin: 0;
      }

      p {
        margin-top: 40px;
        @include paragraph-text;
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

    p {
      @include text-banner;
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
      vertical-align: bottom;
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

  div.channels {
    justify-content: flex-start;
  }

  div.channels img {
    margin: 0 12px;
    cursor: pointer;
  }

  div.channels img:first-of-type {
    margin-left: 0;
  }
}

Footer {
  margin-top: 150px;
}
</style>
