<template>
  <select v-model="$i18n.locale">
    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
      {{ $t(`home.language_${locale}`) }}
    </option>
  </select>
</template>

<script>

export default {
  name: 'LanguagePicker'
};
</script>

<style lang="scss" scoped>
  select {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    text-transform: capitalize;
  }
</style>
