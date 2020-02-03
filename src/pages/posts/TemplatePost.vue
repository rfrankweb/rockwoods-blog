<template>
	<Layout>
		<main>
			<PostHeading v-bind="description" />
			<div class="post">
				<p class="post-paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
					viverra vitae sem ultrices at vitae ultrices. Sed convallis pretium,
					sit urna. Urna, urna sed phasellus convallis. In pretium tellus
					integer vitae ullamcorper. Nibh lacus, fames pulvinar a mattis vitae.
					Tellus commodo, turpis pulvinar praesent nibh arcu euismod vulputate.
					Fringilla habitant nisi nunc etiam malesuada pellentesque. Adipiscing
					dui, netus urna laoreet odio magna. Laoreet ultrices et nunc eu
					egestas consequat, sit rutrum nulla. Nunc pulvinar sit quis metus, in
					morbi. Nunc, diam vivamus lectus ipsum. Cras eget mi pharetra ut in
					facilisi scelerisque ipsum.
				</p>
			</div>
		</main>
	</Layout>
</template>

<script>
	import PostHeading from '~/components/PostHeading.vue';

	import author from '~/img/rockwood.jpg';

	export default {
		data() {
			return {
				description: {
					title: 'Hello, World!',
					author: 'Rockwood Frank',
					authorImg: author,
					postDate: '4 April 2020',
					description:
						'This is just an example post. Please fill me with good content!',
					postImage: '../post-img/example-banner.jpg',
					imgAlt: 'Lorem Ipsum Have a Nice Day.',
				},
			};
		},
		components: {
			PostHeading,
		},
		metaInfo: {
			title: 'Post Template',
		},
	};
</script>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 3rem 0;
	}

	.post {
		font-family: 'Roboto Slab', serif;
		width: 50rem;
	}

	.post a {
		color: black;
	}

	.post img {
		width: 20rem;
	}
</style>
