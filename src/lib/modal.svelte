<script>
	import { fade, scale } from 'svelte/transition';

	export let isActive;

	function closeModal() {
		isActive = false;
	}
</script>

{#if isActive}
	<button
		aria-label="Cancel"
		class="modal_background"
		on:click|stopPropagation={closeModal}
		transition:fade={{ duration: 200, easing: (t) => t * t }}
	>
	</button>
	<button
		class="modal_content standard_border"
		on:click|stopPropagation={() => {}}
		transition:scale={{ duration: 200, easing: (t) => t * t }}
	>
		<slot></slot>
	</button>
{/if}

<style>
	.modal_background {
		background: rgba(0, 0, 0, 0.75);
		position: absolute;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
		z-index: 1;
	}

	.modal_content {
		background: var(--darker-blue);
		border-radius: 10px;
		position: absolute;
		left: 50%;
		top: 50%;
		padding: 20px;
		transform: translate(-50%, -50%);
		z-index: 2;
	}
</style>
