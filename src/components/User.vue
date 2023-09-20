<script setup>
import {useRoute} from 'vue-router'
</script>

<template>
    <h1>This is User page</h1>
    <h4 v-if="$route.params.id">User id = {{ $route.params.id }}</h4>
    <h4 v-else>User not specified (use :  /id/profile)</h4>


    <router-view/>
</template>

<style scoped>

</style>