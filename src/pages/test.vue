<template>
    <v-container>
      <v-data-table :items="items" :headers="headers"></v-data-table>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Name', value: 'name' },
          { text: 'Description', value: 'description' }
        ]
      };
    },
    created() {
      this.fetchItems();
    },
    methods: {
      async fetchItems() {
        try {
          const response = await this.$http.get('/item');
          this.items = response.data;
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      }
    }
  };
  </script>
  