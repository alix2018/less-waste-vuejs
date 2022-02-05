<template>
  <div class="selector">
    <div class="flex" @click="onClickSeeAvailableLanguages">
      <img src="../assets/internet.png" alt="languages">
      <p class="current-language">{{ $t(`home.language_${$i18n.locale}`) }}</p>
    </div>
    <div class="dropdown" :class="[showLanguagesList ? 'show' : 'hide']">
      <p v-for="locale in getAvailableLanguages" :key="`locale-${locale}`" :value="locale" @click="onClickSelectNewLanguage(locale)">
        {{ $t(`home.language_${locale}`) }}
      </p>
    </div>
    <!-- <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
        {{ $t(`home.language_${locale}`) }}
      </option>
    </select> -->
  </div>
</template>

<script>
export default {
  name: 'LanguagePicker',
  data() {
    return {
      showLanguagesList: false
    };
  },
  computed: {
    getAvailableLanguages() {
      return this.$i18n.availableLocales.filter((lang) => lang !== this.$i18n.locale);
    }
  },
  mounted() {
    this.addLanguageToUrl();
  },
  updated() {
    this.addLanguageToUrl();
  },
  methods: {
    addLanguageToUrl() {
      this.$router.push({ path: this.$route.path, query: { ...this.$route.query, hl: this.$i18n.locale } });
    },
    onClickSeeAvailableLanguages() {
      this.showLanguagesList = !this.showLanguagesList;
    },
    onClickSelectNewLanguage(locale) {
      this.$i18n.locale = locale;
      // TODO: Update document.title
      this.showLanguagesList = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@scss/_global.scss";

  .selector {
    width: 100px;
    position: absolute;
    top: 30px;
    right: 50px;
    text-align: left;
  }

  .flex {
    align-items: center;
    cursor: pointer;

    img {
      margin-right: 5px;
    }

    p {
      margin: 0;
    }
  }

  p {
    cursor: pointer;
  }

  img {
    width: 22px;
    height: 22px;
  }

  .dropdown p {
    margin-left: 27px;
  }

  p:hover {
    text-decoration: underline;
  }

  select {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    text-transform: capitalize;
  }
</style>
