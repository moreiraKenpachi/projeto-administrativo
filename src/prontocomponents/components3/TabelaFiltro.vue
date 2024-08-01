<template>
  <div class="card">
            <h4>Filtragem</h4>
            <p>Filtros para avaliação.</p>
            <DataTable :value="customers1" :paginator="true" class="p-datatable-customers" showGridlines :rows="10"
                dataKey="id" v-model:filters="filters1" filterDisplay="menu" :loading="loading1" responsiveLayout="scroll"
                :globalFilterFields="['name','country.name','representative.name','balance','status']">
                <template #header>
                    <div class="p-d-flex p-jc-between">
                        <Button type="button" icon="pi pi-filter-slash" label="Limpar" class="p-button-outlined" @click="clearFilter1()"/>
                        <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters1['global'].value" placeholder="Palavra-chave" />
                        </span>
                    </div>
                </template>
                <template #empty>
                    No customers found.
                </template>
                <template #loading>
                    Loading customers data. Please wait.
                </template>
                <Column field="name" header="Nome" style="min-width:12rem">
                    <template #body="{data}">
                        {{data.name}}
                    </template>
                    <template #filter="{filterModel}">
                        <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                    </template>
                </Column>
                <Column header="Países" filterField="country.name" style="min-width:12rem">
                    <template #body="{data}">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
                        <span class="image-text">{{data.country.name}}</span>
                    </template>
                    <template #filter="{filterModel}">
                        <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
                    </template>
                    <template #filterclear="{filterCallback}">
                        <Button type="button" icon="pi pi-times" @click="filterCallback()" class="p-button-secondary"></Button>
                    </template>
                    <template #filterapply="{filterCallback}">
                        <Button type="button" icon="pi pi-check" @click="filterCallback()" class="p-button-success"></Button>
                    </template>
                    <template #filterfooter>
                        <div class="p-px-3 p-pt-0 p-pb-3 p-text-center p-text-bold">Customized Buttons</div>
                    </template>
                </Column>
                <Column header="Colaboradores" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{'width':'14rem'}" style="min-width:14rem">
                    <template #body="{data}">
                        <img :alt="data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                        <span class="image-text">{{data.representative.name}}</span>
                    </template>
                    <template #filter="{filterModel}">
                        <div class="p-mb-3 p-text-bold">Agent Picker</div>
                        <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="p-multiselect-representative-option">
                                    <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                                    <span class="image-text">{{slotProps.option.name}}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column header="Datas" filterField="date" dataType="date" style="min-width:10rem">
                    <template #body="{data}">
                        {{formatDate(data.date)}}
                    </template>
                    <template #filter="{filterModel}">
                        <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                    </template>
                </Column>
                <Column header="Saldo" filterField="balance" dataType="numeric" style="min-width:10rem">
                    <template #body="{data}">
                        {{formatCurrency(data.balance)}}
                    </template>
                    <template #filter="{filterModel}">
                        <InputNumber v-model="filterModel.value" mode="currency" currency="BRL" locale="en-US" />
                    </template>
                </Column>
                <Column field="Status" header="Status" :filterMenuStyle="{'width':'14rem'}" style="min-width:12rem">
                    <template #body="{data}">
                        <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                    </template>
                    <template #filter="{filterModel}">
                        <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                            <template #value="slotProps">
                                <span :class="'customer-badge status-' + slotProps.value" v-if="slotProps.value">{{slotProps.value}}</span>
                                <span v-else>{{slotProps.placeholder}}</span>
                            </template>
                            <template #option="slotProps">
                                <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <Column field="activity" header="Atividade" :showFilterMatchModes="false" style="min-width:12rem">
                    <template #body="{data}">
                        <ProgressBar :value="data.activity" :showValue="false"></ProgressBar>
                    </template>
                    <template #filter={filterModel}>
                        <Slider v-model="filterModel.value" range class="p-m-3"></Slider>
                        <div class="p-d-flex p-ai-center p-jc-between p-px-2">
                            <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                            <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                        </div>
                    </template>
                </Column>
                <Column field="verified" header="Avaliado" dataType="boolean" bodyClass="p-text-center" style="min-width:8rem">
                    <template #body="{data}">
                        <i class="pi" :class="{'true-icon pi-check-circle': data.verified, 'false-icon pi-times-circle': !data.verified}"></i>
                    </template>
                    <template #filter={filterModel}>
                        <TriStateCheckbox v-model="filterModel.value" />
                    </template>
                </Column>
            </DataTable>
        </div>
</template>

<script>

import CustomerService from '../../service/CustomerService';
import {FilterMatchMode,FilterOperator} from 'primevue/api';

export default {
    data() {
        return {
            customers1: null,            
            filters1: null,            
            representatives: [
                {name: "Amy Elsner", image: 'amyelsner.png'},
                {name: "Anna Fali", image: 'annafali.png'},
                {name: "Asiya Javayant", image: 'asiyajavayant.png'},
                {name: "Bernardo Dominic", image: 'bernardodominic.png'},
                {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
                {name: "Ioni Bowcher", image: 'ionibowcher.png'},
                {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
                {name: "Onyama Limba", image: 'onyamalimba.png'},
                {name: "Stephen Shaw", image: 'stephenshaw.png'},
                {name: "XuXue Feng", image: 'xuxuefeng.png'}
            ],
            statuses: [
                'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
            ],
            loading1: true            
        }
    },
    created() {
        this.customerService = new CustomerService();
        this.initFilters1();
    },
    mounted() {
        this.customerService.getCustomersLarge().then(data => {
            this.customers1 = data; 
            this.loading1 = false;
            this.customers1.forEach(customer => customer.date = new Date(customer.date));
        });       
    },
    methods: {
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'BRL'});
        },
        clearFilter1() {
            this.initFilters1();
        },
        initFilters1() {
            this.filters1 = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'representative': {value: null, matchMode: FilterMatchMode.IN},
                'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
                'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
                'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
            }
        }
    }
}
</script>

<style>



</style>