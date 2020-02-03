<template>
	<select id="dropdown" name="select-box" v-model="selected" v-on:change="$emit('change-select', selected)">
		<option :value="option" v-for="option in options">{{ option }}</option>
	</select>
</template>

<script>
	export default {
		name: 'DropDown',
		data() {
			return {
				selected: this.options[0],
			};
		},
		props: {
			current: String,
			options: Array,
			eventName: String,
		},
		methods: {
			selection() {
				this.$emit(this.eventName);
			},
		},
	};
</script>

<style>
	.dropdown {
		display: inline-block;
	}
	.menu {
		display: none;
	}
	.dropdown:hover .menu {
		display: block;
		position: relative;
		bottom: 1.4rem;
		height: 1.5rem;
		background: #ccc;
	}
</style>
