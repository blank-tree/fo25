<script setup lang="ts">
const route = useRoute()
const {data: project} = await useAsyncData(route.path, () => {
	return queryCollection('content').path(route.path).first()
})
</script>

<template>
	<div id="page-project">
		<Head>
			<Title>{{project.name}} – Fernando Obieta</Title>
			<Meta name="description" :content="`${project.name} – ${project.date.substring(0,4)}`"/>
		</Head>
		<div id="page-layout">
			<div class="half">
				<img
					:src="project.gallery[0]"
					:alt="project.name"
					class="project-img"
				>
				<div
					class="video"
					v-if="project.video"
					v-html="project.video"
				/>
			</div>

			<div class="half">
				<div class="text">
					<p class="date">
				<span
					v-html="project.date.substring(0,4)"
				/>
					</p>
					<h1
						v-html="project.name"
					/>
					<!--			<h2-->
					<!--				v-html="project.context"-->
					<!--			/>-->
					<div>
						<ContentRenderer :value="project"/>
					</div>
					<div
						class="exhibitions"
						v-if="project.exhibitions"
					>
						<h3
							v-html="`Exhibitions`"
						/>
						<ul>
							<li
								v-for="exhibition in project.exhibitions"
							>
								<span
									v-if="exhibition.link"
								>
									<span>
										<a
											:href="exhibition.link"
											target="_blank"
											v-html="exhibition.text"
										/>
										{{ ' – ' + exhibition.time }}
									</span>
								</span>
								<span
									v-else
									v-html="exhibition.text + ' – ' + exhibition.time"
								/>
							</li>
						</ul>
					</div>

					<div
						class="links"
						v-if="project.links"
					>
						<h3
							v-html="`Links`"
						/>
						<ul>
							<li
								v-for="link in project.links"
							>
								<a
									:href="link.url"
									target="_blank"
									v-html="link.name"
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<Gallery
			v-if="project.gallery.length > 1"
			:gallery="project.gallery"
		/>
	</div>
</template>

<style scoped lang="scss">
.project-img {
	//max-width: $width-main-img;
	width: 100%;
	margin-top: 1rem;
}

h1 {
	margin-top: 0;
	text-align: left;
}

h2, h3, h4, h5, h6, .date {
	margin-bottom: 0;
}

.video {
	margin-top: 1rem;
	width: 100%;
}

.links, .exhibitions {
	margin-bottom: 2rem;
}
</style>