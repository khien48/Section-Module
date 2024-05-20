<template v-slot:append>
  
    <div class="text-center">
      <v-menu open-on-click>
        <template v-slot:activator="{ props }">
          <v-btn
            style="margin-right: 10px"
            color="teal"
            v-bind="props"
            icon="mdi-bell"
          >
          </v-btn>
        </template>
  
        <v-card
      class="mx-auto pa-2"
      max-width="300"
    >
      <v-list>
       
  
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
          rounded="xl"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
  
          <v-list-item-title v-text="item.text"></v-list-item-title>
  
        </v-list-item>
      </v-list>
    </v-card>
  
      </v-menu>
    </div>
  
      </template>
  
  
  <script>
    export default {
      data: () => ({
        items: [
        //   { text: 'Faculty Application', icon: 'mdi-account' },
        //   { text: 'Student Application', icon: 'mdi-account-school-outline' },
          
        ],
      }),
    }
  </script>