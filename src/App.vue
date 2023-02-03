<template>
  <v-app>
    <v-main>
      <v-card class="mx-auto main-card" max-width="644">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <h1>{{this.$i18n.messages.en.profileForm.name }} </h1>
            </v-col>
            <v-col cols="12" md="6">
            </v-col>
            <v-col cols="12" md="6">
              <profileForm ref="profileForm"/>
            </v-col>
            <v-col cols="12" md="6" class="mt-4">
              <v-card class="mx-auto pa-4" height="244">
               <ImageComponent ref="profileImage"/>
              </v-card>
            </v-col>
            <v-col cols="12" md="10" sm="0"></v-col>
            <v-col cols="12" md="2" sm="12" class="text-center">
              <v-btn color="success" @click="saveProfileForm" :disabled="valid">
                {{this.$i18n.messages.en.profileForm.save }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import profileForm from './components/profileForm.vue'
import ImageComponent from './components/ImageComponent.vue'
import store from './store'

export default {
  name: 'App',

  components: {
    profileForm,
    ImageComponent
  },
  computed: {
    locale: function () {
      return this.$i18n.messages;
    },
  },
  data: () => ({
    profileObject:{},
    imageArray:[],
    valid:false,

  }),
  methods:{
    saveProfileForm(){
      if(this.$refs.profileForm.valid){
        this.profileObject = this.$refs.profileForm.profileForm;
        this.profileObject.files = this.$refs.profileImage.files;
        store.commit("saveProfileForm", this.profileObject);
        console.log("profile Form data sent in store", store.getters.getProfileForm);
        alert("profile Form data sent in store");
      }
    }
  }
}
</script>

<style>
.main-card {
  margin-top: 100px;
}
</style>