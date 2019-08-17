<template>
  <section class="hero is-medium is-link">
    <div class="hero-body">
      <div class="container">
        <h4 class="title is-size-4 is-size-5-mobile has-text-centered baked-hero">
          {{ title }}
        </h4>
        <h3 class="title is-size-3 is-size-6-mobile has-text-centered baked-hero">
          {{ subtitle }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',

  data: () => ({
    title: "Homemade baked goods with healthy, fresh ingredients and no preservatives.",
    subtitle: "Simple.",
  })
}
</script>

<style>
.baked-hero {
  text-shadow: 1px 1px 10px #636363;
}
</style>
