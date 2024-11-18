<script>
	// import ModalInfo from '$lib/modal-info.svelte';
	// import ModalBorrow from '$lib/modal-borrow.svelte';
	// import ModalEdit from '$lib/modal-edit.svelte';
	import ModalDelete from '$lib/modal-delete.svelte';

	export let modalList = [];

	// let isActiveModalInfo = false;
	// let isActiveModalBorrow = false;
	// let isActiveModalEdit = false;
	let isActiveModalDelete = false;

	// let dataModalInfo = null;
	// let dataModalBorrow = null;
	// let dataModalEdit = null;
	let dataModalDelete = null;

	export function openModalInfo(data) {
		dataModalInfo = data;
		isActiveModalInfo = true;
	}
	export function openModalBorrow(data) {
		dataModalBorrow = data;
		isActiveModalBorrow = true;
	}
	export function openModalEdit(data) {
		dataModalEdit = data;
		isActiveModalEdit = true;
	}
	export function openModalDelete(data) {
		dataModalDelete = data;
		isActiveModalDelete = true;
	}
</script>

{#if Array.isArray(modalList) && modalList.length > 0}
	<!-- <ModalInfo bind:isActive={isActiveModalInfo} bind:data={dataModalInfo} />

	{#if modalList.includes('borrow')}
		<ModalBorrow bind:isActive={isActiveModalBorrow} bind:data={dataModalBorrow} />
	{/if}

	{#if modalList.includes('edit')}
		<ModalEdit bind:isActive={isActiveModalEdit} bind:data={dataModalEdit} />
	{/if} -->

	{#if modalList.includes('delete')}
		<ModalDelete bind:isActive={isActiveModalDelete} bind:data={dataModalDelete} />
	{/if}
{/if}
