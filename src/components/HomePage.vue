<template>
  <header>
    <img class="background" src="../assets/header.svg">
    <h1>{{ $t('home.title') }}</h1>
    <h2>{{ $t('home.subtitle') }}</h2>
    <block>
      <router-link :to="{name: 'Test'}" class="btn transparent">Do the test
        <img src="../assets/black-arrow.svg">
      </router-link>
      <button class="full">See tips
      <img src="../assets/green-arrow.svg">
      </button>
    </block>
  </header>
  <punchline></punchline>
  <section></section>
  <punchline></punchline>
  <section></section>
  <punchline></punchline>
  <section></section>
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
    min-width: 150%;
    min-height: 700px;
    height: auto;
    left: 50%;
    top: -35%;
    transform: translate(-50%);
    z-index: -1;
  }

  h1,
  h2 {
    font-family: 'Lato Black', Helvetica, sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 45px;
  }

  h2 {
    font-family: 'Lato Thin', Helvetica, sans-serif;
    font-size: 35px;
  }

  block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 70px;

    .btn {
      margin-right: 24px;
    }

    button.full {
      margin-left: 24px;
    }

    img {
      width: 20px;
      margin-left: 8px;
    }
  }
}
</style>
