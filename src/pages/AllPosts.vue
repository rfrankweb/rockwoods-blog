<template>
	<Layout>
		<main>
			<section class="page-top">
				<h1>All Posts</h1>
			</section>
			<section class="posts">
				<PostLink
					v-for="(post, index) in posts"
					v-bind="post"
					:key="index"
				/>
			</section>
		</main>
	</Layout>
</template>

<script>
	import posts from '~/json/posts.json';

	import PostLink from '~/components/PostLink.vue';
	import DropDown from '~/components/DropDown.vue';

	export default {
		data() {
			return {
				posts: posts,
				sortBy: {
					options: ['Oldest', 'Newest'],
					current: 'Oldest',
					eventName: 'change-sort',
				},
				sortNew: true,
				vals: [1, 2, 3, 4, 5],
			};
		},
		computed: {
			postsNum() {
				return this.posts.length;
			},
		},
		methods: {
			changeSort(order) {
				if (order == 'Newest') this.sortNew = true;
				else this.sortNew = false;
			},
		},
		components: {
			PostLink,
			DropDown,
		},
		metaInfo: {
			title: 'All Posts',
		},
	};
</script>

<style>
	main {
		display: flex;
		flex-direction: column;

		align-items: center;
	}
	.page-top {
		width: 50rem;
		padding-top: 10vh;
	}
	.page-top h1 {
		font-size: 2rem;
	}

	.posts {
		width: 50rem;
	}
</style>
