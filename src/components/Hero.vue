<template>
  <section class="hero">

    <div class="hero-bg"></div>

    <div class="container hero-container">

      <!-- Left -->
      <div class="hero-left">

        <span class="welcome">
          👋 Hello, I'm
        </span>

        <h1>Ramya M</h1>

        <h2>
          {{ displayText }}<span class="cursor">|</span>
        </h2>

        <p>
          Building enterprise software that solves real business challenges. With 9+ years of experience in Full Stack Development, I specialize in developing scalable SaaS applications using PHP, Slim, Symfony, Vue.js, MySQL and Python/Flask. My expertise includes configurable form builders, workflow automation, authentication & authorization, Single Sign-On (SSO), RESTful APIs, and AI-assisted development. I enjoy transforming complex business requirements into secure, scalable, and user-friendly applications while continuously learning and adopting modern technologies.
        </p>

        <div class="hero-buttons">

          <a href="/Ramya_M_Resume.pdf" download="Ramya_M_Resume.pdf" class="btn-primary">
            Download Resume
          </a>

          <a href="#projects" class="btn-secondary">
            View Projects
          </a>

        </div>

        <!-- Statistics -->

        <div class="stats">

          <div class="stat">
            <h3>{{ years }}</h3>
            <p>Years</p>
          </div>

          <div class="stat">
            <h3>{{ projects }}</h3>
            <p>Projects</p>
          </div>

          <div class="stat">
            <h3>{{ features }}</h3>
            <p>Features</p>
          </div>

        </div>

      </div>

      <!-- Right -->

      <div class="hero-right">

        <div class="profile-circle">

          <img
              src="../assets/images/profile.jpg"
              alt="Ramya"
          />

        </div>

        <span class="floating php">PHP</span>
        <span class="floating laravel">Slim & Symfony</span>
        <span class="floating vue">Vue.js</span>
        <span class="floating mysql">MySQL</span>
        <span class="floating ai">AI</span>
        <span class="floating python">Python</span>
        <span class="floating flask">Flask</span>
        <span class="floating claude">Claude</span>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const titles = [
  'Software Engineer III',
  'Full Stack Developer'
]

const displayText = ref('')

let titleIndex = 0
let charIndex = 0

function typeEffect() {

  const current = titles[titleIndex]

  if (charIndex < current.length) {

    displayText.value += current.charAt(charIndex)

    charIndex++

    setTimeout(typeEffect, 80)

  } else {

    setTimeout(eraseEffect, 1500)

  }

}

function eraseEffect() {

  if (charIndex > 0) {

    displayText.value = displayText.value.slice(0, -1)

    charIndex--

    setTimeout(eraseEffect, 40)

  } else {

    titleIndex = (titleIndex + 1) % titles.length

    setTimeout(typeEffect, 300)

  }

}

const years = ref(0)
const projects = ref(0)
const features = ref(0)

function animateCounter(refVar, target) {

  let value = 0

  const interval = setInterval(() => {

    value++

    refVar.value = value

    if (value >= target)

      clearInterval(interval)

  }, 70)

}

onMounted(() => {

  typeEffect()

  animateCounter(years, 9)

  animateCounter(projects, 4)

  animateCounter(features, 20)

})
</script>

<style scoped>
.btn-primary{
  display:inline-flex;
  align-items:center;
  gap:10px;
}

.btn-primary span{
  transition:transform .3s;
}

.btn-primary:hover span{
  transform:translateY(2px);
}
</style>