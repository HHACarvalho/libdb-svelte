<script>
	export let id;
	export let imageUrl;
	export let description;
</script>

<div class="item shadow">
	<a href="/author/{id}">
		<div class="image-wrapper">
			<img src={imageUrl} alt={id} />
		</div>
		<div class="text-wrapper">
			<p>{description}</p>
		</div>
	</a>
</div>

<style>
	.item {
		width: 200px;
		height: calc(230px + 2.6em + 16px);
		border-radius: 10px;
		transition: 0.2s;
	}

	.item:hover {
		transform: scale(1.05);
	}

	.image-wrapper {
		width: 200px;
		height: 230px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px 10px 0 0;
	}

	.text-wrapper {
		height: 2.6em;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--dark-blue);
		border-radius: 0 0 10px 10px;
		padding: 8px 0;
	}

	p {
		max-height: 2.6em;
		line-height: 1.3em;
		padding: 0 16px;
		text-align: center;

		display: -webkit-box;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
