<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text-secondary mb-3">Orders</h1>
        <v-list
          subheader
          two-line
          flat
        >
          <v-list-item-group
            v-model="settings"
            multiple
          >
  
            <v-list-item
              v-for="(order, i) in orders"
              :key="i"
            >
                <v-list-item-action>
                  <v-checkbox
                    color="success"
                    @change="markDown(order)"
                    :input-value="order.done"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn
                  class="primary"
                  :to="'/product/' + order.productId"
                  >
                  Open
                  </v-btn>
                </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    orders: [
      {
        id: 'test',
        name: 'Artem',
        phone: '22-22-22',
        productId: '1',
        done: false
      }
    ]
  }),
  methods: {
    markDown(order) {
      order.done = true
    }
  }
}
</script>