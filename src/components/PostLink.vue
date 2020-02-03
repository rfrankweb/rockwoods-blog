<template>
	<a :href="'/posts/' + link" class="post-link">
		<img class="post-img" :src="'../post-img/' + thumbnail" alt="" />
		<h1 class="post-title">{{ name }}</h1>
		<p class="post-description">{{ description }}</p>
		<p class="post-time">Posted {{ postTime }} Ago</p>
		<p class="post-link-author">{{ author }}</p>
	</a>
</template>

<script>
	export default {
		name: 'PostLink',
		props: {
			name: String,
			author: String,
			description: String,
			link: String,
			thumbnail: String,
			postDate: String,
		},
		computed: {
			postTime() {
				let currentDate = new Date();
				let postDateExact = new Date(this.postDate);
				return this.timeDiff(currentDate, postDateExact);
			},
		},
		methods: {
			timeDiff(date1, date2) {
				let difference = date1 - date2;
				if (difference / 86400000 < 1 && difference / 3600000 >= 1)
					return Math.floor(difference / 3600000) + ' Hours';
				else if (difference / 3600000 < 1)
					return Math.floor(difference / 60000) + ' Minutes';
				else return Math.floor(difference / 86400000) + ' Days';
			},
		},
	};
</script>

<style>
	.post-link {
		display: grid;
		grid-template-columns: 22vw 10rem auto;
		grid-template-rows: 4rem auto;
		padding-top: 1rem;

		text-decoration: none;
		color: black;

	}
	.post-link:hover {
		background-color: #eee;
	}
	.post-link img {
		width: 20vw;
		height: 16vw;

		object-fit: cover;

		grid-column: 1 / 2;
		grid-row: 1 / 4;
		padding-bottom: 1rem;
	}
	h1.post-title {
		font-size: 1.5rem;
		grid-column: 2 / 4;
	}

	p.post-description {
		grid-column: 2 / 4;
	}
</style>
