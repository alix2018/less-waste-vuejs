<template>
  <main>
    <HomePage message="Work in progress :)"/>
  </main>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style>
@font-face {
  font-family: 'Lato Black';
  src: url(./assets/fonts/Lato-Black.woff) format('woff');
}

body {
  font-family: 'Lato Black', Helvetica, sans-serif;
  color: #272D2D;
  text-align: center;
  margin-top: 60px;
}
</style>

<style scoped>
</style>
