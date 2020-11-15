<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create New Product</h1>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="mb-3"
        >
          <v-text-field
            name="title"
            label="Title"
            type="text"
            :rules="[v => !!v || 'Title is require']"
            v-model="title"
            required
          ></v-text-field>
          <v-text-field
            type="text"
            name="vendor"
            label="Vendor product"
            v-model="vendor"
          ></v-text-field>
           <v-text-field
            type="text"
            name="color"
            label="Color product"
            v-model="color"
          ></v-text-field>
          <v-text-field
            type="text"
            name="material"
            label="Material product"
            v-model="material"
          ></v-text-field>
          <v-text-field
            type="text"
            name="price"
            label="Price product"
            :rules="[v => !!v || 'Price is require']"
            required
            v-model="price"
          ></v-text-field>
          <v-text-field
            type="text"
            name="description"
            label="Description product"
            multi-line
            v-model="description"
          ></v-text-field>
        </v-form>
        <v-layout class="mb-3">
          <v-flex xs12>
            <v-btn
              class="warning"
            >
              Upload
              <v-icon class="ml-5">mdi-cloud-upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src="" height="200px">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-switch
              color="primary"
              v-model="promo"
              label="Add to Promo?"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              class="success"
              @click="createProduct"
            >Create Product</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: '',
    vendor: '',
    color: '',
    material: '',
    price: 0,
    description: '',
    promo: false,
    valid: false
  }),
  methods: {
    createProduct() {
      if (this.$refs.form.validate()) {
        const product = {
          title: this.title,
          vendor: this.vendor,
          color: this.color,
          material: this.material,
          price: this.price,
          description: this.description,
          promo: this.promo
        }
        console.log(product)
      }
    }
  }
}
</script>