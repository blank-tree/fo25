<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection('content').path(route.path).first()
})
</script>

<template>
	<div>
		<pre>{{page}}</pre>
		<!-- <ContentRenderer :value="project" /> -->
	</div>
</template>

<style scoped lang="scss">

</style>