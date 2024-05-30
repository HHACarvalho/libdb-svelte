<script>
	import SearchHeader from '$lib/search-header.svelte';
	import TableDisplay from '$lib/table-display.svelte';

	export let data;
</script>

<SearchHeader pageTitle={'Members'} queryParam={'name'} />

<TableDisplay
	{data}
	dataHeaders={['Id', 'Name', 'Email', 'Address', 'Phone Number']}
	dataVariables={['id', 'name', 'email', 'address', 'phoneNumber']}
/>
