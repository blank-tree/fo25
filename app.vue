<template>
	<div id="main">
		<header>
			<div id="nav">
				<NuxtLink :to="`/`" class="home-nav-desktop">Fernando Obieta</NuxtLink>
				<NuxtLink :to="`/`" class="home-nav-mobile">FO</NuxtLink>
				<NuxtLink :to="`/about`">About</NuxtLink>
			</div>
		</header>
		<div id="slot">
			<NuxtPage />
		</div>
		<footer>
			<p
				v-html="`&copy; Fernando Obieta ${new Date().getFullYear()}`"
			/>
		</footer>
		<!-- We're all just wandering around in the dark -->
	</div>
</template>

<style lang="scss">
#main {
	padding-top: 3rem;

	#slot {
		min-height: calc(100vh - 7.5rem);
	}
}

header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: .75rem 1rem 0 1rem;
	//background-color: $color-bg;
	//z-index: -1;
	z-index: 1;

	#nav {
		display: flex;
		//align-content: flex-end;
		justify-content: space-between;
		//z-index: -1;

		user-select: none;

		min-width: 80%;
		padding-bottom: .5rem;
		border-bottom: 0.2rem solid white;

		.home-nav-mobile {
			display: none;
		}

		@media only screen and (max-width: 419px) {
			.home-nav-desktop {
				display: none;
			}

			.home-nav-mobile {
				display: block;
			}
		}

		a {
			font-weight: bold;
			text-decoration: none;
			color: $color-primary;
			font-size: 2rem;

			//mix-blend-mode: difference;
			//z-index: 5;
		}
	}
}

footer {
	p {
		text-align: right;
		font-family: $font-heading;
		font-size: .75rem;
	}
}
</style>