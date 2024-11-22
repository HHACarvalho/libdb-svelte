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
	<h2>{data.info}</h2>
	<div class="spacer_20"></div>
	<button on:click={close}>Close</button>
</Modal>
