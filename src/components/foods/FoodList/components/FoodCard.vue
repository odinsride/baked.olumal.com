<template>
  <div class="kc-card">
    <div class="kc-card-front has-background-link">
      <div class="kc-card-img">
        <g-image v-if="food.node.image" :src="food.node.image" />
        <g-image v-else src="https://via.placeholder.com/500x285.png" />
      </div>
      <div class="kc-card-content has-text-white">
        <div class="kc-card-title has-text-centered">
          {{ food.node.title }}
        </div>
      </div>
    </div>
    <div class="kc-card-back">
      <div class="kc-card-back-header has-background-link">
        <div class="kc-card-back-title has-text-white">
          <b-icon
            pack="fa"
            icon="info-circle"
            size="is-small">
          </b-icon>&nbsp;
          {{ food.node.title }}
        </div>
      </div>
      <div class="kc-card-content">
        <IngredientList :ingredients="ingredients"/>
      </div>
    </div>
  </div>
</template>

<script>
import IngredientList from './IngredientList'

export default {
  data () {
    return {
      ingredients: this.food.node.ingredients ? this.food.node.ingredients.split(',') : 0
    }
  },

  components: {
    IngredientList,
  },

  props: {
    food: {
      required: true,
      type: Object
    }
  },
}
</script>

<style lang="scss">
.kc-card {
  //background-color: transparent;
  //width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  min-height: 250px;
  -webkit-perspective: 1000px;
          perspective: 1000px;

  &:hover {
    .kc-card-back {
      transform: rotateY(0deg);
      transform-style: preserve-3d;
      z-index: 10;
    }

    .kc-card-front {
      transform: rotateY(-180deg);
      transform-style: preserve-3d;
      z-index: -1;
    }
  }

  .kc-card-back, .kc-card-front {
    -webkit-transition: all 0.6s cubic-bezier(.5,1,.5,1);
    transition: all 0.6s cubic-bezier(.5,1.3,.5,1.3);
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  .kc-card-back {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    transform: rotateY(180deg);
    box-shadow: 4px 16px 18px -8px rgba(0,0,0,0.4);

    background: rgb(255,255,255); /* Old browsers */
    background: -moz-radial-gradient(center, ellipse cover,  rgb(255,255,255) 0%, rgb(224,242,241) 100%); /* FF3.6-15 */
    background: -webkit-radial-gradient(center, ellipse cover,  rgb(255,255,255) 0%,rgb(224,242,241) 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center,  rgb(255,255,255) 0%,rgb(224,242,241) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e0f2f1',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

    &:hover {
      .kc-card-back {
        transform: rotateY(-180deg);
        transform-style: preserve-3d;
        z-index: -1;
      }

      .kc-card-front {
        transform: rotateY(0deg);
        transform-style: preserve-3d;
        z-index: 10;
      }
    }

    &:after {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
    }
  }

  .kc-card-front {
    z-index: 10;
    box-shadow: 0px 2px 18px -8px rgba(0,0,0,0.4);

    &:after {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
    }
  }

  .kc-card-img {
    img {
      box-shadow: 0px 2px 16px -8px rgba(0,0,0,0.4);
    }
  }

  .kc-card-content {
    display: flex;
    flex-direction: column;
    position: relative;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 15px;
    padding-top: 10px;

    .kc-card-title {
      font-weight: 600;
      font-size: 1.2em;
      text-shadow: 1px 1px 6px #2b2b2b;
      // margin-bottom: 5px;
    }
  }

  .kc-card-back-header {
    margin: 0;
    margin-bottom: 10px;
    min-height: 50px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    -webkit-box-shadow: 0 4px 6px -6px #999;
    -moz-box-shadow: 0 4px 6px -6px #999;
    box-shadow: 0 4px 6px -6px #999;

    .kc-card-back-title {
      font-weight: 700;
      font-size: 1.0em;
      display: flex;
      align-items: center;
      text-shadow: 1px 1px 10px #636363;
    }
  }


}

.kc-card-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  border-top: 1px solid #dbdbdb;
  padding: 15px;
}

.kc-link-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  box-shadow: 0px 4px 18px -8px rgba(0,0,0,0.4);
}
</style>
