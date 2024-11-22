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
		background: var(--darkest-blue);
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
		flex-grow: 1;
		justify-content: center;
	}

	nav a {
		padding: 15px;
		text-align: center;
		transition: 0.3s;
	}

	nav a:hover {
		background: var(--light-purple);
		color: black;
	}

	.options {
		display: flex;
		align-items: center;
		padding: 20px;
	}

	.options img {
		height: 35px;
		margin-right: 10px;
	}
</style>
