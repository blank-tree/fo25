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
					<p>Fernando Obieta is a conceptual media artist and artistic researcher. His artistic work and research focus
						on the critique and reflection of (digital) media, artefacts, systems, services, and solutions and how they
						are contingent and situated. He is currently doing his PhD in <i>media theory</i> funded by the Swiss
						National Science Foundation's (SNSF) Doc.CH program. The dissertation "The Contingency of Design – a
						critique" is an investigation how a feminist ethics and morality of machines and their production could be
						constituted. To this end, he is working on a series of posits under the title "machines congregating", in
						which he examines how different machines perceive people and how people observe others (or themselves)
						through machines.
						<NuxtLink to="/about">more >>></NuxtLink>
					</p>
					<p>
						<b>currently / upcoming</b>
					</p>
					<ul>
						<li><i>i dropped the metal ball on the glass table and it broke. what is it?</i> in collaboration with Cynthia Schemidt – 03.–07.09.2025 at Ars Electronica Festival Linz AT
						</li>
					</ul>
				</div>
			</div>

			<pre>
				{{projects}}
			</pre>
			<!--
			<ProjectsList
				:projects="projects"
				class="half"
			/>
			-->
		</div>
	</div>
</template>

<script setup>
const {data: projects} = await useFetch(`https://be.fernando-obieta.com/wp-json/wp/v2/projects?per_page=100`, {
	transform: (data) => {
		return data.map(e => ({
			slug: e.slug,
			name: e.title.rendered,
			img: e.acf.gallery[0].url,
			year: e.date.substring(0, 4)
		}));
	}
});
// useHead({
// 	title: 'Fernando Obieta'
// });
</script>

<script>
export default {
	name: "index"
}
</script>

<style lang="scss" scoped>
#page-index {
	margin-bottom: 4rem;
}

#intro {
	margin-bottom: 2rem;
}

</style>
