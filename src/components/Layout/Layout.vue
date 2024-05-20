<template>
    <v-app id="inspire">
  
      <!-- SIDEBAR -->
  
      <v-navigation-drawer  v-model="drawer">
  
        <Sidebar flat /> <!-- SIDEBAR COMPONENTS -->
  
      </v-navigation-drawer>
  
      <!-- ............................. -->
  
      <!-- APPBAR -->
  
      <v-app-bar :elevation="2">
        <template v-slot:prepend>
       
        </template>
  <!-- 
        <v-app-bar-title>Section List</v-app-bar-title> -->
  
        <Appbar /> <!-- APPBAR COMPONENTS -->
  
      </v-app-bar>
  
      <!-- ............................. -->
  
  
      <!-- MAIN -->
  
      <v-main>
        <RouterView /> 
      </v-main>
  
      <!-- ............................. -->
  
    </v-app>
  
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const drawer = ref(null)
  </script>
  
  <script>
  export default {
    data: () => ({ drawer: null }),
  }
  
  </script>
  
  <style>
  
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
  
  * {
    font-family: "Poppins", sans-serif;
   
  }
  
  ::-webkit-scrollbar {
     display: none;
  }
  
  </style>