<template>
 
  <v-container>
      <v-card class="me-4" flat max-width="200">
        <v-text-field
          v-model="search"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-card>

    </v-container>


    <v-divider></v-divider>

    <v-virtual-scroll :items="filteredItems" height="400" item-height="48">

      <template v-slot:default="{ item}">

    
        <v-list-item>
        
       <v-vol> 
          <h5>{{ item.Section }}</h5>
          <h6 class="greyH">{{ item.AdviserName }}</h6>
        </v-vol>

          <template v-slot:prepend>


            <v-col>
              <v-avatar size="30px">
                <v-img alt="Avatar" :src="item.ProfileImage"></v-img>
              </v-avatar>
            </v-col>
          </template>
        
          
          <template v-slot:append>
            <v-list-item>
              <h5 class="greyH">{{ item.gradelvl }}</h5>
            </v-list-item>

            <v-btn
              v-tooltip.focus.top="'Transfer'"
              icon="mdi-file-move-outline"
              variant="text"
              style="color: #1f636f"
              @click="navigateToStudentList"
            >
            </v-btn>

        
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </template>
    </v-virtual-scroll>

</template>

<script>


export default {
  components: {

  },
  data() {
    return {
      search: "",
      items: [
        {
          ProfileImage: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
          Section: "MABINI",
          gradelvl: "GRADE 2",
          AdviserName: "Delos, Joan C.",
          roomNo: "AMS 32",
        },
        {
          ProfileImage: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          Section: "RIZAL",
          gradelvl: "GRADE 1",
          AdviserName: "Reyes, Arreb M.",
          roomNo: "NB 122",
        },
        {
          ProfileImage: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
          Section: "MABINI",
          gradelvl: "GRADE 2",
          AdviserName: "Delos, Joan C.",
          roomNo: "AMS 32",
        },
        {
          ProfileImage: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          Section: "RIZAL",
          gradelvl: "GRADE 1",
          AdviserName: "Reyes, Arreb M.",
          roomNo: "NB 122",
        },
        {
          ProfileImage: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          Section: "LUNA",
          gradelvl: "GRADE 4",
          AdviserName: "Reyes, Arreb M.",
          roomNo: "JH 23",
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        return (
          item.Section.toLowerCase().includes(this.search.toLowerCase()) ||
          item.AdviserName.toLowerCase().includes(this.search.toLowerCase()) ||
          item.gradelvl.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },

};
</script>

<style scoped>
.greyH {
  color: rgb(89, 89, 89);
}
</style>
