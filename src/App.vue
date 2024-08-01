<template>
   <Navbar/>
</template>

<script>
import Navbar from './prontocomponents/Navbar.vue'

export default {
    name: 'App',
    components: {
      Navbar
    }
}

</script>

<style>
::v-deep(.tabmenudemo-content) {
    padding: 2rem 1rem;
}
</style>
