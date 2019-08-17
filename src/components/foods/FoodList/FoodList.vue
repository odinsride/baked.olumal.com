<template>
  <section class="section" id="foods">
    <div class="container">
      <h1 class="title is-size-4 has-text-primary">Our Foods</h1>
      <div class="columns is-multiline">
        <div
          v-for="food in $static.foods.edges"
          :key="food.node.id"
          class="column is-4"
        >
          <FoodCard :food="food"/>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query Food {
  foods: allFood(sortBy: "order", order: ASC) {
    edges {
      node {
        id,
        title,
        slug,
        image,
        ingredients
      }
    }
  }
}
</static-query>

<script>
import FoodCard from './components/FoodCard'

export default {
  components: {
    FoodCard,
  },

}
</script>

<style scoped lang="scss">
.title {
  font-weight: 500;
}

.columns {
  flex-wrap: wrap;
  align-items: stretch;
}

.column {
  display: flex;
}
</style>
