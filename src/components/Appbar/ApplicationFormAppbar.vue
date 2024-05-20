<template v-slot:append>
  <div class="text-center">
    <v-menu open-on-click>
      <template v-slot:activator="{ props }">
        <v-btn
          style="margin-right: 10px"
          color="teal"
          v-bind="props"
          icon="mdi-plus"
        >
        </v-btn>
      </template>

      <v-card class="mx-auto pa-2" max-width="400">
        <v-list dense nav color="teal" grow>

          <v-subheader class="label">Application Forms</v-subheader>

          <div class="menus">

        
              <v-list-item
                prepend-icon="mdi-account-school-outline"
                title="Faculty Application"
                value="dashboard"
                router to ="/FacultyApplication"
              ></v-list-item>


            <v-list-item
              prepend-icon="mdi-account"
              title="Student Application"
              value="studentList"
              router to ="/StudentApplication"
            ></v-list-item>

            </div>

            </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>

</script>

<style scoped>

/* Existing styles */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

* {
  font-family: "Poppins", sans-serif;
 
}



::-webkit-scrollbar {
   display: none;
}

.label {
  font-size: 12px;
  margin-bottom: 30px;
  
}



</style>

