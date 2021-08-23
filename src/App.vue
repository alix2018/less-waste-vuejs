<template>
  <main>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
$color-green: #8DEAD9;
$color-yellow: #FEF1BB;
$color-black: #272D2D;
$color-white: #FFF;

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
  font-family: 'Lato Bold';
  src: url(./assets/fonts/Lato-Bold.woff) format('woff');
}

@font-face {
  font-family: 'Lato Black';
  src: url(./assets/fonts/Lato-Black.woff) format('woff');
}

body {
  font-family: 'Lato Black', Helvetica, sans-serif;
  color: $color-black;
  text-align: center;
  margin: 60px 30px;
  min-height: 100vh;
}

button,
.btn {
  padding: 12px;
  text-transform: uppercase;
  border-color: $color-black;
  border: 2px solid $color-black;
  border-radius: 7px;
  font-family: 'Lato Regular', Helvetica, sans-serif;
  cursor: pointer;
  text-decoration: none;
}

button.transparent,
.btn.transparent {
  background-color: transparent;
  color: $color-black;
}

button.full,
.btn.full {
  background-color: $color-black;
  color: $color-green;
}
</style>

<style scoped>
</style>
