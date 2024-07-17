<script>
	import '$lib/global.css';
	import Sidebar from '$lib/sidebar.svelte';
</script>

<svelte:head>
	<title>LibDB</title>
</svelte:head>

<div>
	<Sidebar />
	<main>
		<slot />
	</main>
</div>

<style>
	div {
		display: flex;
	}

	main {
		padding: 40px;
		width: 100%;
	}
</style>
