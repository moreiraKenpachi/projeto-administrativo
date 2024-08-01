<template>
  <div class="p-field p-col-12 p-md-4">
                <label for="Phone">Celular</label>
                <InputMask mask="(99) 99999-9999" v-model="val4" placeholder="(99) 99999-9999" />
            </div>
</template>

<script>
export default {
    data() {
        return {            
            val4: null            
        }
    }
}
</script>

<style>

</style>