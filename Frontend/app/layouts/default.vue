<template>
	<div class="layout">
		<Header />
		<main class="layout__main">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script setup lang="ts">
import '~/assets/css/layout.css'
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
</script>
