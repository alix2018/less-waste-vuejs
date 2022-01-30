<template>
  <div class="selector">
    <p class="current-language" @click="onClickSeeAvailableLanguages">{{ $t(`home.language_${$i18n.locale}`) }}</p>
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
  methods: {
    onClickSeeAvailableLanguages() {
      this.showLanguagesList = !this.showLanguagesList;
    },
    onClickSelectNewLanguage(locale) {
      console.log('locale', locale);
      this.$i18n.locale = locale;
      console.log(this.$route.path);
      this.$router.push({ path: this.$route.path, query: { ...this.$route.query, hl: locale } });

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
    top: 20px;
    right: 50px;
    text-align: left;
  }

  p {
    cursor: pointer;
  }

  select {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    text-transform: capitalize;
  }
</style>
