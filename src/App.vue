<template>
  <main>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$gtag.event('start_application', { location: window.location.pathname });
  }
};
</script>

<style lang="scss">
@import "@scss/_global.scss";

@font-face {
  font-family: 'Lato Thin';
  src: url(./assets/fonts/Lato-Thin.woff) format('woff');
}

@font-face {
  font-family: 'Lato Light';
  src: url(./assets/fonts/Lato-Light.woff) format('woff');
}

@font-face {
  font-family: 'Lato Regular';
  src: url(./assets/fonts/Lato-Regular.woff) format('woff');
}

@font-face {
  font-family: 'Lato Italic';
  src: url(./assets/fonts/Lato-Italic.woff) format('woff');
}

@font-face {
  font-family: 'Lato Bold';
  src: url(./assets/fonts/Lato-Bold.woff) format('woff');
}

@font-face {
  font-family: 'Lato Black';
  src: url(./assets/fonts/Lato-Black.woff) format('woff');
}

body {
  font-family: 'Lato Regular', Helvetica, sans-serif;
  color: $color-black;
  text-align: center;
  margin: 0;
  padding: 0 $body-padding-big-screen;
  font-size: 20px;
}

@media (max-width: 1500px) {
  body {
    padding: 0 $body-padding-desktop;
  }
}

@media (max-width: 1023px) {
  body {
    padding: 0 $body-padding-mobile;
  }
}
</style>
