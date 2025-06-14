<template>
	<ul id="projects-list">
			<li
				v-for="project in projects"
			>
				<NuxtLink
					:to="project.path"
				>
					<h3
						v-html="project.name"
						:title="project.name"
					/>
					<span
						v-html="project.date.substring(0,4)"
					/>
				</NuxtLink>
				<div
					class="img"
					:style="{'background-image': `url(${project.gallery[0]})`}"
				/>
			</li>
	</ul>
</template>

<script>
export default {
	name: "ProjectsList",
	props: {
		projects: Array,
	}
}
</script>

<style lang="scss" scoped>
ul#projects-list {
	//margin-top: 4rem;
	text-align: right;
	list-style: none;
	padding-left: 0;
	margin: 1rem 0;

	user-select: none;

	li {
    padding: .5rem 1rem .5rem 0;
		&:first-child {
			padding-top: 0;
		}
		a {
			text-decoration: none;
			h2, h3, h4, h5, h6 {
				margin: 0;
				display: inline;
				padding: .5rem 1rem .5rem 0;

				// remove the 'jump' when hover and turning to italic, through placing the
				// same title hidden in italic next to the visible title
				&:after {
					display: inline-block;
					position: absolute;
					left: 0;
					top: 0;
					height: 0;
					width: 0;
					content: attr(title);
					visibility: hidden;
					font-style: italic;
				}
			}

			span {
				//font-size: 1.125rem;
			}
		}
		&:first-child {
			a {
				h2, h3, h4, h5, h6 {
					padding-top: 0;
				}
			}
		}

		.img {
			z-index: -1;
			display: none;
			position: fixed;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;

			//background-origin: content-box;
			//padding-top: 3.875rem; // 4rem - 2px
		}
		&:hover {
			a {
				h2, h3, h4, h5, h6 {
					font-style: italic;
				}
			}
			.img {
				display: block;
			}
		}
	}
}
</style>