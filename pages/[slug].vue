<script setup lang="ts">
const slug = useRoute().params.slug
console.log(slug)
const { data: project } = await useAsyncData(() => queryCollection('content').path(`/${slug}`).first())
</script>

<template>
	<div>
		<ContentRenderer :value="project" />
	</div>
</template>

<style scoped lang="scss">

</style>