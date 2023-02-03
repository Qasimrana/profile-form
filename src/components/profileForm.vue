<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field  v-model="profileForm.firstName" :rules="nameRules" :counter="10" :label="`${this.$i18n.messages.en.profileForm.firstName}`" required
            dense></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field v-model="profileForm.lastName" :rules="nameRules" :counter="10" :label="`${this.$i18n.messages.en.profileForm.lastName}`" required
            dense></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field v-model="profileForm.email" :rules="emailRules" :label="`${this.$i18n.messages.en.profileForm.email}`" required dense></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: 'profileForm',
  props: {
    profileform: {
      type: Object
    },
  },
  computed: {
    locale: function () {
      return this.$i18n.locale;
    },
  },
  data() {
    return {
      valid: false,
      profileForm: {
        firstName: "",
        lastName: '',
        email: '',
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
}
</script>