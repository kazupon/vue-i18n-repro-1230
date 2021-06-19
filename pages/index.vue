<template>
  <section>
    <div>
      <h1 class="title">Test<span class="green">JS</span></h1>
      <h2 class="subtitle">vue-18n ^8.24.3</h2>
      <div class="links">
        <NLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="button--grey"
          >Switch to {{ locale.code }}</NLink
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},

  async validate({ route, app, params, store, isStatic }) {
    console.log("pages/index.vue, validate()");

    console.log("route:");
    console.log(route);

    return true;
  },

  data() {
    return {
      locale: "en",
    };
  },

  computed: {
    availableLocales: function () {
      return this.$i18n.locales;
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
