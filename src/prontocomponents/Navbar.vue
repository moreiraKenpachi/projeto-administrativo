<template>
  <TabMenu :model="items" />
  <router-view/>
</template>

<script>
export default {
    data() {
		return {
			items: [
                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
                {label: 'Rankking', icon: 'pi pi-fw pi-calendar', to: '/rankking'},
                {label: 'Filtros', icon: 'pi pi-fw pi-pencil', to: '/filtros'},
                {label: 'Mercadorias', icon: 'pi pi-fw pi-file', to: '/mercadorias'},
                {label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/settings'}
            ]
		}
	}
}
</script>

<style>

</style>