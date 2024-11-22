<script>
	import '../app.css';
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
	}
</style>
