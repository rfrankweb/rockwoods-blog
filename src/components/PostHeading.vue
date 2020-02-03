<template>
	<section class="post-header">
		<h1 class="post-title">
			{{ title }}
		</h1>
		<div class="post-info">
			<div class="post-author">
				<img :src="authorImg" :alt="author" />
				<a class="author-name" href="/about">By {{ author }}</a>
			</div>
			<p class="post-date">{{ postDate }}</p>
		</div>
		<p class="post-desc">
			{{ description }}
		</p>
		<g-image :src="postImage" :alt="imgAlt" class="banner-img" />
	</section>
</template>

<script>
	export default {
		name: 'PostHeading',
		props: {
			title: String,
			author: String,
			authorImg: String,
			postDate: String,
			description: String,
			postImage: String,
			imgAlt: String,
		},
	};
</script>

<style>
	.post-header {
		width: 50rem;
		height: 80vh;
	}

	.post-title {
		font-size: 2.5rem;
	}

	.post-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.post-author {
		display: flex;
		align-items: center;
		margin: 1rem 0;
	}
	.post-author img {
		width: 4rem;
		padding-right: 1rem;
	}
	.post-author a {
		color: black;
	}

	.post-desc {
		font-size: 1.3rem;

		color: #757575;

		padding-bottom: 1rem;
	}

	.banner-img {
		width: 100%;
		height: 45vh;

		object-fit: cover;
	}
</style>
