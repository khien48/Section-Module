<template>



  <v-app id="inspire">
    <v-navigation-drawer width="300"  location="right" v-model="drawer">
 

        <br>
        <DashboardStudent />
  

    </v-navigation-drawer>

    <v-main>
<AllStudentList />
    </v-main>
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

