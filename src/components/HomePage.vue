<template>
  <header>
    <img class="background" src="../assets/header.svg">
    <h1>{{ $t('home.title') }}</h1>
    <h2>{{ $t('home.subtitle') }}</h2>
  </header>
  <h2 class="first-article">Facile, simple et efficace.</h2>
  <!-- <article>
    <div class="no-image"></div>
    <div>
      <h2 class="first-article">Facile, simple et efficace.</h2>
    </div>
  </article> -->
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
  </section>
  <footer></footer>
</template>

<script>
export default {
  name: 'HomePage',
  mounted() {
    this.$gtag.event('Home page');
  }
};
</script>

<style lang="scss" scoped>
$color-black: #272D2D;
header {
  img.background {
    position: absolute;
    width: 130%;
    height: auto;
    left: 50%;
    top: -70%;
    transform: translate(-50%);
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
}

h2.first-article {
  margin-top: 300px;
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
