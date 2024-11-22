<script>
	export let isActive;

	function closeModal() {
		isActive = false;
	}
</script>

{#if isActive}
	<button class="modal-background" on:click|stopPropagation={closeModal}>
		<button class="modal-content" on:click|stopPropagation={() => {}}>
			<slot></slot>
		</button>
	</button>
{/if}

<style>
	.modal-background {
		background: rgba(0, 0, 0, 0.75);
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal-content {
		background: var(--darker-blue);
		border: 5px solid var(--darkest-blue);
		border-radius: 10px;
		padding: 20px;
	}
</style>
