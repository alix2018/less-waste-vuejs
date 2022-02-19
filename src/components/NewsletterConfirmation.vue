<template>
  <article>
    <router-link class="back" to="/home" @click="onClickBackHome">{{ $t('privacyPolicy.btn_back_to_home') }}</router-link>
    <section>
      <div class="flex">
        <h2>{{ $t('newsletter.confirmation_title') }}</h2>
        <p>{{ $t('newsletter.confirmation_text1') }}</p>
        <p v-html="$t('newsletter.confirmation_text2')"></p>
        <Share></Share>
      </div>
    </section>
  </article>
  <Footer privacyPolicy></Footer>
</template>

<script>
import Confetti from 'vue-confetti/src/confetti';
import Footer from './Footer.vue';
import Share from './Share.vue';

export default {
  name: 'NewsletterConfirmation',
  components: {
    Footer,
    Share
  },
  data() {
    return {
      confetti: null,
      isDesktop: window.innerWidth >= 550
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.confetti = new Confetti();
    setTimeout(() => {
      this.confetti.start({
        defaultDropRate: this.isDesktop ? 9 : 7,
        windSpeedMax: 0.8,
        defaultType: 'circle',
        defaultSize: this.isDesktop ? 7 : 5,
        particlesPerFrame: this.isDesktop ? 1.5 : 1,
        defaultColors: ['#8DEAD9', '#FEF1BB', '#FC9774', '#FFE7DF']
      });
    }, 1500);
    setTimeout(() => {
      this.confetti.stop();
    }, 15000);
  },
  beforeUnmount() {
    this.confetti.stop();
  },
  methods: {
    onClickBackHome() {
      this.$gtag.event('click_back_to_home', { location: window.location.pathname });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@scss/_global.scss";

article {
  margin: 0 0 80px;
  min-height: calc(100vh - 250px);
  padding: 50px 0 0;
}

a.back {
  margin-bottom: 35px;
}

a.back::before {
  background-image: url(../assets/back-arrow.svg);
}

section {
  display: block;
  margin: 0 auto;
  height: 600px;
  width: 600px;
  background-image: url(../assets/circle-yellow.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  div.flex {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;
    padding: 0 90px 20px 110px;

    p:last-of-type {
      margin-bottom: 40px;
    }
  }
}

Footer {
  margin-top: 0;
}

@media(max-width: 1023px) {
  article {
    margin-bottom: 40px;
  }

  section {
    height: 80vw;
    width: 80vw;

    div.flex {
      height: 80vw;
    }
  }
}

@media (max-width: 550px) {
  a.back {
    margin-bottom: 20px;
  }

  article {
    padding-top: 35px;
    min-height: calc(100vh - 355px);
  }

  section {
    $circle-width: calc(100vw - 10px);
    margin-left: -35px;
    height: $circle-width;
    width: $circle-width;

    div.flex {
      height: $circle-width;
      padding: 0 20px 5px 30px;

      h2 {
        margin: 0;
      }

      p:first-of-type {
        margin-bottom: 0;
      }

      p:last-of-type {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
