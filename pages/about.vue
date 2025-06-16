<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection('content').path(route.path).first()
})
</script>

<template>
	<div id="page-about">
		<Head>
			<Title>About Fernando Obieta</Title>
			<Meta name="description" :content="`Fernando Obieta is a conceptual media artist and artistic researcher.`"/>
		</Head>
		<div id="page-layout">
			<div class="half">
				<ContentRenderer :value="page" class="text"/>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>