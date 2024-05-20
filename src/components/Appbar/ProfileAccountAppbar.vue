<template>

  <!-- OVERVIEW PROFILE -->

  <v-list>
    <v-list-item
      style="margin-right: 10px"
      prepend-avatar="https://fthmb.tqn.com/bzCTJWqcE4bZCuV_XXuCJw6zfMo=/2121x1414/filters:fill(auto,1)/GettyImages-548929135-59f24924d088c000104ed810.jpg"
      subtitle="Faculty"
      title="Joan Reyes"
    >

     <!-- MENU DROPDOWN -->

     <template v-slot:append>

<v-menu open-on-click>
  <template v-slot:activator="{ props }">
    <v-btn
    
      icon="mdi-menu-down"
      size="small"
      variant="text"
      v-bind="props"
    ></v-btn>
  </template>

  <v-list >
    <v-card   flat class="mx-auto pa-2" max-width="400">
        <v-list  dense nav color="teal" grow>

      <v-subheader class="label">Menu</v-subheader>

          <div class="menus">

        
              <v-list-item
            
                prepend-icon="mdi-account"
                title="Account"
                value="account"
                router to ="/s"
              ></v-list-item>


            <v-list-item
              prepend-icon="mdi-cog"
              title="Setting"
              value="setting"
              router to ="/s"
            ></v-list-item>

            <v-list-item
              prepend-icon="mdi-help-circle-outline"
              title="Help"
              value="help"
              router to ="/s"
            ></v-list-item>

            <v-list-item
              prepend-icon="mdi-flag"
              title="Send Feedback"
              value="sendFeedback"
              router to ="/s"
            ></v-list-item>


            </div>

            </v-list>
      </v-card>
  </v-list>


</v-menu>

</template>


   
      <!-- ............................. -->
      
    </v-list-item>
  </v-list>

  
</template>




<style scoped>
.label {
  font-size: 12px;
  margin-bottom: 30px;

}

</style>