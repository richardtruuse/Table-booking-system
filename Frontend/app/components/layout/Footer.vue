<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__section">
        <h3 class="footer__heading">Restaurant Booking</h3>
        <p class="footer__text">Making reservations simple and easy.</p>
      </div>

      <div class="footer__section">
        <h4 class="footer__subheading">Quick Links</h4>
        <ul class="footer__links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/reservations">My Bookings</NuxtLink></li>
        </ul>
      </div>

      <div class="footer__section">
        <h4 class="footer__subheading">Contact</h4>
        <p class="footer__text">
          📧 info@restaurant.com<br>
          📞 +372 123 4567
        </p>
      </div>
    </div>

    <div class="footer__bottom">
      <p>&copy; 2026 Restaurant Booking System. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
