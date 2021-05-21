<template>
	<div class="d-flex">
		<div class="flex w-full bg-white shadow rounded">
			<input class="relative w-full px-2 py-1 rounded-r focus:shadow-outline" autocomplete="off" type="text" name="search" placeholder="Search…" :value="value" @input="$emit('input', $event.target.value)">
		</div>
	</div>
</template>

<script>
import Dropdown from '@/Shared/Dropdown'

export default {
	components: {
		Dropdown,
	},
	props: {
		value: String,
		maxWidth: {
			type: Number,
			default: 300,
		},
	},
}
</script>
