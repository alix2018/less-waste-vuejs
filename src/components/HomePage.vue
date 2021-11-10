<template>
  <header>
    <img class="background" src="../assets/header.png">
    <div>
      <h1>{{ $t('home.title') }}</h1>
      <h2>{{ $t('home.subtitle') }}</h2>
    </div>
  </header>
  <h2 class="first-article">{{ $t('home.h2_firs_section_title') }}</h2>
  <section>
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
  <Footer :privacyPolicy="showPrivacyPolicy"></Footer>
</template>

<script>
import Footer from './Footer.vue';

export default {
  name: 'HomePage',
  components: {
    Footer,
  },
  data() {
    return {
      showPrivacyPolicy: true,
    };
  },
  mounted() {
    this.$gtag.event('Home page');
  }
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

section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 150px;
}

h2.first-article {
  margin-top: 250px;
  text-align: center;
}

article {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
</style>
