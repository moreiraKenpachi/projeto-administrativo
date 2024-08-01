<template>
  <DataTable :value="sales" responsiveLayout="scroll">
        <ColumnGroup type="header">
            <Row>
                <Column header="Produtos" :rowspan="3" />
                <Column header="Taxa de Vendas" :colspan="4" />
            </Row>
            <Row>
                <Column header="Vendas" :colspan="2" />
                <Column header="Lucros" :colspan="2" />
            </Row>
            <Row>
                <Column header="Ano Passado" :sortable="true" field="lastYearSale"/>
                <Column header="Ano Atual" :sortable="true" field="thisYearSale"/>
                <Column header="Ano Passado" :sortable="true" field="lastYearProfit"/>
                <Column header="Ano Atual" :sortable="true" field="thisYearProfit"/>
            </Row>
        </ColumnGroup>
        <Column field="product" />
        <Column field="lastYearSale">
            <template #body="slotProps">
                {{slotProps.data.lastYearSale}}%
            </template>
        </Column>
        <Column field="thisYearSale">
            <template #body="slotProps">
                {{slotProps.data.thisYearSale}}%
            </template>
        </Column>
        <Column field="lastYearProfit">
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.lastYearProfit)}}
            </template>
        </Column>
        <Column field="thisYearProfit">
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.thisYearProfit)}}
            </template>
        </Column>
        <ColumnGroup type="footer">
            <Row>
                <Column footer="Totais:" :colspan="3" footerStyle="text-align:right"/>
                <Column :footer="lastYearTotal" />
                <Column :footer="thisYearTotal" />
            </Row>
        </ColumnGroup>
    </DataTable>
</template>

<script>
export default {
    data() {
        return {
            sales: null
        }
    },
    created() {
        this.sales = [
            {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
            {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
            {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
            {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
            {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
            {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
            {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
            {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
            {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
            {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
        ];
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'BRL'});
        }
    },
    computed: {
        lastYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.lastYearProfit;
            }

            return this.formatCurrency(total);
        },
        thisYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.thisYearProfit;
            }

            return this.formatCurrency(total);
        }
    }
}

</script>

<style>

</style>