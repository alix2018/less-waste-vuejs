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
