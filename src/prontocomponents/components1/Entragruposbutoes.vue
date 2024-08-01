<template>
  <h5>Button Addons</h5>
        <div class="p-grid p-fluid">
            <div class="p-col-12 p-md-4">
                <div class="p-inputgroup">
                    <Button label="Procurar"/>
                    <InputText placeholder="Senha"/>
                </div>
            </div>

            <div class="p-col-12 p-md-4">
                <div class="p-inputgroup">
                    <InputText placeholder="Senha"/>
                    <Button icon="pi pi-search" class="p-button-warning"/>
                </div>
            </div>

            <div class="p-col-12 p-md-4">
                <div class="p-inputgroup">
                    <Button icon="pi pi-check" class="p-button-success"/>
                    <InputText placeholder="Voto"/>
                    <Button icon="pi pi-times" class="p-button-danger"/>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>