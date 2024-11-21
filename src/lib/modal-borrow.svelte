<script>
	import { page } from '$app/stores';
	import { apiRequest, formatDateToString } from '$lib/utils';
	import Modal from '$lib/modal.svelte';

	export let isActive;
	export let data;
	let memberId;

	async function confirm() {
		const url = $page.url.origin + '/api/';
		const today = new Date();
		const future = new Date();
		future.setDate(today.getDate() + 21);

		const req = await apiRequest(url, 'POST', {
			entityType: data.entityType,
			entityId: null,
			body: {
				bookEntryId: data.entity.id,
				memberId: memberId,
				borrowDate: formatDateToString(today),
				dueDate: formatDateToString(future),
			},
		});

		cancel();

		if (req.error) {
			//TODO: Display an error message
			console.error(req.error);
		} else {
			//TODO: Reloading makes it impossible to display a successful message
			location.reload();
		}
	}

	function cancel() {
		isActive = false;
		data = null;
	}
</script>

<Modal bind:isActive>
	<h1>Borrow</h1>
	<div class="spacer-25"></div>
	<h3>Member ID:</h3>
	<div class="spacer-25"></div>
	<input type="text" bind:value={memberId} />
	<div class="spacer-25"></div>
	<button on:click={confirm}>Confirm</button>
	<button on:click={cancel}>Cancel</button>
</Modal>

<style>
	button {
		background-color: var(--background-blue);
		border-radius: 10px;
		font-size: 1em;
		padding: 10px;
	}

	input {
		background-color: var(--background-blue);
		border-radius: 30px;
		padding: 10px 20px;
	}

	input::placeholder {
		color: rgb(225, 225, 225);
	}
</style>
