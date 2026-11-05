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
            <li>roaming – groub exhibition «Erbleichen» – 06.–27.11.2026 – NEU!, Untere Vogelsangstrasse 4, 8400 Winterthur</li>
            <li>these burning bridges aren't as bright as I had hoped – keynote, GLAMhack 2026 – 12.11.2026 – Campo Winterthur</li>
            <li>machines congregating – excerpt #8 – 21.02.2027, 17:00–19:00, Lagerplatz 18, 8400 Winterthur</li>
            <li>on communicating communication – solo exhibition – 29.04.–27.06.2027, Benzeholz, Benzeholzplatz 2, 6045 Meggen</li>
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
