<template>
    <div class="w-60 flex flex-col mx-auto text-sm">
        <Header />
        <NuxtRouteAnnouncer />
        <Home />
        <!-- Footer -->
    </div>
</template>

<script setup lang="ts">
import Home from "./pages/index.vue";
import Header from "./layouts/Header.vue";
</script>
