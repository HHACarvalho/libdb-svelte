<script>
	export let isActive;

	function closeModal() {
		isActive = false;
	}
</script>

{#if isActive}
	<button class="modal_background" on:click|stopPropagation={closeModal}>
		<button class="modal_content standard_border" on:click|stopPropagation={() => {}}>
			<slot></slot>
		</button>
	</button>
{/if}

<style>
	.modal_background {
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.75);
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
	}

	.modal_content {
		background: var(--darker-blue);
		border-radius: 10px;
		padding: 20px;
	}
</style>
