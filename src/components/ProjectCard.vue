<template>

  <div class="project-card">

    <div class="project-content">

      <h3>{{ project.title }}</h3>

      <h5>{{ project.company }}</h5>

      <p>

        {{ project.description }}

      </p>

      <div class="badge-container">

<span
    v-for="tech in project.technologies"
    :key="tech"
    class="badge"
>

{{ tech }}

</span>

      </div>

      <h4>Key Features</h4>

      <ul>

        <li
            v-for="feature in project.features"
            :key="feature"
        >

          {{ feature }}

        </li>

      </ul>

    </div>

  </div>

</template>

<script setup>

defineProps({

  project:Object

})

</script>