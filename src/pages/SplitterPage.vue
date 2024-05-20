<template>
  <v-app>
    <v-container>
      <!-- Alert Component -->


      <!-- Main Content -->
      <div class="card">
        <Splitter style="height: 620px" class="mb-5">
          <SplitterPanel class="align-items-center justify-content-center" :size="25" :minSize="10">
            <SectionList />
          </SplitterPanel>
          <SplitterPanel class="align-items-center justify-content-center">
            <v-main>
              <StudentList />
            </v-main>
          </SplitterPanel>
        </Splitter>
      </div>
    </v-container>
  </v-app>
</template>

<script setup>
</script>

<style scoped>

</style>
