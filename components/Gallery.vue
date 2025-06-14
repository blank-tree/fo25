<template>
<div
	class="gallery"
	v-if="gallery && gallery.length > 0"
>
	<div
		class="gallery-item"
		v-for="(item, itemId) in gallery"
		:class="{'open' : openedGalleryItem === itemId}"
		@click="openGalleryItem(itemId)"
	>
		<div
			class="img"
			:style="{'background-image': `url(${item})`}"
		/>
		<div
			class="img-enlarged"
			:style="{'background-image': `url(${item})`}"
		/>
	</div>
	<div
		class="nav-gallery"
		v-show="openedGalleryItem !== -1"
	>
		<div
			class="nav-el close"
			v-html="`X`"
			@click="closeOpenGalleryItem"
		/>
		<div
			class="move"
			v-if="gallery.length > 1"
		>
			<div
				class="nav-el back"
				v-html="`<`"
				@click="galleryNavBack"
			/>
			<div
				class="nav-el forward"
				v-html="`>`"
				@click="galleryNavForward"
			/>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: "Gallery",
	props: {
		gallery: Array,
	},
	data() {
		return {
			openedGalleryItem: -1,
			keydown: false,
			eventslistenersAdded: false,
		}
	},
	methods: {
		openGalleryItem(id) {
			this.openedGalleryItem = id;
			this.addEventListeners();
		},
		closeOpenGalleryItem() {
			this.openedGalleryItem = -1;
		},
		galleryNavBack() {
			if (this.openedGalleryItem === 0) {
				this.openedGalleryItem = this.gallery.length - 1;
			} else {
				this.openedGalleryItem--;
			}
		},
		galleryNavForward() {
			if (this.openedGalleryItem === this.gallery.length - 1) {
				this.openedGalleryItem = 0;
			} else {
				this.openedGalleryItem++;
			}
		},
		addEventListeners() {
			if (!this.eventslistenersAdded) {
				window.addEventListener("keydown", (e) => {
					if (this.keydown || this.openedGalleryItem === -1) return;
					this.keydown = true;
					switch(e.key) {
						case 'ArrowRight':
							this.galleryNavForward();
							break;
						case 'ArrowLeft':
							this.galleryNavBack();
							break;
						case 'Escape':
							this.closeOpenGalleryItem();
							break;
						case 'ArrowDown':
							e.preventDefault();
							break;
						case 'ArrowUp':
							e.preventDefault();
							break;
					}
				}, false);
				window.addEventListener('keyup', (e) => {
					this.keydown = false;
				});
				this.eventslistenersAdded = true;
			}
		}
	},
}
</script>

<style lang="scss" scoped>
.gallery {
	margin-top: 4rem;
	margin-bottom: 4rem;

	margin-left: -.5rem;
	margin-right: -.5rem;

	display: flex;
	flex-wrap: wrap;

	.gallery-item {
		padding: .5rem;
		width: 25%;
		height: 100%;
		text-align: center;

		div.img {
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			aspect-ratio: 3/2;
			width: 100%;
			height: 100%;
			cursor: pointer;
		}

		div.img-enlarged {
			display: none;

			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;

			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			background-color: $color-bg;
			background-origin: content-box;

			//padding: 4rem;
		}

		&.open div.img-enlarged {
			display: block;
			z-index: 2;
		}
	}

	.nav-gallery {
		.nav-el {
			position: fixed;
			font-size: 2rem;
			padding: .75rem;
			user-select: none;
			cursor: pointer;
			z-index: 10;

      display: flex;

      text-shadow: 0 0 1.25rem rgba(0,0,0,0.70);
		}

    .back, .forward {
      align-items: center;
      height: 50%;
      width: 30%;
    }

		.close {
			top: 0;
			right: 0;
      height: 20%;
      width: 20%;
      justify-content: right;
		}

		.back {
			left: 0;
			top: calc(25% - 2rem);
      justify-content: left;
		}

		.forward {
			right: 0;
			top: calc(25% - 2rem);
      justify-content: right;
		}
	}

	@media only screen and (max-width: 1279px) {
		.gallery-item {
			width: 33.33%;
		}
	}

	@media only screen and (max-width: 1023px) {
		.gallery-item {
			width: 50%;
		}
	}

	@media only screen and (max-width: 719px) {
		.gallery-item {
			width: 100%;
		}
	}
}

</style>