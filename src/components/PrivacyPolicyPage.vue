<template>
  <div class="markdown" v-html="markdownToHtml"></div>
  <Footer></Footer>
</template>

<script>
import marked from 'marked';
import Footer from './Footer.vue';

export default {
  name: 'PrivacyPolicyPage',
  components: {
    Footer,
  },
  data() {
    return {
      markdown: null
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getMarkdownFile();
  },
  methods: {
    getMarkdownFile() {
      fetch('./privacy-policy-french.md')
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
@import "@scss/_global.scss";

.markdown {
  min-height: 100vh;
  padding: 50px 0;
  text-align: left;
  @include paragraph-text-light;
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
