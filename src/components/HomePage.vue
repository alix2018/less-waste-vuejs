<template>
  <header>
    <img class="background" src="../assets/header.png">
    <div>
      <h1>{{ $t('home.title') }}</h1>
      <h2>{{ $t('home.subtitle') }}</h2>
    </div>
  </header>
  <h2 class="first-article">{{ $t('home.h2_firs_section_title') }}</h2>
  <section class="intro">
    <article>
      <img src="../assets/icon-time.png" alt="clock">
      <div class="image">
        <h3>{{ $t('home.article_title_time') }}</h3>
        <p>{{ $t('home.article_text_time') }}</p>
      </div>
    </article>
    <article>
      <img src="../assets/icon-info.png" alt="information">
      <div class="image">
        <h3>{{ $t('home.article_title_info') }}</h3>
        <p>{{ $t('home.article_text_info') }}</p>
      </div>
    </article>
    <article>
      <img src="../assets/icon-environment.png" alt="planet">
      <div class="image">
        <h3>{{ $t('home.article_title_environment') }}</h3>
        <p>{{ $t('home.article_text_environment') }}</p>
      </div>
    </article>
    <article>
      <img src="../assets/icon-money.png" alt="euros">
      <div class="image">
        <h3>{{ $t('home.article_title_money') }}</h3>
        <p>{{ $t('home.article_text_money') }}</p>
      </div>
    </article>
  </section>
  <section class="newsletter">
    <div class="background">
      <img src="../assets/icon-announcement.png" alt="announcement" height="70">
      <p>{{ $t('home.newsletter_coming_soon') }}</p>
      <p>{{ $t('home.newsletter_inscription') }}</p>
      <button @click="openForm">{{ $t('home.newsletter_button_subscribe') }}</button>
    </div>
  </section>
  <section class="social">
      <h2>{{ $t('home.social_in_the_meantime') }}</h2>
      <h2>{{ $t('home.social_follow_us') }}</h2>
      <img src="../assets/photo-us.png" alt="us">
      <div class="links-container">
        <flex>
          <a href="https://www.instagram.com/lesswastefortheplanet/" class="instagram" target="_blank" rel="noopener noreferrer">@lesswastefortheplanet</a>
          <a href="mailto:lesswastefortheplanet@gmail.com" class="mail" target="_blank" rel="noopener noreferrer">lesswastefortheplanet@gmail.com</a>
        </flex>
        <!-- <p class="questions">Ecris-nous si tu as des questions</p> -->
        <flex class="share">
          <div class="rect-left"></div>
          <div class="rect-right">
            <h3>{{ $t('home.share_title') }}</h3>
            <p>{{ $t('home.share_description') }}</p>
            <flex class="channels">
              <img src="../assets/icon-messenger.png" alt="messenger" height="25">
              <img src="../assets/icon-whatsapp.png" alt="whatsapp" height="25">
              <img src="../assets/icon-instagram.png" alt="instagram" height="25">
              <img src="../assets/icon-mail.png" alt="mail" height="25">
              <img src="../assets/icon-copy.png" alt="copy" height="25">
          </flex>
          </div>
        </flex>
      </div>
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
header {
  img.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: -1;
  }

  h1,
  h2 {
    color: #0A4242;
    padding: 0 40px;
  }

  h2 {
    font-family: 'Lato Regular', Helvetica, sans-serif;
    font-weight: 300;
    margin-top: 50px;
    font-size: 35px;
    font-style: italic;
  }

  h2:after {
    display: inline-flex;
    content: '';
    height: 40px;
    width: 40px;
    vertical-align: top;
    margin-left: 15px;
    background-image: url(../assets/icon-celebration.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}

h2.first-article {
  margin-top: 250px;
  text-align: center;
}

section.intro {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  article {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px 0 0;
    text-align: left;

    div.image {
      max-width: 350px;
    }

    div.image,
    div.no-image {
      margin-left: 20px;
    }

    img,
    div.no-image {
      min-height: 200px;
      min-width: 200px;
      height: 200px;
      width: 200px;
    }

    h3 {
      font-family: 'Lato Regular', Helvetica, sans-serif;
      font-size: 18px;
    }

    p {
      font-family: 'Lato Light', Helvetica, sans-serif;
      font-size: 16px;
      line-height: 24px;
    }
  }
}

section.newsletter {
  margin-top: 120px;

  div.background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -100px;
    width: calc(100% + 2 * 100px);
    height: 400px;
    z-index: -1;
    background-image: url(../assets/orange-banner.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  p {
    font-size: 22px;
  }

  p:first-of-type {
    margin: 25px 0 6px;
  }

  p:last-of-type {
    margin: 6px 0 30px;
  }
}

section.social {
  position: relative;
  margin-top: 80px;
  min-height: 500px;

  h2 {
    margin: 12px 0;
  }

  img[alt='us'] {
    position: absolute;
    top: 100px;
    right: -200px;
    height: 550px;
  }

  div.links-container {
    margin-top: 140px;
    max-width: calc(100% - 450px);

    flex {
      width: 100%;
    }

    p,
    a {
      margin: 0;
      text-align: left;
      font-size: 22px;
    }

    a {
      text-decoration: none;
      color: #272D2D;
    }

    a::before,
    p.questions::before {
      display: inline-block;
      content: '';
      margin-right: 6px;
      height: 50px;
      width: 50px;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    }

    a.instagram::before {
      background-image: url(../assets/instagram-color.png);
    }

    a.mail::before {
      background-image: url(../assets/mail-color.png);
    }

    a.mail {
      margin-left: 80px;
    }

    p.questions {
      // margin-top: 10px;
      margin-left: 390px;
      color: #FC9774;
      font-family: 'HanziPen SC';
    }

    p.questions::before {
      margin-right: 12px;
      background-image: url(../assets/arrow-orange3.png);
      // vertical-align: top;
      vertical-align: bottom;
    }

    flex.share {
      margin-top: 80px;
      width: 100%;
      box-shadow: 0 4px 16px -6px rgba(0, 0, 0, 0.2);
      border-radius: 6px;

      .rect-left {
        height: auto;
        min-width: 170px;
        width: auto;
        background-color: #FEF1BB;
        border-radius: 6px;
        background-image: url(../assets/rock-n-roll.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 55%;
      }

      .rect-right {
        width: calc(100% - 130px - 40px);
        padding: 20px 40px;
        text-align: left;
        background-color: #FFF;

        h3 {
          margin: 0
        }

        p {
          margin: 15px 0;
          font-size: 16px;
          line-height: 24px;
        }

        flex.channels {
          justify-content: flex-start;
        }

        flex.channels img {
          margin: 0 12px;
          cursor: pointer;
        }

        flex.channels img:first-of-type {
          margin-left: 0;
        }
      }
    }
  }
}

Footer {
  margin-top: 220px;
}
</style>
