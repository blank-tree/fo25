<template>
	<div id="page-index">
		<div id="page-layout">
			<div class="half">
				<div class="text">
					<ContentRenderer v-if="home" :value="home" />
					<p>
						<b>currently / upcoming</b>
					</p>
					<ul>
						<li><i>i dropped the metal ball on the glass table and it broke. what is it?</i> in collaboration with Cynthia Schemidt – 03.–07.09.2025 at Ars Electronica Festival Linz AT
						</li>
					</ul>
				</div>
			</div>

			<!--
			<pre>
				{{projects}}
			</pre>
			<ProjectsList
				:projects="projects"
				class="half"
			/>
			-->
		</div>
	</div>
</template>

<script lang="ts" setup>
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

</script>

<style lang="scss" scoped>
#page-index {
	margin-bottom: 4rem;
}

#intro {
	margin-bottom: 2rem;
}

</style>
