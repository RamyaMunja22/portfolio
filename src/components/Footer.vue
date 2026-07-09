<template>

  <footer class="footer">

    <div class="container">

      <p>

        © {{ year }} Ramya M. All Rights Reserved.

      </p>

      <p>

        Built with ❤️ using Vue 3

      </p>

    </div>

  </footer>

</template>

<script setup>

const year=new Date().getFullYear()

</script>