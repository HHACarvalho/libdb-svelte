<script>
	export let id;
	export let imageUrl;
	export let description;
</script>

<div class="item shadow">
	<a href="/author/{id}">
		<div class="image_wrapper">
			<img src={imageUrl} alt={id} />
		</div>
		<div class="text_wrapper">
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

	.image_wrapper {
		height: 215px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px 10px 0 0;
	}

	.text_wrapper {
		height: 2.6em;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px 16px;
	}

	p {
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
