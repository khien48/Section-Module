<template>

<!-- Alert Message -->
     <v-alert
        class="overlay-alert"
        append
        width="500"
        text="Successfully added"
        title="Message"
        type="success"
        closable
        v-model="alert"
      ></v-alert>

      <!-- Main -->
  <v-card class="mx-auto" flat>
    <template v-slot:prepend>
      <v-card class="me-4" flat max-width="200">
        <v-text-field
          v-model="search"
          style="width: 300px"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-card>

      <SectionAdd @add-section="addSection" @projectAdded="handleProjectAdded" v-tooltip.focus.left="'Add'" />

    </template>
    <v-divider></v-divider>

    <v-virtual-scroll :items="filteredItems" height="520" item-height="48">
      <template v-slot:default="{ item, index }">
        <v-list-item>
          <h5>{{ item.Section }}</h5>
          <h6 class="greyH">{{ item.AdviserName }}</h6>

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
              v-tooltip.focus.top="'Open'"
              icon="mdi-open-in-new"
              variant="text"
              style="color: #1f636f"
              @click="navigateToStudentList"
            >
            </v-btn>

            <v-btn
              v-tooltip.focus.top="'Remove'"
              icon="mdi-delete-outline"
              variant="text"
              style="color: #df5151"
              @click="removelistData(index)"
            />
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
import SectionAdd from "@/components/Section-Components/SectionAdd.vue";

export default {
  components: {
    SectionAdd,

  },
  data() {

    return {
      alert: false,
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
 
  methods: {
    removelistData(index) {
      this.items.splice(index, 1);
    },
    addSection(newSection) {
      this.items.push(newSection);
    },
    navigateToStudentList() {
      // Your existing navigate function logic here
    },    handleProjectAdded() {
      this.alert=true
      setTimeout(() => {
        this.alert = false; // Hide the success message after 1 second
      }, 2000);
  },
},
};
</script>

<style scoped>
.greyH {
  color: rgb(89, 89, 89);
}

.overlay-alert {
  position: absolute;
    margin-right: 10px;
  top: 10px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  z-index: 1000; /* Ensure it appears on top */
}

</style>
