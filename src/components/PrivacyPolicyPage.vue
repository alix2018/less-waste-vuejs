<template>
  <div v-html="markdownToHtml"></div>
</template>

<script>
import marked from 'marked';
// import privacyPolicyMd from './privacy-policy.md';

export default {
  data() {
    return {
      markdown: null
    };
  },
  name: 'PrivacyPolicyPage',
  mounted() {
    this.getMarkdownFile();
  },
  methods: {
    getMarkdownFile() {
      fetch('./privacy-policy.md')
        .then((res) => res.text())
        .then((text) => {
          this.markdown = text;
        })
    },
  },
  computed: {
    markdownToHtml() {
      console.log('markdownToHtml');
      console.log('this.markdown', this.markdown);
      if (this.markdown) {
        return marked(this.markdown);
      }
      return '';
    }
  },
};
</script>

<style lang="scss" scoped>
  div {
    font-family: 'Lato Regular', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
  }
// </style>

// <style lang="scss">
  div ::v-deep p {
    color: red;
  }

  div ::v-deep h2 {
    font-family: 'Lato Bold', Helvetica, sans-serif;
    font-weight: 300;
    margin-top: 50px;
    font-size: 60px;
  }

  div {
  /deep/ p {
    color: red;
  }
}
</style>
