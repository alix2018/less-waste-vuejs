<template>
  <article class="content-page">
    <router-link class="back" to="/home" @click="onClickBackHome">{{ $t('privacyPolicy.btn_back_to_home') }}</router-link>
    <div class="markdown" v-html="markdownToHtml"></div>
  </article>
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
    this.$gtag.event('display_privacy_policy');
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
    onClickBackHome() {
      this.$gtag.event('click_back_to_home', { location: window.location.pathname });
    }
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

article.content-page {
  padding: 50px 0;
}

a.back {
  display: block;
  margin: 0;
  padding: 0;
  color: $color-black;
  font-family: 'Lato Bold';
  text-decoration: none;
  text-align: left;
  cursor: pointer;
}

a.back::before {
  align-items: center;
  vertical-align: middle;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  background-image: url(../assets/back-arrow.svg);
  @include image-before-after;
}

.markdown {
  min-height: 100vh;
  padding: 0;
  text-align: left;
  @include paragraph-text-light;
}

.markdown h1 {
  margin: 35px 0;
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

.markdown a {
  line-break: anywhere;
}

.markdown ul {
  padding-left: 40px;
}

@media (max-width: 1023px) {
  article.content-page {
    padding-bottom: 80px;
  }

  .markdown h2 {
    margin-top: 30px;
    font-size: 30px;
    line-height: 35px;
  }

  .markdown h3 {
    font-size: 20px;
    line-height: 25px;
  }

  .markdown h4 {
    font-size: 18px;
    line-height: 25px;
  }

  .markdown ul {
    padding-left: 20px;
  }
}

@media (max-width: 550px) {
  article.content-page {
    padding: 35px 0;
  }

  .markdown h1 {
    font-size: 30px;
    line-height: 42px;
    margin: 20px 0;
  }
}
</style>
