<script setup lang="ts">
import Instructions from '../components/Instructions.vue'
</script>

<template>
  <header>
    <img alt="KJM logo" class="logo" src="@/assets/logo.png" width="125" height="125" />

    <div class="wrapper">
      <div class="greetings">
        <h1 class="orange">Welcome!</h1>
        <h3>
          Welcome to Kentucky Jail Ministries' Reporting Portal!
        </h3>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>