<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-white text-black">

        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    header
        height: 80px
        min-height: 80px
        max-height: 80px
</style>
