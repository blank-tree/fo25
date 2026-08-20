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
            <li>"messages" exhibition and talk "on machines congregating" – SHIFTING REGIMES, CHANGING ORDERS – 25.–26.06.2026, Goethe University Frankfurt/Main</li>
            <li>«zu Zombiewissen» – contribution to the publication «Exemplar #2» – June 2026 – <a href="https://www.hslu.ch/de-ch/design-film-kunst/aktuelles/veroeffentlichungen/exemplar/" target="_blank">HSLU DFK Exemplar Reihe</a></li>
            <li>no Artificial Intelligence – group exhibition "Visarte Zürich – Einsichten" – 29.08.–12.09.2026, Kupper Modern, Zwinglistrasse 10, 8004 Zürich</li>
            <li>machines congregating – excerpts #6+#7 – 06.09.2026, 17:00–19:00, Lagerplatz 18, 8400 Winterthur</li>
            <li>i dropped the metal ball on the glass table and it broke. what is it? & messages – group exhibition "knowledge beyond" – 15.–29.10.2026, HSLU DFK, Nylsuisseplatz 1, 6020 Luzern</li>
            <li>roaming & messages – duo exhibition "Visarte Zürich – FRISCH" – 29.10.–01.11.2026, Kabinett Visarte, Schoffelgasse 10, 8001 Zürich</li>
            <li>messages – groub exhibition «Erbleichen» – 06.–27.11.2026 – NEU!, Untere Vogelsangstrasse 4, 8400 Winterthur</li>
            <li>these burning bridges aren't as bright as I had hoped – keynote, GLAMhack 2026 – 12.11.2026 – Campo Winterthur</li>
            <li>machines congregating – excerpt #8 – 21.02.2027, 17:00–19:00, Lagerplatz 18, 8400 Winterthur</li>
            <li>on communicating / on communication – solo exhibition – 29.04.–27.06.2027, Benzeholz, Benzeholzplatz 2, 6045 Meggen</li>
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
