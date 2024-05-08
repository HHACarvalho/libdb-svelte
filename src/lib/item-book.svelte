<script>
    export let id;
    export let imageUrl;
    export let description;
    export let authorId;
    export let authorName;
</script>

<div class="item shadow">
    <div class="author-wrapper">
        <a href="/author/{authorId}">{authorName}</a>
    </div>
    <a href="/book/{id}">
        <div class="image-wrapper">
            <img src={imageUrl} alt={id} />
        </div>
        <div class="title-wrapper">
            <p>{description}</p>
        </div>
    </a>
</div>

<style>
    .item {
        width: 200px;
        background-color: var(--dark-blue);
        border-radius: 10px;
        transition: 0.2s;
    }

    .item:hover {
        transform: scale(1.05);
    }

    .author-wrapper {
        display: flex;
        justify-content: center;
        padding: 8px 16px;
    }

    .author-wrapper a {
        transition: 0.2s;
    }

    .author-wrapper a:hover {
        color: var(--light-purple);
    }

    .image-wrapper {
        width: 200px;
        height: 230px;
        display: flex;
        justify-content: center;
    }

    .image-wrapper img {
        height: 100%;
        border-radius: 10px;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
    }

    .title-wrapper {
        height: 2.6em;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
    }

    .title-wrapper p {
        line-height: 1.3em;
        text-align: center;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>
