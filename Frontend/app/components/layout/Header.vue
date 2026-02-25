<template>
  <header class="header">
    <div class="header__container">
      <div class="header__brand">
        <h1 class="header__title">🍽️ Restaurant Booking</h1>
      </div>

      <nav class="header__nav">
        <NuxtLink to="/" class="header__link">
          Reservations
        </NuxtLink>
        <NuxtLink to="/reservations" class="header__link">
          My Bookings
        </NuxtLink>
      </nav>

      <div class="header__info">
        <div class="header__time">
          {{ currentTime }}
        </div>
        <button class="header__button">Sign In</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')

</script>
