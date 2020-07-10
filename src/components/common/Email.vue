<template>
    <label class="form__label form__email text-weight-medium">
        <p class="q-mt-lg q-mb-sm">E-mail address: <span v-if="prop_requried">*</span> </p>
        <q-input
            filled
            v-model="email"
            class="bg-grey-2 no-border form__field"
            placeholder="Your email address (...@...)"
            type="email"
            :required="prop_requried ? true : false"/>
    </label>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      email: this.$store.getters['auth/GET_LOGIN']
    }
  },
  methods: {
    ...mapMutations({
      set_login: 'auth/SET_LOGIN'
    })
  },
  watch: {
    email: function (newlogin) {
      this.set_login(newlogin)
    }
  },
  props: {
    prop_requried: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
