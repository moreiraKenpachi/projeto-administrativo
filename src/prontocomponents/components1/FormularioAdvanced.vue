<template>
  <div class="card">
            <h4>Cadastro de Usuário</h4>
            <div class="p-fluid p-formgrid p-grid">
                <div class="p-field p-col-12 p-md-6">
                    <label for="firstname6">Nome</label>
                    <InputText id="firstname6" type="text" />
                </div>
                <div class="p-field p-col-12 p-md-6">
                    <label for="lastname6">Sobrenome</label>
                    <InputText id="lastname6" type="text" />
                </div>
                <div class="p-field p-col-12">
                    <label for="address">Endereço</label>
                    <Textarea id="address" rows="4" />
                </div>
                <div class="p-field p-col-12 p-md-6">
                    <label for="city">Cidade</label>
                    <InputText id="city" type="text" />
                </div>
                <div class="p-field p-col-12 p-md-3">
                    <label for="state">Estado</label>
                    <Dropdown inputId="state" v-model="selectedState" :options="states" optionLabel="name" placeholder="Select" />
                </div>
                <div class="p-field p-col-12 p-md-3">
                    <label for="zip">CEP</label>
                    <InputText id="zip" type="text" />
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            selectedState: null,
            states: [
                {name: 'Arizona', code: 'Arizona'},
                {name: 'California', value: 'California'},
                {name: 'Florida', code: 'Florida'},
                {name: 'Ohio', code: 'Ohio'},
                {name: 'Washington', code: 'Washington'}
            ]     
        }
    }
}
</script>

<style>
    textarea {
    resize: none;
}
</style>