<template>
  This is the test page!

  <button class="full" @click="onClickButton"> Click to show a text!</button>
  <div>{{ messageToDisplay }}</div>
</template>

<script>
export default {
  name: 'TestPage',
  computed: {
    messageToDisplay() {
      return this.$store.state.message;
    },
  },
  methods: {
    onClickButton() {
      this.$store.commit('addMessageToPage', 'This text comes from the store');
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  color: white; // TODO: get Sass variable
}

div {
  font-family: 'Lato Regular';
  color: grey;
}
</style>
