<div class="sidebar">
	<div class="logo"><a href="/">LibDB</a></div>
	<nav>
		<a data-sveltekit-reload href="/author">Authors</a>
		<a data-sveltekit-reload href="/book">Books</a>
		<a data-sveltekit-reload href="/member">Members</a>
	</nav>
	<div class="options">
		<img src="/account.png" alt="account" />
		Hugo Carvalho
	</div>
</div>

<style>
	.sidebar {
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		background-color: var(--background-blue);
		height: 100vh;
	}

	.logo {
		padding: 20px;
	}

	.logo a {
		font-size: 4em;
		font-weight: 500;
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-grow: 1;
	}

	nav a {
		padding: 15px;
		text-align: center;
		transition: 0.3s;
	}

	nav a:hover {
		background-color: var(--light-purple);
		color: black;
	}

	.options {
		padding: 20px;
		display: flex;
		align-items: center;
	}

	.options img {
		height: 35px;
		margin-right: 10px;
	}
</style>
