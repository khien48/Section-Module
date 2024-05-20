<template>
  <div class="text-center pa-4">
    <v-dialog v-model="dialog" max-width="550" persistent>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" style="color: #1f636f" flat icon="mdi-plus">
        </v-btn>
      </template>

      <v-card title="Create Section">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="6">
              <div class="Subholder">Grade Level</div>
              <v-combobox
                v-model="newSection.gradelvl"
                variant="outlined"
                clearable
                density="compact"
                :items="['1', '2', '3', '4', '5', '6']"
              ></v-combobox>
            </v-col>

            <v-col cols="12" md="6">
              <div class="Subholder">Section Name</div>
              <v-text-field
                v-model="newSection.Section"
                density="compact"
                placeholder="Section Name"
                variant="outlined"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <div class="Subholder">Advisor's Name</div>
              <v-combobox
                v-model="newSection.AdviserName"
                variant="outlined"
                clearable
                density="compact"
                :items="[
                  'Reyes, Joan B.',
                  'Lee, Kim C.',
                  'Cador Shena B.',
                  'Ramon, John M.',
                  'Moreno, Isko A.',
                  'Marcos, Money C.',
                ]"
              ></v-combobox>
            </v-col>

            <v-col cols="12" md="6">
              <div class="Subholder">Room</div>
              <v-combobox
                v-model="newSection.roomNo"
                variant="outlined"
                clearable
                density="compact"
                :items="[
                  'NB 102',
                  'NB 240',
                  'AMS 43',
                  'AMS 1',
                  'JH 28',
                  'JH 62',
                ]"
              ></v-combobox>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            style="margin-bottom: 20px"
            text="Close"
            variant="plain"
            @click="dialog = false"
          ></v-btn>
          <v-btn
            style="margin-right: 20px; margin-bottom: 20px"
            color="teal"
            text="Save"
            variant="tonal"
            @click="saveSection"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,

    newSection: {
      ProfileImage: "https://i.pinimg.com/564x/60/07/0e/60070ed889df308cbe80253e8c36b3a3.jpg", // or any default image
      Section: "",
      gradelvl: "",
      AdviserName: "",
      roomNo: "",
    },
  }),
  methods: {
    saveSection() {
  // Convert the "Section" to uppercase
  this.newSection.Section = this.newSection.Section.toUpperCase();

  // Concatenate "GRADE" with the grade level
  this.newSection.gradelvl = "GRADE " + this.newSection.gradelvl;

  // Emit the add-section event
  this.$emit('add-section', this.newSection);

  // Close the dialog and reset the form
  this.dialog = false;
  this.resetForm();

  this.$emit('projectAdded')
},

    resetForm() {
      this.newSection = {
        ProfileImage: "https://cdn.vuetifyjs.com/images/lists/1.jpg", // or any default image
        Section: "",
        gradelvl: "",
        AdviserName: "",
        roomNo: "",
      };
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

.Subholder {
  font-size: 12px;
}
</style>
