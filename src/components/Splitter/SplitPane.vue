<template>



  <v-app>

   
    <div class="card">
      <Splitter style="height: 620px" class="mb-5" >
        <SplitterPanel class=" align-items-center justify-content-center" :size="25" :minSize="10"> 
          <SectionList />            <!-- this the component that have button that when it click it will display the component in the side -->

        </SplitterPanel>
        <SplitterPanel class=" align-items-center justify-content-center">
        
        
    <v-main>

 
    </v-main>

        </SplitterPanel>
      </Splitter>
      
    </div>
  </v-app>
</template>

