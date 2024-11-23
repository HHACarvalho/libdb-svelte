<script>
	import Modal from '$lib/modal.svelte';

	export let isActive;
	export let data;

	function close() {
		isActive = false;
		data = null;
	}
</script>

<Modal bind:isActive>
	{#if data.error}
		<h2>Failed to execute task</h2>
		<div class="spacer_10"></div>
		<h4>{data.error}</h4>
	{:else}
		<h3>{data.info}</h3>
	{/if}
	<div class="spacer_20"></div>
	<button on:click={close}>Close</button>
</Modal>
