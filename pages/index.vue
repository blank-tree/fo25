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
						<li><i>Anna's room</i> – 22.08.–06.09.2025 Visarte Einsichten 2025 at Kupper Modern, Zürich</li>
						<li><i>Anna's room</i> – 31.08.2025 17:00–19:00, "machines congregating excerpts" at Blinker, Kraftfeld, Winterthur</li>
						<li><i>i dropped the metal ball on the glass table and it broke. what is it?</i> in collaboration with Cynthia Schemidt – 03.–07.09.2025 at <a href="https://ars.electronica.art/panic/en/view/i-dropped-the-metal-ball-on-the-glass-table-and-it-broke-what-is-it-20f38ddb450c8192adb4e6c2c137b9a1/" target="_blank">Ars Electronica Festival Linz AT</a>
						</li>
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
