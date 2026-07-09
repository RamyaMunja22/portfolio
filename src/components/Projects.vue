<template>

  <section id="projects" class="projects">

    <div class="container">

      <div class="section-title">

        <h2>Featured Projects</h2>

        <p>
          Some of the enterprise applications I've contributed to during my career.
        </p>

      </div>

      <div class="project-grid">

        <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
        />

      </div>

    </div>

  </section>

</template>

<script setup>

import projects from '../data/projects'
import ProjectCard from './ProjectCard.vue'

</script>