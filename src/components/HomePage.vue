<template>
  <header>
    <img class="background" src="../assets/header.svg">
    <h1>Reducing your waste</h1>
    <h2>Doesn't have to be hard</h2>
    <block>
      <button class="transparent">Do the test
      <img src="../assets/black-arrow.svg">
      </button>
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

    button.transparent {
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
