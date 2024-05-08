<script>
    export let pageTitle;
</script>

<div class="header">
    <a href="/" class="return"><img src="return.png" alt="return" /></a>
    <h1>{pageTitle}</h1>
    <input type="text" name="authors" id="authors" placeholder="Search" />
    <a href="/">Advanced Search</a>
</div>

<style>
    .header {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .return {
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
</style>
