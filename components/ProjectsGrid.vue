<template>
  <div class="projects-grid">
    <NuxtLink
        v-for="project in projects"
        :to="`/${project.slug}`"
    >
      <div
          class="img"
          :style="{'background-image': `url(${project.img})`}"
      />
      <div
        class="title"
      >
        <h5
            v-html="project.name"
        />
        <span
            v-html="project.year"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "ProjectsGrid",
  props: {
    projects: Array,
  }
}
</script>

<style lang="scss" scoped>
.projects-grid {
  display: flex;
  flex-wrap: wrap;

  a {
    padding: .25rem;
    width: 25%;
    height: 100%;
    text-decoration: none;
    text-align: center;

    div.img {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      aspect-ratio: 3/2;
      width: 100%;
      height: 100%;
    }

    div.title {
      text-align: left;
      h5 {
        display: inline-block;
        padding-right: .5rem;
      }
    }
  }

  @media only screen and (max-width: 1279px) {
    a {
      width: 33.33%;
    }
  }

  @media only screen and (max-width: 1023px) {
    a {
      width: 50%;
    }
  }

  @media only screen and (max-width: 719px) {
    a {
      width: 100%;
    }
  }
}
</style>