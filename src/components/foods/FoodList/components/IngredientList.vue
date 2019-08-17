<template>
  <div v-if="ingredients.length > 0">
    <div class="ingredient-title has-text-centered has-text-primary">
      Ingredients
    </div>
    <div class="ingredient-tags-container">
      <b-taglist class="has-text-centered">
        <b-tag v-for="ingredient in ingredients" :key="ingredient" class="is-link">
          {{ ingredient }}
        </b-tag>
      </b-taglist>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ingredients: {
      required: true,
      type: Object
    }
  },
}
</script>

<style lang="scss" scoped>
.ingredient-title {
  font-weight: 500;
  margin-bottom: 5px;
}

.ingredient-tags-container {
  padding: 8px;
  border: 2px solid rgba(38, 166, 154, 0.2);
  border-radius: 7px;

  .tags {
    justify-content: center;
  }

  .tag {
    // text-transform: uppercase;
    font-weight: 500;
    font-size: 0.9rem;
    box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.4);

  }
}
</style>