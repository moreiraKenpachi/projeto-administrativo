<template>
  <div class="card">
        <DataView :value="products" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
			<template #header>
                <div class="p-grid p-nogutter">
                    <div class="p-col-6" style="text-align: left">
                        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Classificar por preço" @change="onSortChange($event)"/>
                    </div>
                    <div class="p-col-6" style="text-align: right">
                        <DataViewLayoutOptions v-model="layout" />
                    </div>
                </div>
			</template>

			<template #list="slotProps">
				<div class="p-col-12">
					<div class="product-list-item">
						<img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name"/>
						<div class="product-list-detail">
							<div class="product-name">{{slotProps.data.name}}</div>
							<div class="product-description">{{slotProps.data.description}}</div>
							<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
							<i class="pi pi-tag product-category-icon"></i><span class="product-category">{{slotProps.data.category}}</span>
						</div>
						<div class="product-list-action">
							<span class="product-price">R${{slotProps.data.price}}</span>
							<Button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
							<span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
						</div>
					</div>
				</div>
			</template>

			<template #grid="slotProps">
				<div class="p-col-12 p-md-4">
					<div class="product-grid-item card">
						<div class="product-grid-item-top">
							<div>
								<i class="pi pi-tag product-category-icon"></i>
								<span class="product-category">{{slotProps.data.category}}</span>
							</div>
							<span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
						</div>
						<div class="product-grid-item-content">
							<img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name"/>
							<div class="product-name">{{slotProps.data.name}}</div>
							<div class="product-description">{{slotProps.data.description}}</div>
							<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
						</div>
						<div class="product-grid-item-bottom">
							<span class="product-price">R${{slotProps.data.price}}</span>
							<Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
						</div>
					</div>
				</div>
			</template>
		</DataView>
	</div>
</template>

<script>

import ProductService from '../../service/ProductService'

export default {
    data() {
        return {
            products: null,
            layout: 'grid',
            sortKey: null,
            sortOrder: null,
            sortField: null,
            sortOptions: [
                {label: 'Preço alto a baixo', value: '!price'},
                {label: 'Preço baixo a alto', value: 'price'},
            ]
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProducts().then(data => this.products = data);
    },
    methods: {
        onSortChange(event){
            const value = event.value.value;
            const sortValue = event.value;

            if (value.indexOf('!') === 0) {
                this.sortOrder = -1;
                this.sortField = value.substring(1, value.length);
                this.sortKey = sortValue;
            }
            else {
                this.sortOrder = 1;
                this.sortField = value;
                this.sortKey = sortValue;
            }
        }
    }
}
</script>

<style>


.card {
    background: #ffffff;
    padding: 2rem;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
}

.p-dropdown {
    width: 14rem;
    font-weight: normal;
}

.product-name {
	font-size: 1.5rem;
	font-weight: 700;
}

.product-description {
	margin: 0 0 1rem 0;
}

.product-category-icon {
	vertical-align: middle;
	margin-right: .5rem;
}

.product-category {
	font-weight: 600;
	vertical-align: middle;
}

</style>