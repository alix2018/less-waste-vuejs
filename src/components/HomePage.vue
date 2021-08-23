<template>
  <div class="hello">
    <img v-show="showGreenLogo" @click="changeLogo()" alt="Less Waste green logo" src="../assets/less-waste-logo.svg">
    <img v-show="showYellowLogo" @click="changeLogo()" alt="Less Waste yellow logo" src="../assets/less-waste-logo-yellow.svg">
    <h1 @click="consoleLogHello()" :class="[addClassSomething]">{{message}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  created() {
    console.log('Home component created');
  },
  mounted() {
    console.log('Home component mounted');
  },
  data() {
    return {
      showGreenLogo: true,
      showYellowLogo: false
    };
  },
  mixins: [],
  computed: {
    addClassSomething() {
      return 'new-class-here';
    }
  },
  methods: {
    consoleLogHello() {
      console.log('Hellooooo!');
    },
    changeLogo() {
      console.log('Change logo :)');
      this.showGreenLogo = !this.showGreenLogo;
      this.showYellowLogo = !this.showYellowLogo;
    }
  },
  props: {
    message: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div {
  img {
    width: 250px;
    height: 250px;
    cursor: pointer;
  }

  h1 {
    margin-top: 50px;
  }
}
</style>
