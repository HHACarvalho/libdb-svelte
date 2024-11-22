<script>
	export let id;
	export let imageUrl;
	export let description;
	export let authorId;
	export let authorName;
</script>

<div class="item shadow">
	<div class="author_wrapper">
		<a href="/author/{authorId}">{authorName}</a>
	</div>
	<a href="/book/{id}">
		<div class="image_wrapper">
			<img src={imageUrl} alt={id} />
		</div>
		<div class="title_wrapper">
			<p>{description}</p>
		</div>
	</a>
</div>

<style>
	.item {
		width: 185px;
		background: var(--dark-blue);
		border-radius: 10px;
		transition: 0.2s;
	}

	.item:hover {
		transform: scale(1.05);
	}

	.author_wrapper {
		display: flex;
		justify-content: center;
		padding: 8px 16px;
	}

	.image_wrapper {
		height: 215px;
		display: flex;
		justify-content: center;
	}

	.image_wrapper img {
		height: 100%;
		border-radius: 10px;
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
	}

	.title_wrapper {
		height: 2.6em;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px 16px;
	}

	.title_wrapper p {
		line-height: 1.3em;
		text-align: center;

		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>
