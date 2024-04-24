<script>
    import SearchHeader from "$lib/search-header.svelte";
    import Item from "$lib/item-book.svelte";

    export let data;
</script>

<SearchHeader pageTitle={"Books"} />

<div class="item-display">
    {#if data.error}
        <h1>{data.error}</h1>
    {:else}
        {#each data.array as obj}
            <Item
                id={obj.id}
                imageUrl={obj.imageUrl}
                description={obj.title}
                authorId={obj.author.id}
                authorName={obj.author.name}
            />
        {/each}
    {/if}
</div>

<div class="load shadow">
    <p>Load more</p>
    <img src="add.png" alt="add" />
</div>

<style>
    .item-display {
        margin-top: 25px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .load {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc((7 * 200px) + (6 * 20px));
        background-color: var(--dark-blue);
        border-radius: 10px;
        margin-top: 20px;
        padding: 10px 0;
        gap: 10px;
    }

    img {
        height: 1em;
    }
</style>
