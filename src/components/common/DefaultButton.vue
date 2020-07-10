<template>
    <q-btn
        type="button"
        :style="{'background-color': prop_color}"
        :text-color="prop_font"
        :label="prop_text"
        class="form__submit q-my-lg q-py-none no-shadow" />
</template>

<script>
export default {
  props: {
    prop_color: {
      type: String,
      required: true
    },
    prop_font: {
      type: String,
      default: 'white'
    },
    prop_text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
    .form__submit
        width: 100%
        text-transform: none
        font-size: 18px
    @media (max-width: 600px)
        .form__submit
            font-size: 14px
</style>
