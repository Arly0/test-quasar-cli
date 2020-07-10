<template>
    <q-page class="flex flex-center login row">
        <div class="login__container q-pa-xl rounded-borders-10 bg-white text-black col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-12">
            <h3 class="q-my-xl text-weight-medium text-center login__title">Login</h3>
                <q-form
                    ref="loginForm"
                    @submit.prevent="submitHandler"
                    class="login__form">

                    <EmailField :prop_requried="true" />

                    <PasswordField :prop_required="true" />

                    <SBtn :prop_text="'Sign In'" :prop_color="'rgb(235, 235, 6)'" :prop_font="'white'" />
                </q-form>
                <div class="login__gotoregister text-weight-medium text-center">
                    Dont`t have an account yet?
                    <router-link to="/register" class="">Register</router-link>
                </div>
                <div class="row q-mt-md justify-between">
                <div class="col-5">
                    <CBtn :prop_text="'Sign in with Facebook'" :prop_color="'blue'" :prop_font="'white'" />
                </div>
                <div class="col-5">
                    <CBtn :prop_text="'Sign in with Google'" :prop_color="'red'" :prop_font="'white'" />
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import EmailField from 'components/common/Email'
import PasswordField from 'components/common/Password'
import SBtn from 'components/common/SubmitButton.vue'
import CBtn from 'components/common/DefaultButton'

export default {
  components: {
    EmailField,
    PasswordField,
    SBtn,
    CBtn
  },
  methods: {
    submitHandler () {
      // send to VUEX in action
      const login = this.$store.getters['auth/GET_LOGIN']
      const password = this.$store.getters['auth/GET_PASSWORD']
      this.$store.dispatch('auth/login', { login, password })
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass" scoped>
    .login__container
        -webkit-box-shadow: 5px 5px 20px -10px rgba(0,0,0,0.75)
        -moz-box-shadow: 5px 5px 20px -10px rgba(0,0,0,0.75)
        box-shadow: 5px 5px 20px -10px rgba(0,0,0,0.75)
        max-width: 630px
        min-width: 596px
    .form__label
        font-size: 16px
        letter-spacing: 0.04rem
    .login__gotoregister
        color: #262020
        & a
            color: #262020;
    @media (max-width: 600px)
        .login__container
            box-shadow: none
            min-width: 0px
            padding-top: 20px
        .login__title
            margin: 0px
</style>
