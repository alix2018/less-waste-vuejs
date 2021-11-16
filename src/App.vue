<template>
  <main>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
$color-green: #8DEAD9;
$color-dark-green: #0A4242;
$color-yellow: #FEF1BB;
$color-black: #272D2D;
$color-white: #FFF;
$color-orange: #FC9774;
$color-light-orange: #FFE7DF;

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
  src: url(./assets/fonts/Lato-Italic.ttf) format('ttf');
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
  padding: 0 100px;
  font-size: 20px;
  overflow-x: hidden;
}

button,
.btn,
select {
  padding: 12px;
  text-transform: uppercase;
  border-color: $color-black;
  border: 2px solid $color-black;
  border-radius: 6px;
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

h1 {
  font-family: 'Lato Black', Helvetica, sans-serif;
  font-weight: 900;
  margin-top: 100px;
  text-transform: uppercase;
  font-size: 45px;
  line-height: 50px;
}

h2,
h3,
h4 {
  font-family: 'Lato Bold', Helvetica, sans-serif;
}

p,
a {
  font-family: 'Lato Regular', Helvetica, sans-serif;
}

a {
  color: $color-orange;
}

button {
  padding: 12px 20px;
  background-color: $color-orange;
  color: $color-white;
  border: none;
  font-family: 'Lato Bold', Helvetica, sans-serif;
  font-size: 16px;
  letter-spacing: 0.5px;
}

flex {
  display: flex;
  flex-direction: row;
}
</style>
