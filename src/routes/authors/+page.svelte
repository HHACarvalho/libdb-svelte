<script>
    import Item from "$lib/item.svelte";

    export let data;
    console.log(data);
</script>

<div class="header">
    <a href="/"><img src="return.png" alt="return"></a>
    <h1>Authors</h1>
    <input type="text" name="authors" id="authors" placeholder="Search">
</div>

<div class="item-display">
    {#if data.error}
        <h1>{data.error}</h1>
    {:else}
        {#each data.authorArray.data.list as obj}
            <Item id={obj.id} imageUrl={obj.imageUrl} description={obj.name} />
        {/each}
    {/if}
</div>

<div class="load shadow">
    <p>Load more</p>
    <img src="add.png" alt="add">
</div>

<style>
    .header {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    a {
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        background-color: var(--dark-blue);
    }

    img {
        height: 1em;
    }

    input {
        height: 38px;
        padding: 0 20px;
        background-color: var(--dark-blue);
        border-radius: 30px;
    }

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
        padding: 10px;
        gap: 10px;
    }

    img {
        height: 1em;
    }
</style>