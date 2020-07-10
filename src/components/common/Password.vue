<template>
    <label class="form__label form__password text-weight-medium">
        <p class="q-mt-lg q-mb-sm">Password:  <span v-if="prop_requried">*</span></p>
        <q-input
            filled
            v-model="pass"
            class="bg-grey-2 no-border form__field relative-position"
            placeholder="********"
            type="password"
            :required="prop_requried ? true : false">
            <a class="forgot_pass absolute-top-right" text-color="yellow" href="#">Forgot password?</a>
        </q-input>
    </label>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      pass: this.$store.getters['auth/GET_PASSWORD']
    }
  },
  methods: {
    ...mapMutations({
      set_pass: 'auth/SET_PASSWORD'
    })
  },
  watch: {
    pass: function (newPass) {
      this.set_pass(newPass)
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
    .form__field
        letter-spacing: 0.3rem
    .form__field input
        letter-sapcing: inherit
    .forgot_pass
        letter-spacing: 0.5px
        top: 50%
        transform: translateY(-50%)
        color: rgb(215,216,32)
</style>
