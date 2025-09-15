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
						<li><a href="https://creatrices.ch/event/billboard_06" target="_blank">Rating Rating Rating: Ein feministischer Blick auf Technologie</a> – creatrices.ch BILLBOARD 06, panel discussion, 01.10.2025 18:30, L200, Langstrasse 200, 8005 Zürich</li>
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
