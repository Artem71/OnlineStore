<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="(product, i) in promoProducts"
              :key="i"
              :src="product.imageSrc"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          v-for="(product, i) in products"
          :key="i"
          xs12
          sm6
          md4
        >
          <v-card
            class="mx-auto"
            max-width="400"
          >
          <router-link
            :atia-label="product.title"
            :to="'/product/' + product.id"
          >
            <v-img
              class="white--text align-end"
              height="350px"
              :src="product.imageSrc"
            ></v-img>
          </router-link>
            
            <v-card-title
                primary-title
              >
              <h3 class="card_heading heading">{{ product.title}}</h3>
              <div class="card_describe">
                <p class="subheading">{{ product.description.substring(0, 60) }}</p>
                <p class="subheading card_price">
                  <span class="title">Price: </span>${{ product.price }}
                </p>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                dark
                color="light-blue darken-4"
                text
                rounded
                outlined
                :to="'/product/' + product.id"
              >
                Description
              </v-btn>

              <v-btn
                color="light-blue darken-4"
                dark
                rounded
              >
                Add to card
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  
</template>

<script>
export default {
  computed: {
    promoProducts() {
      return this.$store.getters.promoProducts
    },
    products() {
      return this.$store.getters.products
    }
  }
}
</script>

<style scoped>
  .card_heading {
    font-weight: bold;
    word-wrap: break-word;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .card_describe {
    margin-top: auto;
    padding-left: 1rem;
  }
  .card_price {
    color: #c00f1b;
    font-size: 18px;
  }
</style>