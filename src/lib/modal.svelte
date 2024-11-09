<script>
	export let isActive;
	export let closeModal;

	function close() {
		closeModal();
	}
</script>

{#if isActive}
	<button class="modal" on:click={close}>
		<div class="modal-content">
			<slot></slot>
			<button on:click={close}>Close</button>
		</div>
	</button>
{/if}

<style>
	.modal {
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.75);
	}

	.modal-content {
		background: var(--darker-blue);
		border-radius: 8px;
		max-width: 500px;
		padding: 2rem;
	}

	.modal-content button {
		background-color: var(--background-blue);
		border-radius: 10px;
		font-size: 1em;
		margin-top: 20px;
		padding: 10px;
	}
</style>
