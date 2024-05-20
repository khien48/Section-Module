<template>


 

            <v-card flat width="430">
              
              
                <template v-slot:prepend>
                    <v-card class="me-4" flat max-width="300">
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

                    <SectionAdd />
                </template>
           
                <v-divider></v-divider>
             

                <v-col>

                    
                    <v-card
                        v-for="(item, i) in filteredItems"
                        :key="i"
                        :value="item"
                        style="margin-bottom: 10px"
                        link
                    >
                        <v-list>
                            <v-list-item>
                                <template v-slot:prepend>
                                    <v-col cols="4" md="1" sm="2" style="margin-right: 10px">
                                        <v-avatar size="50px">
                                            <v-img
                                                alt="Avatar"
                                                :src="item.ProfileImage"
                                            ></v-img>
                                        </v-avatar>
                                    </v-col>
                                </template>

                                <h5>{{ item.Section }}</h5>
                                <h5 class="greyH">{{ item.AdviserName }}</h5>

                                <template v-slot:append>
                                    <v-list-item>
                                        <h5 class="greyH">{{ item.gradelvl }}</h5>
                                    </v-list-item>

                                    <v-btn
                                        icon="mdi-open-in-new"
                                        variant="text"
                                        style="color: #1f636f"
                                    />
                                    <v-btn
                                        icon="mdi-delete-outline"
                                        variant="text"
                                        style="color: #df5151"
                                    />
                                </template>
                            </v-list-item>
                        </v-list>
                  
                    </v-card>
            
                </v-col>
       
            </v-card>
   
</template>

<script>
export default {
    data() {
        return {
            search: '',
            items: [
                {
                    ProfileImage: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                    Section: "RIZAL",
                    gradelvl: "GRADE 1",
                    AdviserName: `Reyes, Arreb M.`,
                    roomNo: `NB 122`,
                },
                     {
                    ProfileImage: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                    Section: "RIZAL",
                    gradelvl: "GRADE 1",
                    AdviserName: `Reyes, Arreb M.`,
                    roomNo: `NB 122`,
                },
                {
                    ProfileImage:
                        "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
                    Section: "MABINI",
                    gradelvl: "GRADE 2",
                    AdviserName: `Delos, Joan C.`,
                    roomNo: `AMS 32`,
                },
                {
                    ProfileImage: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                    Section: "MARCOS",
                    gradelvl: "GRADE 3",
                    AdviserName: `Cornejo, Jix A.`,
                    roomNo: `NB 102`,
                },
                {
                    ProfileImage: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                    Section: "LUNA",
                    gradelvl: "GRADE 4",
                    AdviserName: `Reyes, Arreb M.`,
                    roomNo: `JH 23`,
                },
            ],
        };
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => {
                return (
                    item.Section.toLowerCase().includes(this.search.toLowerCase()) ||
                    item.AdviserName.toLowerCase().includes(this.search.toLowerCase()) ||
                    item.gradelvl.toLowerCase().includes(this.search.toLowerCase())
                );
            });
        }
    }
};
</script>

<style scoped>
.greyH {
    color: rgb(89, 89, 89);
}
</style>
