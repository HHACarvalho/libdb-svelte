<div class="sidebar">
    <div class="logo">LibDB</div>
    <nav>
        <a href="/">Books</a>
        <a href="/">Book Entries</a>
        <a href="/">Authors</a>
        <a href="/">Borrows</a>
        <a href="/">Members</a>
    </nav>
    <div class="options">Hugo Carvalho</div>
</div>

<style>
    .sidebar {
        display: flex;
        flex-direction: column;

        height: 100vh;
        max-width: 250px;
        background-color: var(--background-blue);
    }

    .logo {
        font-size: 4em;
        padding: 20px;
    }

    nav {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    nav a {
        padding: 15px;
        transition: 0.3s;
    }

    nav a:hover {
        background-color: var(--cyan);
        color: black;
    }

    .options {
        padding: 20px;
    }
</style>