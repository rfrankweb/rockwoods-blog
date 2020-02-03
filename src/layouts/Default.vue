<template>
	<div class="layout">
		<header>
			<div class="logo">
				<g-image src="~/img/logo.svg" alt="Logo" />
				<div class="logo__text">
					<p>Rockwood Frank</p>
					<p>Web Designer</p>
				</div>
			</div>
			<nav>
				<a href="/">Home</a>
				<a href="https://portfolio.rfrankweb.com">My Work</a>
				<a href="https://portfolio.rfrankweb.com/#contact">Contact</a>
				<a href="/all-posts">All Posts</a>
				<a href="/about">About</a>
			</nav>
		</header>
		<slot />
		<footer>
			<div class="footer__col">
				<p class="heading">Rockwood Frank</p>
				<p class="heading">Web Designer</p>
				<hr />
				<a href="mailto:rockwood@rfrankweb.com">rockwood@rfrankweb.com</a>
				<br />
				<a href="tel:4069051456">(406) 905 1456</a>
			</div>
			<div class="footer__col">
				<a href="/">Home</a>
				<br />
				<a href="https://portfolio.rfrankweb.com">My Work</a>
				<br />
				<a href="https://portfolio.rfrankweb.com/#contact">Contact</a>
				<br />
				<a href="posts">All Posts</a>
				<br />
				<a href="about">About</a>
			</div>
			<div class="footer__col">
				<a class="social" href="?"
					><g-image src="~/img/linkedin.svg" alt="LinkedIn"
				/></a>
				<br />
				<a class="social" href="?"
					><g-image src="~/img/github.svg" alt="Github"
				/></a>
				<br />
				<a class="social" href="?"
					><g-image src="~/img/behance.svg" alt="Behance"
				/></a>
				<br />
				<a class="social" href="?"
					><g-image src="~/img/twitter.svg" alt="Twitter"
				/></a>
			</div>
		</footer>
	</div>
</template>

<static-query>
	query { metadata { siteName } }
</static-query>

<style>
	* {
		margin: 0;
		padding: 0;
		transition: all 0.2s ease;
	}
	body {
		font-family: 'Open Sans', sans-serif;
	}
	header {
		width: 100vw;
		height: 10vh;

		border-bottom: 1px solid #757575;

		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.logo {
		display: flex;
		font-family: 'Courier Prime', monospace;
		align-items: center;
	}
	.logo img {
		padding: 0 1vw;
	}
	.logo p {
		font-size: 1.2rem;
		margin: 0;
		color: #134074;
	}

	nav {
		width: 40vw;
		display: flex;
		justify-content: space-between;
		margin: 0 5vw;

	}
	nav a {
		text-decoration: none;
		color: black;
	}
	nav a:hover {
		color: #707070;
	}

	footer {
		display: flex;
		justify-content: center;
		height: 40vh;

		padding-top: 3rem;
		background-color: #134074;
		color: white;
	}
	.footer__col {
		padding-left: 3vw;
		width: 30vw;
	}
	.footer__col .heading {
		font-size: 1.5rem;
		font-family: 'Courier Prime', monospace;
		margin: 0;
	}
	.footer__col a {
		text-decoration: none;
		color: #cee4ff;
	}
	.footer__col a:hover {
		color: white;
	}
	.footer__col img {
		width: 2rem;
	}
</style>
