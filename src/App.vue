<script setup lang="ts">
import { onMounted } from 'vue';
import { Analytics } from '@vercel/analytics/vue';
import AOS from 'aos';
import SiteHeader from './components/SiteHeader.vue';
import MainSections from './components/MainSections.vue';
import SiteFooter from './components/SiteFooter.vue';
import FloatingActions from './components/FloatingActions.vue';

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: false,
    mirror: true,
    offset: 50,
  });
});
</script>

<template>
  <SiteHeader />
  <MainSections />
  <SiteFooter />
  <FloatingActions />
  <Analytics />
</template>

<style>
/* Global resets if needed */
</style>
