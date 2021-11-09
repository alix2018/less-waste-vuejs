<template>
  <div class="markdown" v-html="markdownToHtml"></div>
</template>

<script>
import marked from 'marked';

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
        });
    },
  },
  computed: {
    markdownToHtml() {
      return this.markdown ? marked(this.markdown) : '';
    }
  },
};
</script>

<style lang="scss">
  .markdown {
    padding: 50px 0;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
  }

  .markdown h1 {
    margin-top: 0;
  }

  .markdown h2 {
    margin-top: 30px;
    font-size: 40px;
    line-height: 45px;
  }

  .markdown h3 {
    font-size: 25px;
    line-height: 32px;
  }

  .markdown h4 {
    font-size: 18px;
    line-height: 25px;
  }
</style>
