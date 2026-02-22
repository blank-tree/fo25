<template>
	<div id="page-index">
		<Head>
			<Title>Fernando Obieta</Title>
			<Meta name="description"
			      :content="`Fernando Obieta is a conceptual media artist and artistic researcher`"/>
		</Head>
		<div id="page-layout">
			<div class="half">
				<div class="text">
					<ContentRenderer v-if="home" :value="home" />
					<p>
						<b>currently / upcoming</b>
					</p>
					<ul>
						<li>machines congregating – excerpt #5 – 15.03.2026, 17:00–19:00, Lagerplatz 18, 8400 Winterthur</li>
            <li>machines congregating – excerpts #6+#7 – 06.09.2026, 17:00–19:00, Lagerplatz 18, 8400 Winterthur</li>
            <li>machines congregating – excerpt #8 – 15.11.2026, 17:00–19:00, Lagerplatz 18, 8400 Winterthur</li>
					</ul>
				</div>
			</div>

			<ProjectsList
				:projects="projects"
				class="half"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { data: home } = await useAsyncData(() => queryCollection('content')
	.path('/')
	.first())
const { data: projects } = await useAsyncData(() => queryCollection('content')
	.where('project', '=', true)
	.order('date', 'DESC')
	.all())

</script>

<style lang="scss" scoped>
#page-index {
	margin-bottom: 4rem;
}

#intro {
	margin-bottom: 2rem;
}

</style>
