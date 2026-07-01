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
            <li>"messages" exhibition and talk – SHIFTING REGIMES, CHANGING ORDERS – 25.–26.06.2026, Goethe University Frankfurt/Main</li>
            <li>«zu Zombiewissen» – contribution to the publication «Exemplar #2» – June 2026 – <a href="https://www.hslu.ch/de-ch/design-film-kunst/aktuelles/veroeffentlichungen/exemplar/" target="_blank">HSLU DFK Exemplar Reihe</a></li>
            <li>machines congregating – excerpts #6+#7 – 06.09.2026, 17:00–19:00, Lagerplatz 18, 8400 Winterthur</li>
            <li>group exhibition "knowledge beyond" – 15.–29.10.2026, HSLU DFK, Nylsuisseplatz 1, 6020 Luzern</li>
            <li>duo exhibition "Visarte Zürich – FRISCH" – 29.10.–01.11.2026, Kabinett Visarte, Schoffelgasse 10, 8001 Zürich</li>
            <li>machines congregating – excerpt #8 – 15.11.2026, 17:00–19:00, Lagerplatz 18, 8400 Winterthur</li>
            <li>solo exhibition – 29.04.–27.06.2027, Benzeholz, Benzeholzplatz 2, 6045 Meggen</li>
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
