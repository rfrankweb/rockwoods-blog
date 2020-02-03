<template>
	<Layout>
		<section class="home-banner-new" v-if="newUser">
			<div class="cta-card">
				<h1>The Best Developer You Can Be, Straight To Your Inbox.</h1>
				<h2>Sign Up and Start Improving Your Skills Today!</h2>
				<form action="/">
					<input
						class="email-input"
						type="text"
						placeholder="Your email here"
					/>
					<input class="email-submit" type="submit" />
				</form>
			</div>
		</section>
		<section class="home-banner-return" v-else>
			<h1>I make great websites for businesses like yours!</h1>
			<a href="/">My Work</a>
			<a href="/">Get in Touch</a>
		</section>
		<div class="posts-container">
			<section class="latest-posts">
				<h1>Latest Posts from Rockwood</h1>
				<PostLink v-for="(post, index) in posts" v-bind="post" :key="index" />
			</section>
		</div>
		<section class="cta">
			<div class="cta-container">
				<h1>I make great websites for businesses like yours!</h1>
				<div class="button-container">
					<a href="/" class="button">My Work</a>
					<a href="/" class="button button-secondary">Get in Touch</a>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script>
	import posts from '~/json/posts.json';

	import PostLink from '~/components/PostLink.vue';

	export default {
		data() {
			return {
				posts: posts,
			};
		},
		methods: {
			getCookie(cname) {
				var name = cname + '=';
				var decodedCookie = decodeURIComponent(document.cookie);
				var ca = decodedCookie.split(';');
				for (var i = 0; i < ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0) == ' ') {
						c = c.substring(1);
					}
					if (c.indexOf(name) == 0) {
						return c.substring(name.length, c.length);
					}
				}
				return '';
			},
			setCookie() {
				document.cookie = 'userStatus = returning';
			},
		},
		computed: {
			newUser() {
				let returning = 'returning';
				if (this.getCookie('userStatus') != '') return false;
				else return true;
			},
		},
		components: {
			PostLink,
		},
		metaInfo: {
			title: 'Becoming a Better Developer',
		},
	};
</script>

<style>
	* {
		transition: all 0.2s ease;
	}
	.home-banner-new {
		width: 100vw;
		height: 55vh;
		background: linear-gradient(180deg, #134074 0%, #5992d2 100%);

		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.cta-card {
		height: 40vh;
		padding: 7vh 10vh;
		width: 60vw;
	}
	.cta-card h1 {
		font-size: 3rem;
		color: white;
		font-weight: 700;
	}
	.cta-card h2 {
		padding-top: 1rem;
		font-size: 2rem;
		color: white;
	}

	input {
		border: none;
		border-radius: 5px 0 0 5px;

		padding: 1.5rem;
		margin-top: 2rem;
		box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.05);

		font-size: 1rem;
		font-family: 'Open Sans', sans-serif;
	}
	input.email-input {
		width: 40vw;
	}
	input.email-submit {
		border-radius: 0 5px 5px 0;

		background-color: #134074;
		color: white;
	}

	.posts-container {
		width: 100vw;

		display: flex;
		justify-content: center;
	}
	.latest-posts {
		margin: 5vh;
		max-width: 60rem;
	}
	.cta {
		width: 100vw;
		height: 35vh;

		background: linear-gradient(121.78deg, #30651E 0%, #27568D 100%);
		color: white;

		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.cta-container {
		max-width: 50rem;
	}
	.cta h1 {
		padding-top: 2rem;

		font-size: 2rem;
	}

	.button {
		background-color: white;
		padding: 15px 30px;
		
		text-decoration: none;
		color: black;

		width: 7rem;

		text-align: center;
		border: 2px solid white;

		border-radius: 5px;

		box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.05);
	}
	
	.button-secondary {
		background: none;
		color: white;
	}

	.button:hover {
		background: none;
		color: white;
	}
	.button-secondary:hover {
		background: white;
		color: black;
	}

	.button-container {
		display: flex;
		width: 100%;

		justify-content: space-around;
		margin-top: 3rem;
	}
</style>
