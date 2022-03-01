<template>
  <div class="desktop-selector">
    <div class="flex" @click="onClickSeeAvailableLanguages">
      <img src="../assets/internet.png" alt="{{ $t('languageSwitcher.alt_languages') }}">
      <p class="current-language">{{ $t(`home.language_${$i18n.locale}`) }}</p>
    </div>
    <div class="dropdown" :class="[showLanguagesList ? 'show' : 'hide']">
      <p v-for="locale in getAvailableLanguages" :key="`locale-${locale}`" :value="locale" @click="onClickSelectNewLanguage(locale)">
        {{ $t(`home.language_${locale}`) }}
      </p>
    </div>
  </div>
  <div class="mobile-selector">
    <img src="../assets/internet.png" alt="{{ $t('languageSwitcher.alt_languages') }}">
    <select  v-model="$i18n.locale" @click="onClickSeeAvailableLanguages" @change="sendLanguageSwitchAnalytics($i18n.locale)">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" >
        {{ $t(`home.language_${locale}`) }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      isMobileTablet: window.innerWidth <= 1023,
      showLanguagesList: false,
      showDropdown: false
    };
  },
  computed: {
    getAvailableLanguages() {
      return this.$i18n.availableLocales.filter((lang) => lang !== this.$i18n.locale);
    }
  },
  mounted() {
    this.saveLanguage();
  },
  updated() {
    this.saveLanguage();
  },
  methods: {
    saveLanguage() {
      this.$router.push({ path: this.$route.path, query: { ...this.$route.query, hl: this.$i18n.locale } });
      document.title = this.$t('metadata.title');
      localStorage.setItem('language', this.$i18n.locale);
    },
    onClickSeeAvailableLanguages() {
      this.showLanguagesList = !this.showLanguagesList;
      this.showDropdown = !this.showDropdown;
      this.$gtag.event('click_language_switcher_logo');
    },
    onClickSelectNewLanguage(locale) {
      this.$i18n.locale = locale;
      this.showLanguagesList = false;
      this.sendLanguageSwitchAnalytics(this.$i18n.locale);
    },
    sendLanguageSwitchAnalytics(locale) {
      this.$emit('newLanguageSet');
      this.$gtag.event('click_language_switcher_language', { value: locale });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@scss/_global.scss";

.desktop-selector {
  display: block;
  position: absolute;
  width: 100px;
  top: 30px;
  right: 50px;
  text-align: left;
}

.mobile-selector {
  display: none;
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
  z-index: 1;
  color: transparent;
  background-color: transparent;
  border: none;
  -webkit-appearance: none;
}

@media (max-width: 1023px) {
  .desktop-selector {
    display: none;
  }

  .mobile-selector {
    display: block;
  }

  select,
  img {
    position: absolute;
    top: 30px;
    right: 40px;
    width: 35px;
    height: 35px;
    margin: 0;
    cursor: pointer
  }

  img {
    z-index: 0;
  }
}
</style>
